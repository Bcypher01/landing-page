import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav class="flex items-center justify-between border-b-0 shadow-md flex-wrap p-6">
          <div class="flex items-center flex-shrink-0 text-black mr-6">
            <span class="text-3xl text-purple-800 border-b-2 border-r-2 p-1 shadow-sm tracking-tight">
              The Surge
            </span>
          </div>
          <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-black hover:text-white hover:border-white">
              <svg
                class="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto pr-4">
            <div class="text-md mx-auto space-x-8 font-semibold">
              <a
                href="#responsive-header"
                class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-400"
              >
                Docs
              </a>
              <a
                href="#responsive-header"
                class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-400"
              >
                Examples
              </a>
              <a
                href="#responsive-header"
                class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-400"
              >
                Blog
              </a>
            </div>
            <div class="w-3/5 px-8">
              <input
                class="bg-gray-200 appearance-none border-2  border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                placeholder="Jane Doe"
              />
            </div>
            <div className="space-x-1">
              <a
                href="/"
                class="inline-block text-sm px-4 font-semibold py-2 mt-4 lg:mt-0"
              >
                Login
              </a>
              <button class="bg-transparent hover:bg-purple-500 text-purple-500 font-semibold hover:text-white py-1 px-4 border border-purple-500 hover:border-transparent rounded">
                Sign Up
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
