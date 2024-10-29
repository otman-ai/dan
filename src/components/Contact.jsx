import metadata from "../locals/metadata.json";
import { Head } from "./Head";
export const Contact = () => {
    return (
        <div className="h-fit bg-color-4 flex w-fit justify-center w-full p-10" id="contact_us">
            <div className="sm:w-1/2 lg:w-1/2 space-y-5">
                <Head title={metadata["head_5"]} color="color-1" />
                <div className="flex space-x-5 justify-center">
                    {metadata.social_links.map((item, index) => (
                        <a href={item.href} id={index} target="_blank">
                            <img src={item.src} alt={item.value} />
                        </a>
                    ))}
                </div>
                <div>
                <div className="flex justify-center bg-none w-fit p-3  w-full">
                    <a target="_blank" href={`mailto:${metadata["email"]}?subject="New%20Freelancer%20Project"`} className="bg-color-1 px-5 py-3 bg-color-1 text-color-4 border-color-4 border-2 shadow-md flex justify-center">
                        Contact Vie Email
                    </a>
                </div>
                <p className="text-center">{metadata["email"]}</p>
                </div>

            </div>
        </div>
    )
}