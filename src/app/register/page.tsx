"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { addNewStudent } from "../data/studentRegister";
import SuccessToast from "@/components/toast/SuccessToast";
import ErrorToast from "@/components/toast/ErrorToast";

const Register = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [registerMessage, setRegisterMessage] = useState("");
  const [register, setRegister] = useState({
    username: "",
    firstname: "",
    lastname: "",
    password: "",
    email: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setRegister({
      ...register,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading((loading) => !loading);
    const newDataStudent = {
      ...register,
      id: Date.now(),
      date: new Date().toISOString().slice(0, 10),
    };

    addNewStudent(newDataStudent).then((e) => {
      setRegisterMessage(e);
      setIsLoading(false);
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    });
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
    <>
      {registerMessage.includes("berhasil") && (
        <SuccessToast message={registerMessage} />
      )}
      {registerMessage.includes("gagal") && (
        <ErrorToast message={registerMessage} />
      )}
      <div
        className={clsx(
          "flex justify-center items-center flex-col min-h-screen bg-primary-violet",
          "dark:bg-slate-700"
        )}
      >
        <div
          className={clsx(
            "mx-4 my-8 bg-base-100 border border-slate-300 flex justify-center items-center flex-col rounded-md py-12 px-4 w-[90%]",
            "md:w-[60%]",
            "lg:w-[62%]",
            "xl:w-[64%]",
            "2xl:w-[40%]",
            "dark:border-slate-500"
          )}
        >
          <h1
            className={clsx(
              "font-bold text-4xl text-primary-text",
              "dark:text-slate-400"
            )}
          >
            Register
          </h1>
          <p className="text-sm text-secondary-text mb-8 mt-2 text-center">
            Enter your username, firstname, lastname, email and password below
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
            <div className={clsx("flex flex-col gap-2 w-full", "lg:flex-row")}>
              <span className="flex flex-col w-full">
                <label className="text-base">FIRSTNAME</label>
                <input
                  className={clsx(
                    "input input-bordered rounded-md placeholder:text-base text-primary-text py-3 px-2 mt-2",
                    " dark:bg-dark_background dark:text-white"
                  )}
                  name="firstname"
                  type="text"
                  placeholder="firstname"
                  required
                  onChange={handleChange}
                />
              </span>
              <span className="flex flex-col w-full">
                <label className="text-base">LASTNAME</label>
                <input
                  className={clsx(
                    "input input-bordered rounded-md placeholder:text-base text-primary-text py-3 px-2 mt-2",
                    " dark:bg-dark_background dark:text-white"
                  )}
                  name="lastname"
                  type="text"
                  placeholder="lastname"
                  required
                  onChange={handleChange}
                />
              </span>
            </div>
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
              <p className="mt-4 text-center">Loading...</p>
            ) : (
              <input
                className={clsx(
                  "bg-blue-500 rounded-md py-4 font-semibold text-white cursor-pointer mt-1",
                  "hover:bg-blue-700",
                  "dark:bg-slate-600 dark:hover:bg-slate-500"
                )}
                type="submit"
                value="Register"
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
    </>
  );
};

export default Register;
