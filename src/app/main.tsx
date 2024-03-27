"use client";
import React from "react";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const Main = () => {
  const router = useRouter();

  const handleFollowerSelect = (event: any) => {
    event.preventDefault();

    Swal.fire(
      "Successfully made 1k follower request. you will get your followers within 24 hours."
    );

    localStorage.removeItem("gems");
  };

  if (!localStorage?.getItem("FName")) {
    router.push("/login");
    return null; // Prevent rendering the rest of the component if not logged in
  }

  return (
    <main>
      <Navbar />
      <h3 className="text-center my-5 text-2xl">
        Welcome{" "}
        <span className="font-semibold">{localStorage?.getItem("FName")}</span>
      </h3>
      <h3 className="text-center my-5 text-2xl font-semibold">
        Followers Purchase Options
      </h3>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-pink-600 text-white">
            <th className="px-4 py-2">Gems</th>
            <th className="px-4 py-2">Followers</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100">
            <td className="border px-4 py-2">20 Gems</td>
            <td className="border px-4 py-2">1k followers</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="border px-4 py-2">500 Gems</td>
            <td className="border px-4 py-2">5k followers</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border px-4 py-2">1000 Gems</td>
            <td className="border px-4 py-2">10k followers</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="border px-4 py-2">2000 Gems</td>
            <td className="border px-4 py-2">20k followers</td>
          </tr>
        </tbody>
      </table>
      <form onSubmit={handleFollowerSelect} className="max-w-md mx-auto my-5">
        <div className="mb-4">
          <label
            htmlFor="follower"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Follower Amount
          </label>
          <select
            id="follower"
            className="form-select block w-full mt-1 rounded-md border-gray-300 focus:border-pink-500 focus:ring-pink-500"
          >
            <option value="" disabled>
              Select Follower Amount
            </option>
            <option disabled={!localStorage.getItem("gems") && true} value="1k">
              1k follower
            </option>
            <option value="5k" disabled={true}>
              5k follower
            </option>
            <option value="10k" disabled={true}>
              10k follower
            </option>
            <option value="20k" disabled={true}>
              20k follower
            </option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
        >
          Buy Followers
        </button>
      </form>
    </main>
  );
};

export default Main;
