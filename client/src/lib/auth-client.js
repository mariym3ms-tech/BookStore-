import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
baseURL: "https://bookstore-production-df9c3bd2.up.railway.app",
});

export const { signIn, signUp, signOut, useSession } = authClient;
