import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '../db/index.js';
import * as schema from '../db/schema.js';

export const auth = betterAuth({
database: drizzleAdapter(db, {
provider: 'pg',
schema: schema,
}),
baseURL: process.env.BETTER_AUTH_URL || 'http://localhost:3000',
emailAndPassword: {
enabled: true,
requireEmailVerification: false,
minPasswordLength: 8,
},
session: {
expiresIn: 60 * 60 * 24 * 7, // 7 days
updateAge: 60 * 60 * 24, // 1 day
},
trustedOrigins: [process.env.CLIENT_URL || 'http://localhost:5173'],
advanced: {
defaultCookieAttributes: {
sameSite: 'lax',
secure: process.env.NODE_ENV === 'production',
},
},
});