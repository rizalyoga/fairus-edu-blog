import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center flex-col gap-4">
        <h1 className="text-4xl font-bold">Oops, Page Not Found !!! 😢</h1>
        <Link href={"/"} className="btn btn-primary">
          Back To Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
