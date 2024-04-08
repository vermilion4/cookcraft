"use client";

import React from "react";
import { Tabs } from "antd";
import Ingredients from "../components/Ingredients";
import Directions from "../components/Directions";
import Reviews from "../components/Reviews";

const SingleRecipeView = () => {
  return (
    <div className="min-h-screen max-w-5xl mx-5 lg:mx-auto pt-6 pb-12">
      <button className="h-12 py-2 flex items-center gap-2 transition duration-300 ease-in-out mb-8">
        <img src="/blackLeft.svg" alt="go back to previous page icon" />

        <span>Go Back</span>
      </button>
      <div className="bg-white mb-8">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            className="w-1/2 rounded-[20.27px] max-w-[500px] h-auto max-h-[405px]"
            src="https://source.unsplash.com/random/200x200"
            alt=""
          />
          <div className="flex flex-col items-center md:items-start md:w-1/2">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-center md:text-start">
                <h3 className="text-2xl font-semibold">
                  American shrimp fried rice
                </h3>
                <p className="text-opacity-50 text-black">MICHAEL OWEN</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "4px",
                  justifyContent: "space-between",
                }}
              >
                <img
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                  src="/star.svg"
                />
                <img
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                  src="/star.svg"
                />
                <img
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                  src="/star.svg"
                />

                <img
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                  src="/star.svg"
                />
                <img
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                  src="/noStar.svg"
                />
              </div>

              <p>1k Reviews</p>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <button className="h-14 px-6 flex rounded-[500px] items-center gap-2 hover:bg-white transition duration-300 ease-in-out text-white bg-primary hover:text-primary border border-primary group">
                <img
                  src="/whiteNoLife.svg"
                  alt="like icon"
                  className="group-hover:filter group-hover:fill-white"
                />

                <span>Save Recipe</span>
              </button>
              <button className="h-14 px-6 flex rounded-[500px] items-center gap-2 hover:bg-primary transition duration-300 ease-in-out text-primary hover:text-white border border-primary group">
                <img
                  src="/share.svg"
                  alt="share icon"
                  className="group-hover:filter group-hover:fill-white"
                />

                <span>Share Recipe</span>
              </button>
            </div>
            <button className="mt-5 h-14 w-[80%] justify-center px-4 py-2 flex rounded-[500px] items-center gap-2 bg-primary text-primary transition duration-300 ease-in-out mb-7 border border-primary border-opacity-[0.08] bg-opacity-[0.06]">
              <img
                src="/addOrange.svg"
                alt="add to meal planner icon"
                className="group-hover:filter group-hover:fill-white"
              />

              <span>Add to Meal Planner</span>
            </button>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "0px",
                justifyContent: "space-between",
              }}
              className="p-5 rounded-3xl border border-opacity-10"
            >
              <div className="flex flex-col gap-2 items-center pr-6 lg:pr-10 pl-4 border-r border-opacity-10">
                <div className="flex gap-1">
                  <img src="/ingredients.svg"></img>
                  <p className="text-xl">16</p>
                </div>

                <p className="text-opacity-50">Ingredients</p>
              </div>
              <div className="flex flex-col gap-2 items-center border-r border-opacity-10 px-6 lg:px-10">
                <div className="flex gap-1">
                  <img src="/timer.svg"></img>
                  <p className="text-xl">18</p>
                </div>

                <p className="text-opacity-50">Minutes</p>
              </div>
              <div className="flex flex-col gap-2 items-center pr-4 lg:pr-10 pl-10">
                <div className="flex gap-1">
                  <img src="/ingredients.svg"></img>
                  <p className="text-xl">1540</p>
                </div>

                <p className="text-opacity-50">Calories</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: "Ingredients",
            key: "1",
            children: <Ingredients />,
          },
          {
            label: "Directions",
            key: "2",
            children: <Directions />,
          },
          {
            label: "Reviews",
            key: "3",
            children: <Reviews />,
          },
        ]}
      />
    </div>
  );
};

export default SingleRecipeView;
