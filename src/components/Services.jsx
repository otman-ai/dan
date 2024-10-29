import metadata from "../locals/metadata.json";
import { Head } from "./Head";
export const Services = ()=>{
    return (
        <div className="h-fit bg-color-1 flex justify-center w-full p-10" id="services">
            <div className="sm:w-1/2 lg:w-1/2 space-y-8">
                <Head title={metadata["head_3"]} color="color-2" />
                <div className="flex justify-center ">
                <div className="space-y-10">
                        {metadata.services.map((item, index)=>(
                            <div className="lg:flex lg:justify-center items-center sm:flex sm:space-x-6 lg:space-x-6 space-y-3 sm:space-y-0 lg:space-y-0" id={index}>
                                <div className="lg:hidden sm:hidden flex justify-center">
                                <img src={item.src} alt={item.title} className="rounded-lg lg:rounded-full lg:w-[14rem] lg:h-[14rem] sm:w-[14rem] sm:h-[14rem] object-cover"/>
                                </div>
                                <img src={item.src} alt={item.title} className="hidden lg:block sm:block rounded-full w-[13rem] h-[13rem] object-cover"/>

                                <div className="items-center w-full">
                                    <h3 className="font-semibold text-lg text-color-2 lg:text-start">{item.title}</h3>
                                    <p className="lg:text-[16px] sm:text-[13px] text-color-3 lg:text-start">{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            </div>
    )
}