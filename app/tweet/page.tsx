"use client";
import React, { useState } from "react";
import Tweet from "../_components/tweet";
import { useSession } from "next-auth/react";

function Page() {
  const { data: session } = useSession();
  const [isSubmit, setIsSubmit] = useState(false);

  // console.log(session?.user?.image);
  return (
    <div className="flex justify-center sm:ml-20 md:ml-20 lg:-mr-0 xl:mr-96 w-[100%] sm:w-[80vw]  max-w-2xl">
      <div className=" w-[80%] sm:w-[100%]">
        <Tweet session={session} setSubmit={setIsSubmit} />
      </div>
    </div>
  );
}

export default Page;
