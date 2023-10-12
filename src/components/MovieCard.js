import React from "react";

export default function MovieCard({ image, name, characters }) {
    return (
        <>
            <div style={{  height: "100vh", marginTop: "50px" }} className="group">
                <div className="relative grid w-full h-[100vw] sm:h-96 md:h-[40vw] flex flex-row items-end justify-center overflow-hidden rounded-bg-white bg-clip-border text-center">
                    <div
                        className="absolute inset-0 m-0 h-full  w-full overflow-hidden none bg-transparent  bg-cover bg-clip-border bg-center  shadow-none"
                        style={{ backgroundImage: `url(${image})`, height: "100vh" }}
                    >
                        <div className="to-bg-black-10 absolute group-hover:top-0 transition-all duration-300 top-full h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
                    </div>
                    <div className="text-white relative p-6 py-14 px-6 md:px-12 top-full group-hover:top-0 transition-all duration-300 ">
                        <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5]   antialiased">
                            {name}
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
};