"use server";

import { authOptions } from "@/lib/authOptions";
import { collections, dbConnect } from "@/lib/mongoDbcoect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";

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

  if (!result) {
    return null;
  }

  return { ...result, _id: result._id.toString() };
};

// Order Customer Data

export const orderData = async (data) => {
  const result = await dbConnect(collections.ORDER).insertOne(data);
  return { ...result, insertedId: result.insertedId.toString() };
  // return  result;
};

export const mybookingData = async () => {
  const users = await getServerSession(authOptions);
  console.log("GHet Tokes", users?.user?.email);

  const result = await dbConnect(collections.ORDER)
    .find({ customeremail: users?.user?.email })
    .toArray();
  return result.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));
};

export const deleteBooking = async (id) => {
  const users = await getServerSession(authOptions);
  const result = await dbConnect(collections.ORDER).deleteOne({
    _id: new ObjectId(id),
    customeremail: users?.user?.email,
  });
  return { ...result, deletedId: id };
};


export const contactData =async  (data) => {
  const result = await dbConnect(collections.CONTACT).insertOne(data);
   return {...result, insertedId:result.insertedId.toString()}
}