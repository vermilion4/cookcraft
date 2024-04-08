import React from "react";

const Ingredients = () => {
  return (
    <div className="mt-4 overflow-x-auto">
      <h3 className="font-bold text-lg">Ingredients Type</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "24px",
        }}
        className="mt-5 overflow-x-auto"
      >
        <div
          style={{
            width: "112px",
            height: "103px",
          }}
          className="border border-opacity-10 rounded-3xl text-opacity-80 flex justify-center items-center"
        >
          Oils
        </div>
        <div
          style={{
            width: "112px",
            height: "103px",
          }}
          className={
            "border border-opacity-10 rounded-3xl text-opacity-80 flex justify-center items-center"
          }
        >
          Oils
        </div>

        <div
          style={{
            width: "112px",
            height: "103px",
          }}
          className={
            "border border-opacity-10 rounded-3xl text-opacity-80 flex justify-center items-center"
          }
        >
          Oils
        </div>

        <div
          style={{
            width: "112px",
            height: "103px",
          }}
          className={
            "border border-opacity-10 rounded-3xl text-opacity-80 flex justify-center items-center"
          }
        >
          Oils
        </div>

        <div
          style={{
            width: "112px",
            height: "103px",
          }}
          className={
            "border border-opacity-10 rounded-3xl text-opacity-80 flex justify-center items-center"
          }
        >
          Oils
        </div>

        <div
          style={{
            width: "112px",
            height: "103px",
          }}
          className={
            "border border-opacity-10 rounded-3xl text-opacity-80 flex justify-center items-center"
          }
        >
          Oils
        </div>
      </div>
      <h3 className="font-bold text-lg mt-8">Ingredients Measurement</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          justifyContent: "space-between",
        }}
        className="mt-5"
      >
        <div className="flex gap-2 items-center">
          <img src="/bullet.svg" />
          <p>2 tablespoons sesame oil</p>
        </div>
        <div className="flex gap-2 items-center">
          <img src="/bullet.svg" />
          <p>2 tablespoons sesame oil</p>
        </div>
        <div className="flex gap-2 items-center">
          <img src="/bullet.svg" />
          <p>2 tablespoons sesame oil</p>
        </div>

        <div className="flex gap-2 items-center">
          <img src="/bullet.svg" />
          <p>2 tablespoons sesame oil</p>
        </div>

        <div className="flex gap-2 items-center">
          <img src="/bullet.svg" />
          <p>2 tablespoons sesame oil</p>
        </div>

        <div className="flex gap-2 items-center">
          <img src="/bullet.svg" />
          <p>2 tablespoons sesame oil</p>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
