"use client";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  return (
    <div className="">
      <h3 className="text-4xl font-bold me-5 text-center">
        Under Construction !! 404
      </h3>
      <button
        onClick={() => {
          router.back();
        }}
        className="btn btn-secondary btn-md mx-5"
      >
        Go back!
      </button>
    </div>
  );
};

export default page;
