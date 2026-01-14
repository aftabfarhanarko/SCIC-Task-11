"use server";

import bcrypt from "bcryptjs";
import { collections, dbConnect } from "@/lib/mongoDbcoect";
export const postUser = async (payload) => {
  console.log(payload);
  const { name, email, password, photo } = payload;
  //   console.log({ name, email, password, photo });

  if (!email && !password) {
    return {
      success: false,
      message: "Email Or Password Is Required",
    };
  }

  const existingUser = await dbConnect(collections.USER).findOne({ email });
  if (existingUser) {
    return {
      success: false,
      message: "Email Allready Exisite",
    };
  }

  const users = {
    name,
    email,
    password: await bcrypt.hash(password, 10),
    photo,
    createdAt: new Date(),
    role: "user",
    provider: "credentials",
  };

  const result = await dbConnect(collections.USER).insertOne(users);
  console.log(result);

  if (result.acknowledged) {
    return {
      success: true,
      insertedId: result.insertedId.toString(),
    };
  }

  return {
    success: false,
    message: "User create failed",
  };
};
