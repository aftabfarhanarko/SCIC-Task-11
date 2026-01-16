import { mybookingData } from "@/actions/server/getData";
import BookigData from "@/componets/my-booking/BookigData";
import React from "react";

const My_bookingpage = async () => {
 const data = await mybookingData();
 console.log("User Data", data);
 
  return (
    <div className=" pt-40">
      my-booking
      <BookigData />
    </div>
  );
};

export default My_bookingpage;
