import { Head } from "./Head"
import metadata from "../locals/metadata.json"
export const About = () => {
    return (
        <div className="h-fit bg-white h-fit flex justify-center w-full p-10" id="about_us">
            <div className="sm:w-1/2 lg:w-1/2 space-y-8">
                <Head title={metadata["head_2"]} color="color-1" />
                <div className="space-y-4 lg:flex lg:justify-center lg:space-x-7 lg:items-center sm:flex sm:justify-center sm:space-x-7 sm:items-center">
                    <div>
                        <img src="/dan.jpg" alt="Dans's Photo" className="rounded-full" />

                    </div>
                    <div className="space-y-3">
                        <h2 className="font-medium text-[22px]">Who I am ?</h2>
                        <p className="lg:text-[16px] sm:text-[13px]">{metadata.about_us}</p>
                        <div className="flex space-x-3">
                            {metadata.social_links.map((item, index)=>(
                                <a href={item.href} id={index}>
                                    <img src={item.src} alt={item.value} />
                                </a>
                            ))}
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}