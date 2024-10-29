import metadata from "../locals/metadata.json"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/outline'

export const Header = () => {

    return (
        <div className="bg-color-1 p-4">
            <header className="w-full flex justify-center">
                <nav className="flex justify-between items-center lg:w-4/5 w-full">
                    {/* Logo */}
                    <div>
                        <a href="/" className="flex justify-start space-x-2 items-center">
                            <span className="text-thirdary font-bold sm:text-4xl lg:text-5xl  text-xl text-color-2 hover:text-color-4">{metadata["logo"]}</span>
                        </a>
                    </div>
                    {/* Nav items */}
                    {/* Large device */}
                    <div className="hidden lg:flex space-x-4">
                        <ul className="flex items-center space-x-12">
                            {metadata.nav_list.map((item, index) => (
                                <li>
                                    <a href={item.href} className="text-thirdary text-color-2 hover:text-color-4" id={index}>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>

                    </div>
                    <div className="lg:hidden flex items-center pr-2 ">
                        <Menu as="div" className="relative ml-3">
                            <div>
                                <MenuButton className="relative flex rounded-full focus:outline-none">
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">Open user menu</span>
                                    <Bars3Icon aria-hidden="true" color="#FFFFFF" className="block h-6 w-6 group-data-[open]:hidden " />

                                </MenuButton>
                            </div>
                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md border-color-2 bg-color-1 py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                {metadata.nav_list.map((item, index) => (
                                    <MenuItem >
                                        <a href={item.href} className="block px-4 py-2 text-sm text-color-2 " id={index}>
                                            {item.name}
                                        </a>
                                    </MenuItem>
                                ))}

                            </MenuItems>
                        </Menu>
                    </div>
                </nav>
            </header>
        </div>
    )
}