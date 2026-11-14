import { pgTable, text, timestamp, boolean } from 'drizzle-orm/pg-core';
import { integer } from 'drizzle-orm/pg-core'; 

export const user = pgTable('user', {
id: text('id').primaryKey(),
name: text('name').notNull(),
email: text('email').notNull().unique(),
emailVerified: boolean('email_verified').notNull().default(false),
image: text('image'),
createdAt: timestamp('created_at').notNull().defaultNow(),
updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const session = pgTable('session', {
id: text('id').primaryKey(),
expiresAt: timestamp('expires_at').notNull(),
token: text('token').notNull().unique(),
createdAt: timestamp('created_at').notNull().defaultNow(),
updatedAt: timestamp('updated_at').notNull().defaultNow(),
ipAddress: text('ip_address'),
userAgent: text('user_agent'),
userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
});

export const account = pgTable('account', {
id: text('id').primaryKey(),
accountId: text('account_id').notNull(),
providerId: text('provider_id').notNull(),
userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
accessToken: text('access_token'),
refreshToken: text('refresh_token'),
idToken: text('id_token'),
accessTokenExpiresAt: timestamp('access_token_expires_at'),
refreshTokenExpiresAt: timestamp('refresh_token_expires_at'),
scope: text('scope'),
password: text('password'),
createdAt: timestamp('created_at').notNull().defaultNow(),
updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const verification = pgTable('verification', {
id: text('id').primaryKey(),
identifier: text('identifier').notNull(),
value: text('value').notNull(),
expiresAt: timestamp('expires_at').notNull(),
createdAt: timestamp('created_at').notNull().defaultNow(),
updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const products = pgTable('products', {
id: text('id').primaryKey(),
name: text('name').notNull(),
slug: text('slug').unique().unique(),
author: text('author'),
description: text('description').default(''),
tagline: text('tagline'),
price: integer('price').notNull(),
stock: integer('stock').notNull().default(0),
imageUrl: text('image_url'),
category: text('category'),
featured: boolean('featured').notNull().default(false),
createdAt: timestamp('created_at').notNull().defaultNow(),
updatedAt: timestamp('updated_at').notNull().defaultNow(),
});
export const productImages = pgTable('product_images', {
id: text('id').primaryKey(),
productId: text('product_id').notNull().references(() => products.id, { onDelete: 'cascade' }),
url: text('url').notNull(),
sortOrder: integer('sort_order').notNull().default(0),
});
