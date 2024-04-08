"use client";
import Image from "next/image";
import { Button, Skeleton } from "antd";

export default function Home() {
  return (
    <>
      <div className="bg-hero-bg bg-cover bg-no-repeat w-full h-[370px] bg-center pt-16 relative">
        <div className="bg-opacity-30 absolute top-0 left-0 bg-black w-full h-full" />

        <div className="relative w-2/3 max-w-[534px] mx-auto">
          <div className="absolute inset-y-0 left-4 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                stroke="#292D32"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
              />
              <path
                stroke="#292D32"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            className="block w-full px-8 py-4 pl-16 text-slate-700 border border-slate-300 rounded-[500px] bg-slate-50 outline-none box-border truncate"
            placeholder="Search 1M+ recipes"
          />
        </div>
      </div>
      <section className="py-3 max-w-5xl mx-5 lg:mx-auto -mt-44">
        <div className="flex justify-end gap-3 z-10 relative">
          <div className="w-10 h-10 border rounded-full border-white bg-white bg-opacity-20 flex justify-center items-center hover:scale-105 transition duration-500 cursor-pointer">
            <img src="/whiteLeft.svg" alt="navigate left icon" />
          </div>

          <div className="w-10 h-10 border rounded-full border-white bg-white bg-opacity-20 flex justify-center items-center rotate-180 hover:scale-105 transition duration-500 cursor-pointer">
            <img src="/whiteLeft.svg" alt="navigate right icon" />
          </div>
        </div>

        <div className="overflow-x-auto no-scrollbar">
          <div className="flex gap-7 py-3">
            <div className="bg-white rounded-3xl transform hover:scale-105 transition duration-500 border border-opacity-10 border-black">
              <div className="w-[341px]">
                <img
                  className="w-full rounded-t-3xl"
                  src="https://source.unsplash.com/random/200x200"
                  alt=""
                />
                <div className="p-7">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">
                        American Shrimp Fried Rice
                      </h3>
                      <p className="text-xs text-opacity-50 text-black">
                        MICHAEL OWEN
                      </p>
                    </div>
                    <div>
                      <img src="/noLike.svg" alt="like icon"></img>
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

                    <p>1k</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl transform hover:scale-105 transition duration-500 border border-opacity-10 border-black">
              <div className="w-[341px]">
                <img
                  className="w-full rounded-t-3xl"
                  src="https://source.unsplash.com/random/200x200"
                  alt=""
                />
                <div className="p-7">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">
                        American shrimp fried rice
                      </h3>
                      <p className="text-xs text-opacity-50 text-black">
                        MICHAEL OWEN
                      </p>
                    </div>
                    <div>
                      <img src="/noLike.svg" alt="like icon"></img>
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

                    <p>1k</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl transform hover:scale-105 transition duration-500 border border-opacity-10 border-black">
              <div className="w-[341px]">
                <img
                  className="w-full rounded-t-3xl"
                  src="https://source.unsplash.com/random/200x200"
                  alt=""
                />
                <div className="p-7">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">
                        American shrimp fried rice
                      </h3>
                      <p className="text-xs text-opacity-50 text-black">
                        MICHAEL OWEN
                      </p>
                    </div>
                    <div>
                      <img src="/noLike.svg" alt="like icon"></img>
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

                    <p>1k</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl transform hover:scale-105 transition duration-500 border border-opacity-10 border-black">
              <div className="w-[341px]">
                <img
                  className="w-full rounded-t-3xl"
                  src="https://source.unsplash.com/random/200x200"
                  alt=""
                />
                <div className="p-7">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">
                        American shrimp fried rice
                      </h3>
                      <p className="text-xs text-opacity-50">MICHAEL OWEN</p>
                    </div>
                    <div>
                      <img src="/noLike.svg" alt="like icon"></img>
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

                    <p>1k</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 max-w-5xl mx-5 lg:mx-auto">
        <div>
          <h2 className="text-2xl font-semibold text-center mb-8 flex flex-col items-center">
            MORE RECIPES
            <div className="w-[33px] h-[3px] bg-primary rounded-[10px]" />
          </h2>
        </div>

        <div className="overflow-x-auto no-scrollbar">
          <div className="flex gap-7 py-3">
            <div className="bg-white rounded-3xl transform hover:scale-105 transition duration-500 border border-opacity-10 border-black">
              <div className="w-[341px]">
                <img
                  className="w-full rounded-t-3xl"
                  src="https://source.unsplash.com/random/200x200"
                  alt=""
                />
                <div className="p-7">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">
                        American shrimp fried rice
                      </h3>
                      <p className="text-xs text-opacity-50 text-black">
                        MICHAEL OWEN
                      </p>
                    </div>
                    <div>
                      <img src="/noLike.svg" alt="like icon"></img>
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

                    <p>1k</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl transform hover:scale-105 transition duration-500 border border-opacity-10 border-black">
              <div className="w-[341px]">
                <img
                  className="w-full rounded-t-3xl"
                  src="https://source.unsplash.com/random/200x200"
                  alt=""
                />
                <div className="p-7">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">
                        American shrimp fried rice
                      </h3>
                      <p className="text-xs text-opacity-50 text-black">
                        MICHAEL OWEN
                      </p>
                    </div>
                    <div>
                      <img src="/noLike.svg" alt="like icon"></img>
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

                    <p>1k</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl transform hover:scale-105 transition duration-500 border border-opacity-10 border-black">
              <div className="w-[341px]">
                <img
                  className="w-full rounded-t-3xl"
                  src="https://source.unsplash.com/random/200x200"
                  alt=""
                />
                <div className="p-7">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">
                        American shrimp fried rice
                      </h3>
                      <p className="text-xs text-opacity-50 text-black">
                        MICHAEL OWEN
                      </p>
                    </div>
                    <div>
                      <img src="/noLike.svg" alt="like icon"></img>
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

                    <p>1k</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl transform hover:scale-105 transition duration-500 border border-opacity-10 border-black">
              <div className="w-[341px]">
                <img
                  className="w-full rounded-t-3xl"
                  src="https://source.unsplash.com/random/200x200"
                  alt=""
                />
                <div className="p-7">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">
                        American shrimp fried rice
                      </h3>
                      <p className="text-xs text-opacity-50">MICHAEL OWEN</p>
                    </div>
                    <div>
                      <img src="/noLike.svg" alt="like icon"></img>
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

                    <p>1k</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex gap-7 py-3">
            <div className="bg-white rounded-3xl transform hover:scale-105 transition duration-500 border border-opacity-10 border-black">
              <div className="w-[341px]">
                <img
                  className="w-full rounded-t-3xl"
                  src="https://source.unsplash.com/random/200x200"
                  alt=""
                />
                <div className="p-7">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">
                        American shrimp fried rice
                      </h3>
                      <p className="text-xs text-opacity-50 text-black">
                        MICHAEL OWEN
                      </p>
                    </div>
                    <div>
                      <img src="/noLike.svg" alt="like icon"></img>
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

                    <p>1k</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl transform hover:scale-105 transition duration-500 border border-opacity-10 border-black">
              <div className="w-[341px]">
                <img
                  className="w-full rounded-t-3xl"
                  src="https://source.unsplash.com/random/200x200"
                  alt=""
                />
                <div className="p-7">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">
                        American shrimp fried rice
                      </h3>
                      <p className="text-xs text-opacity-50 text-black">
                        MICHAEL OWEN
                      </p>
                    </div>
                    <div>
                      <img src="/noLike.svg" alt="like icon"></img>
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

                    <p>1k</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl transform hover:scale-105 transition duration-500 border border-opacity-10 border-black">
              <div className="w-[341px]">
                <img
                  className="w-full rounded-t-3xl"
                  src="https://source.unsplash.com/random/200x200"
                  alt=""
                />
                <div className="p-7">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">
                        American shrimp fried rice
                      </h3>
                      <p className="text-xs text-opacity-50 text-black">
                        MICHAEL OWEN
                      </p>
                    </div>
                    <div>
                      <img src="/noLike.svg" alt="like icon"></img>
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

                    <p>1k</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl transform hover:scale-105 transition duration-500 border border-opacity-10 border-black">
              <div className="w-[341px]">
                <img
                  className="w-full rounded-t-3xl"
                  src="https://source.unsplash.com/random/200x200"
                  alt=""
                />
                <div className="p-7">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">
                        American shrimp fried rice
                      </h3>
                      <p className="text-xs text-opacity-50">MICHAEL OWEN</p>
                    </div>
                    <div>
                      <img src="/noLike.svg" alt="like icon"></img>
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

                    <p>1k</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
