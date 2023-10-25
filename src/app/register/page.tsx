"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Link from "next/link";

const Register = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [login, setLogin] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setLogin({
      ...login,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading((loading) => !loading);
  };

  const showPasswordComponents = (style: string) => {
    if (!isShowPassword) {
      return (
        <AiFillEyeInvisible onClick={showPasswordVisible} className={style} />
      );
    } else {
      return <AiFillEye onClick={showPasswordVisible} className={style} />;
    }
  };

  const showPasswordVisible = () => {
    setIsShowPassword((visible) => !visible);
  };

  return (
    <div
      className={clsx(
        "flex justify-center items-center flex-col h-screen bg-primary-violet"
      )}
    >
      <div
        className={clsx(
          "mx-4 bg-white border border-slate-300 flex justify-center items-center flex-col rounded-md py-12 px-4 w-[90%]",
          "md:w-[48%]",
          "lg:w-[40%]",
          "xl:w-[28%]",
          "2xl:w-[24%]",
          "dark:bg-dark_background"
        )}
      >
        <h1 className={clsx("font-bold text-4xl text-primary-text")}>
          Register
        </h1>
        <p className="text-sm text-secondary-text mb-8 mt-2 text-center">
          Enter your username, email and password below
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 text-slate-400 w-full"
        >
          <span className="flex flex-col">
            <label className="text-base">USERNAME</label>
            <input
              className={clsx(
                "input input-bordered rounded-md placeholder:text-base text-primary-text py-3 px-2 mt-2",
                " dark:bg-dark_background dark:text-white"
              )}
              name="username"
              type="text"
              placeholder="username"
              required
              onChange={handleChange}
            />
          </span>
          <span className="flex flex-col">
            <label className="text-base">EMAIL</label>
            <input
              className={clsx(
                "input input-bordered rounded-md placeholder:text-base text-primary-text py-3 px-2 mt-2",
                " dark:bg-dark_background dark:text-white"
              )}
              name="email"
              type="email"
              placeholder="email"
              required
              onChange={handleChange}
            />
          </span>
          <span className="flex flex-col">
            <span className="flex justify-between">
              <label className="text-base">PASSWORD</label>
            </span>
            <div className="relative flex">
              <input
                className={clsx(
                  "input input-bordered relative w-full rounded-md placeholder:text-base text-primary-text py-3 px-2 mt-2",
                  " dark:bg-dark_background dark:text-white"
                )}
                name="password"
                type={isShowPassword ? "text" : "password"}
                placeholder="Password"
                required
                onChange={handleChange}
              />
              {showPasswordComponents(
                "absolute text-2xl mt-5 mr-2 right-0 cursor-pointer"
              )}
            </div>
          </span>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <input
              className={clsx(
                "bg-blue-500 rounded-md py-4 font-semibold text-white cursor-pointer mt-1",
                "hover:bg-blue-700"
              )}
              type="submit"
              value="Log In"
            />
          )}
        </form>
        <p className="text-base text-secondary-text mt-5">
          Already have an account ?
          <span className="text-primary-cyan hover:underline cursor-pointer">
            <Link href="/login">{" Login"}</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
