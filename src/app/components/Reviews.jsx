import React from "react";

const Reviews = () => {
  return (
    <div className="mt-5">
      <div className="font-bold text-lg flex flex-col gap-3">
        Your rating
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "4px",
          }}
        >
          <img
            style={{
              width: "20px",
              height: "20px",
            }}
            src="/noStar.svg"
          />
          <img
            style={{
              width: "20px",
              height: "20px",
            }}
            src="/noStar.svg"
          />
          <img
            style={{
              width: "20px",
              height: "20px",
            }}
            src="/noStar.svg"
          />

          <img
            style={{
              width: "20px",
              height: "20px",
            }}
            src="/noStar.svg"
          />
          <img
            style={{
              width: "20px",
              height: "20px",
            }}
            src="/noStar.svg"
          />
        </div>
      </div>
      <textarea
        id="message"
        rows={4}
        className="block p-3 w-full text-sm text-slate-900 rounded-lg border border-opacity-10 outline-primary my-6"
        placeholder="Write your review or comment here..."
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          justifyContent: "space-between",
        }}
        className="mt-5"
      >
        <div className="flex justify-between items-center border-b border-opacity-10">
          <div className="flex gap-5 items-start pb-6">
            <img src="/profile.svg" />
            <div>
              <div className="flex gap-2 mb-1">
                <p>John Tsunde</p>
                <div className="text-opacity-30 text-black">02/03/2024</div>
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
              </div>
              <div className="text-black text-opacity-40 mt-6">
                Turned out very well!
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <img src="/thumbsUp.svg" />
            <div>1</div>
          </div>
        </div>
        <div className="flex justify-between items-center border-b border-opacity-10">
          <div className="flex gap-5 items-start pb-6 ">
            <img src="/profile.svg" />
            <div>
              <div className="flex gap-2 mb-1">
                <p>John Tsunde</p>
                <div className="text-opacity-30 text-black">02/03/2024</div>
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
              </div>
              <div className="text-black text-opacity-40 mt-6">
                Turned out very well!
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <img src="/thumbsUp.svg" />
          </div>
        </div>
        <div className="flex justify-between items-center border-b border-opacity-10">
          <div className="flex gap-5 items-start pb-6 ">
            <img src="/profile.svg" />
            <div>
              <div className="flex gap-2 mb-1">
                <p>John Tsunde</p>
                <div className="text-opacity-30 text-black">02/03/2024</div>
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
              </div>
              <div className="text-black text-opacity-40 mt-6">
                Turned out very well!
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <img src="/thumbsUp.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
