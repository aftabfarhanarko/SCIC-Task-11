import { getHotelData } from '@/actions/server/getData';
import ContentFeedback from '@/componets/Feedback/ContentFeedBack';
import React from 'react';

const Feedbackpage = async () => {
    const  data  = await getHotelData();
    console.log( "This is Da",data);

    
    return (
        <div className=" pt-20">
            <ContentFeedback/>
        </div>
    );
};

export default Feedbackpage;