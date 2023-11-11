import React from "react";

const LessonsPage = () => {
  return (
    <div className="bg-base-100 pt-20">
      <div className="content-container px-4 lg:px-0 flex justify-center flex-col items-center">
        <h1 className="font-bold text-title-section text-center pt-12 pb-10 text-primary-green">
          Lessons
        </h1>
        <p className="text-center text-base-text pb-10 md:w-[80%] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          consectetur nibh sed facilisis efficitur. Nam fringilla imperdiet
          feugiat. Mauris facilisis diam nulla. Nam fringilla imperdiet feugiat.
          Mauris facilisis diam nulla. Nam fringilla imperdiet feugiat.
        </p>

        <h4 className="text-center font-bold text-title-sub-section">
          The steps to start class
        </h4>

        <div className="grid gap-6 sm:grid-cols-2 py-10 ">
          <span>
            <h4 className="font-bold text-primary-green text-xl">
              1 – Register Account
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              provident quia omnis nam recusandae dolorum. Deleniti saepe cumque
              omnis magnam, rem neque, accusamus possimus ullam, asperiores
              facere molestias nemo similique?
            </p>
          </span>
          <span>
            <h4 className="font-bold text-primary-green text-xl">
              2 – Login With Account that Already Registered
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              provident quia omnis nam recusandae dolorum. Deleniti saepe cumque
              omnis magnam, rem neque, accusamus possimus ullam, asperiores
              facere molestias nemo similique?
            </p>
          </span>
          <span>
            <h4 className="font-bold text-primary-green text-xl">
              3 – Do The Pretest
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              provident quia omnis nam recusandae dolorum. Deleniti saepe cumque
              omnis magnam, rem neque, accusamus possimus ullam, asperiores
              facere molestias nemo similique?
            </p>
          </span>
          <span>
            <h4 className="font-bold text-primary-green text-xl">
              4 – Do The Quiz And Final Test
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              provident quia omnis nam recusandae dolorum. Deleniti saepe cumque
              omnis magnam, rem neque, accusamus possimus ullam, asperiores
              facere molestias nemo similique?
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LessonsPage;
