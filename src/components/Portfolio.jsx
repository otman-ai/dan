import { Head } from "./Head"
import metadata from "../locals/metadata.json"
export const Portfolio = () => {
    return (
        <div className="h-fit bg-color-2 flex justify-center w-full p-10" id="portfolio">
            <div className="sm:w-4/5 lg:w-3/4 space-y-8">
                <Head title={metadata["head_4"]} color="color-1" />
                <div className="grid lg:grid-cols-4  grid-cols-1 sm:grid-cols-3 gap-3">
                    {metadata["portoflio"].map((item, index)=>(
                    <iframe className="w-[14rem] h-[14rem]"src={item} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    ))}

                </div>
            </div>

        </div>
    )
}