import React, { useState } from "react";
import FormCard from "./FormCard";

function Applications() {

  return (
    <div className="bg-[#eaeaea] p-4 max-w-[83%] ">
      <div>
        <h1 className="text-2xl font-normal ">All Application Form(s)</h1>
        <p className="leading-7 text-[14px]">
          After making the payment if the amount is debited from your account
          and payment status is showing pending then hit the Make payment button
          once again to get the status updated and if still Payment Status is
          showing pending then write to us on Any Queries? Ask US displayed on
          your dashboards.
        </p>
      </div>
      <div className="w-full bg-[#afadad] h-[1px] my-6 "></div>
      <div className="mt-5">
        <p className="text-[#e45c37] text-lg my-6 ">Application Forms</p>
        {/* components */}
        <FormCard/>
      </div>
    </div>
  );
}

export default Applications;
