import React from "react";

const Directions = () => {
  return (
    <div className="mt-4">
      <h3 className="font-bold text-lg">Step by step recipe</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        className="mt-5"
      >
        <div className="flex gap-2 items-center pb-5 border-b border-opacity-10">
          <div className="basis-[10%]">
            <div className="w-[36px] h-[36px] rounded-[200px] border border-primary text-semibold text-xl flex justify-center items-center text-primary">
              1
            </div>
          </div>

          <p>
            Heat sesame oil and olive oil in a large nonstick skillet or wok
            over medium-high heat. Add shrimp and cook until they are bright
            pink on the outside and the meat is opaque, about 3 minutes,
            flipping halfway through.
          </p>
        </div>
        <div className="flex gap-2 items-center py-5 border-b border-opacity-10">
          <div className="basis-[10%]">
            <div className="w-[36px] h-[36px] rounded-[200px] border border-primary text-semibold text-xl flex justify-center items-center text-primary">
              2
            </div>
          </div>
          <p>
            Heat sesame oil and olive oil in a large nonstick skillet or wok
            over medium-high heat. Add shrimp and cook until they are bright
            pink on the outside and the meat is opaque, about 3 minutes,
            flipping halfway through.
          </p>
        </div>
        <div className="flex gap-2 items-center py-5 border-b border-opacity-10">
          <div className="basis-[10%]">
            <div className="w-[36px] h-[36px] rounded-[200px] border border-primary text-semibold text-xl flex justify-center items-center text-primary">
              3
            </div>
          </div>
          <p>
            Heat sesame oil and olive oil in a large nonstick skillet or wok
            over medium-high heat. Add shrimp and cook until they are bright
            pink on the outside and the meat is opaque, about 3 minutes,
            flipping halfway through.
          </p>
        </div>

        <div className="flex gap-2 items-center py-5 border-b border-opacity-10">
          <div className="basis-[10%]">
            <div className="w-[36px] h-[36px] rounded-[200px] border border-primary text-semibold text-xl flex justify-center items-center text-primary">
              4
            </div>
          </div>
          <p>
            Heat sesame oil and olive oil in a large nonstick skillet or wok
            over medium-high heat. Add shrimp and cook until they are bright
            pink on the outside and the meat is opaque, about 3 minutes,
            flipping halfway through.
          </p>
        </div>

        <div className="flex gap-2 items-center py-5">
          <div className="basis-[10%]">
            <div className="w-[36px] h-[36px] rounded-[200px] border border-primary text-semibold text-xl flex justify-center items-center text-primary">
              5
            </div>
          </div>
          <p>
            Heat sesame oil and olive oil in a large nonstick skillet or wok
            over medium-high heat. Add shrimp and cook until they are bright
            pink on the outside and the meat is opaque, about 3 minutes,
            flipping halfway through.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Directions;
