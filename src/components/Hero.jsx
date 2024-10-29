import metadata from "../locals/metadata.json";
export const Hero = () => {
    return (
        <div className="bg-color-1 lg:h-[88%] flex justify-center items-center py-[10rem] lg:py-0">
            <div className="w-fit space-y-4">
                <div className="flex justify-center items-center">
                <img src="/logo.jpg" alt="Dans's Logo" className="rounded-full flex justify-center items-center w-[10rem] h-[10rem]" />

                </div>
                <h1 className="text-4xl font-semibold text-color-2 cursor-pointer">{metadata["head_1"]}
                    <span className="underline decoration-color-4 hover:bg-color-4 hover:text-color-1">{metadata["full_name"]}.</span>
                </h1>
                <div className="flex justify-center">
                    <div className="flex justify-center bg-none w-fit p-3 ">
                        <a className="bg-color-4 px-3 py-2 hover:bg-color-1 hover:text-color-4 border-color-4 border-2 shadow-md flex justify-center text-color-1" href={metadata["nav_list"][1].href}>
                            Learn More
                        </a>
                    </div>
                </div>


            </div>

        </div>
    )
}