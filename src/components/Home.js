import React, { Component } from "react";
import Header from "./nav/Header";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container ml-10 mb-10 flex">
          <div className="lg:w-3/6 mr-10 w-full py-10">
            <h2 className="text-5xl font-extrabold space-x-2 py-5 font-bold text-black">
              Welcome to The Surge
            </h2>
            <p className="text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              impedit dignissimos, corrupti nisi eum autem quos similique rerum
              saepe non ea enim optio, ullam culpa suscipit molestias, nulla
              ipsa fugiat.
            </p>
            <div className="mt-8">
              <button class="bg-transparent bg-purple-500 hover:bg-purple-400 font-semibold text-white py-2 px-4 border border-purple-500 hover:border-transparent">
                Learn More
              </button>
            </div>
          </div>
          <div className="hidden md:block w-3/6 bg-contain mt-8">
            <img
              alt="background"
              className="object-fill rounded w-full"
              src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
            />
          </div>
        </div>
        <div className="mx-auto bg-gray-100 w-full h-full px-10">
          <div className="flex">
            <div className="w-2/4  mt-10">
              <h2 className="text-3xl font-semibold">What is The Surge?</h2>
              <p className="pt-6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                impedit dignissimos, corrupti nisi eum autem quos similique
                rerum
              </p>
            </div>
            <div className="w-2/4">
              <img
                alt="under construction"
                className="float-right w-58 h-48"
                src="https://freepngimg.com/thumb/animation/58934-engineering-signs-traffic-architectural-royalty-free-free-clipart-hd.png"
              />
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-4 gap-4 pt-3">
            <div class="max-w-sm rounded border-t-2 border-purple-300 hover:border-purple-500 hover:cursor-pointer hover:shadow-2xl bg-white overflow-hidden shadow-md col-span-1">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
            <div class="max-w-sm rounded border-t-2 border-purple-300 hover:border-purple-500 hover:cursor-pointer hover:shadow-2xl bg-white overflow-hidden shadow-md col-span-1">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
              </div>
            </div>
            <div class="max-w-sm rounded border-t-2 border-purple-300 hover:border-purple-500 hover:cursor-pointer hover:shadow-2xl bg-white overflow-hidden shadow-md col-span-1">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
              </div>
            </div>
            <div class="max-w-sm rounded border-t-2 border-purple-300 hover:border-purple-500 hover:cursor-pointer hover:shadow-2xl bg-white overflow-hidden shadow-md col-span-1">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
