"use server";

import { collections, dbConnect } from "@/lib/mongoDbcoect";
import { ObjectId } from "mongodb";

export const getHotelData = async () => {
  const result = await dbConnect(collections.HOTEL).find().toArray();

  return result.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));
};

export const singleData = async (id) => {
  console.log(id);

  const result = await dbConnect(collections.HOTEL).findOne({
    _id: new ObjectId(id),
  });

  return {...result, _id:result._id.toString()};
};


// Order Customer Data

export const  orderData = async (data) => {
  const result = await dbConnect(collections.ORDER).insertOne(data);
  return {...result, insertedId:result.insertedId.toString()};
  // return  result;
}