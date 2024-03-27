"use client";
import React from "react";

import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const Login: React.FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();
  const onSubmit = async (data: any) => {
    try {
      const { name, emailPhone, password, idLink } = data;
      const reqbody = { Name: name, email: emailPhone, password, idLink };

      const response = await axiosPublic.post("/login", reqbody);

      // Check for successful login (adjust according to your API response structure)
      if (response.status === 200 && response.data.success) {
        if (typeof window !== "undefined") {
          localStorage.setItem("FName", name);
          localStorage.setItem("gems", "20");
        }

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successful",
          showConfirmButton: false,
          timer: 1500,
        });

        router.push("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Login failed",
          text: "Please check your credentials and try again.",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "An error occurred. Please try again later.",
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-pink-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-2xl text-center text-pink-600 mb-6">
          Enter your Facebook's required information <br />
          <span className="font-semibold text-sm">
            You will get 20 gems for first login (one time only)!!
          </span>
        </h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            className="form-input rounded-md border-gray-500 px-4 py-2 w-full focus:outline-none focus:border-pink-500"
          />
          {errors.name && (
            <span className="text-sm text-red-500">Name is required</span>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="emailPhone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email/Phone
          </label>
          <input
            type="text"
            id="emailPhone"
            {...register("emailPhone", { required: true })}
            className="form-input rounded-md border-gray-500 px-4 py-2 w-full focus:outline-none focus:border-pink-500"
          />
          {errors.emailPhone && (
            <span className="text-sm text-red-500">
              Email/Phone is required
            </span>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", { required: true })}
            className="form-input rounded-md border-gray-500 px-4 py-2 w-full focus:outline-none focus:border-pink-500 input-primary"
          />
          {errors.password && (
            <span className="text-sm text-red-500">Password is required</span>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="idLink"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            ID Link
          </label>
          <input
            type="text"
            id="idLink"
            {...register("idLink", { required: true })}
            className="form-input rounded-md border-gray-500 px-4 py-2 w-full focus:outline-none focus:border-pink-500"
          />
          {errors.idLink && (
            <span className="text-sm text-red-500">ID Link is required</span>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
