import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { collections, dbConnect } from "./mongoDbcoect";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID || "",
      clientSecret: process.env.CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Mock user validation logic
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        // Get Databaase user Data Find
        const user = await dbConnect(collections.USER).findOne({
          email: credentials.email,
        });

        // Not Find  User Data Return Null
        if (!user) {
          return null;
        }
        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        // Not Match  User Password Saved in Database and Login Password Not Match  Return Null
        if (!isValid) {
          return null;
        }

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          image: user.photo || null,
          role: user.role,
        };
      },
    }),
  ],

  pages: {
    signIn: "/login", // Adjust if your login page path is different
  },
  callbacks: {
    async signIn({ user, account, email, credentials }) {
      console.log("Signin User", { user, account, email, credentials });
      if (account.provider === "credentials") {
        // Credentials user already exists
        return true;
      }

      // Google Login
      const usersCollection = dbConnect(collections.USER);
      console.log("Googl", usersCollection);

      const existingUser = await usersCollection.findOne({
        email: user.email,
      });
      console.log("Google login", existingUser);

      if (!existingUser) {
        await usersCollection.insertOne({
          name: user.name,
          email: user.email,
          photo: user.image,
          role: "user",
          provider: account.provider,
          providerAccountId: account.providerAccountId,
          createdAt: new Date(),
        });
      }

      return true; // ✅ MUST be boolean
    },

    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },

    async session({ session, user, token }) {
      console.log("This is session", { session, user, token });
      if (token) {
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
        // session.user.role = token.role;
      }
      console.log("Session Connnect NNow", session);

      return session;
    },
    async jwt({ token, user, account }) {
      console.log("TOken", token, user , account);
      
       if (user) {
        if (account.provider == "google") {
          const dbUser = await dbConnect(collections.USER).findOne({
            email: user.email,
          });
          token.name = dbUser.name;
          token.role = dbUser?.role;
          token.email = dbUser?.email;
          token.image = dbUser.image;
        } else {
          token.name = user.name;
          token.email = user.email;
          token.image = user.image;
          // token.role = user.role;
        }
      }
      return token;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};
