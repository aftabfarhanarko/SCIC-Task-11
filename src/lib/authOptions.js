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
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please enter an email and password");
        }

        const user = await dbConnect(collections.USER).findOne({
          email: credentials.email,
        });

        if (!user) {
          throw new Error("No user found with this email");
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isValid) {
          throw new Error("Incorrect password");
        }
        // console.log("Full User Data", user);

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          image: user.photo || null,
          role: user.role || "user", // Ensure role is returned
        };
      },
    }),
  ],

  pages: {
    signIn: "/login",
    error: "/login", // Redirect to login on error
  },

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "credentials") {
        return true;
      }

      if (account.provider === "google") {
        try {
          const usersCollection = dbConnect(collections.USER);
          const existingUser = await usersCollection.findOne({
            email: user.email,
          });

          if (!existingUser) {
            await usersCollection.insertOne({
              name: user.name,
              email: user.email,
              photo: user.image, // Saved as photo
              role: "user",
              provider: account.provider,
              providerAccountId: account.providerAccountId,
              createdAt: new Date(),
            });
          }
          return true;
        } catch (error) {
          console.error("Error saving user to DB:", error);
          return false;
        }
      }
      return true;
    },

    async jwt({ token, user, account, trigger, session }) {
      if (trigger === "update" && session?.user) {
        token.name = session.user.name;
        token.image = session.user.image;
      }

      if (user) {
        if (account?.provider === "google") {
          const dbUser = await dbConnect(collections.USER).findOne({
            email: user.email,
          });

          if (dbUser) {
            token.id = dbUser._id.toString();
            token.role = dbUser.role || "user";
            token.image = dbUser.photo;
          }
        } else {
          token.id = user.id;
          token.role = user.role || "user";
          token.image = user.image || token.image || null;
        }
      }
      return token;
    },

    async session({ session, token }) {
      // console.log("Sessionn Tokenns", token);

      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.image || token.picture || null;
        session.user.role = token.role;
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET ?? "development-nextauth-secret",
};
