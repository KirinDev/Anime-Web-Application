"use client";

import { Silkscreen } from "next/font/google";

const silkscreen = Silkscreen({ weight: "400", subsets: ["latin"] });

export default function Login() {
  
  return (
    <main style={{ backgroundImage: "url('https://image.tensorartassets.com/posts/images/659404031420174067/b9951d6a-8b99-4f5f-916f-cd56f7eaeb5b.jpg')" }} className="flex items-center justify-center h-screen flex-col">
      <h1 className={`${silkscreen.className} text-[50px] text-center mb-12`}>Bonfire</h1>
      <div className="bg-sky-800 opacity-80 p-8 rounded-lg shadow-md w-96 mt-4">
        <h2 style={{ fontFamily: "Itim, cursive" }} className="text-2xl font-bold mb-6 text-center text-white">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" style={{ fontFamily: "Itim, cursive" }} className="block text-white mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" style={{ fontFamily: "Itim, cursive" }} className="block text-white mb-2">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-6">
            <a href="/forgot-password" style={{ fontFamily: "Itim, cursive" }} className="text-sky-200 text-sm hover:underline">Forgot Password?</a>
          </div>
          <button
            type="submit"
            style={{ fontFamily: "Itim, cursive" }} className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
