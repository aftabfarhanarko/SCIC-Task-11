"use server";

import { collections, dbConnect } from "@/lib/mongoDbcoect";

export const getHotelData = async () => {
  const result = await dbConnect(collections.HOTEL).find().toArray();
  return result;
};
