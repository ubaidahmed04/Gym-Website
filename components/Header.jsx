"use client"
import React from "react";
import {
    Navbar,
    Collapse,
    IconButton,
    Avatar,
    Button,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
    Typography,
    Input,
    Badge,
} from "@material-tailwind/react";
import { RxCross2 } from "react-icons/rx";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiMenuAlt1 } from "react-icons/hi";
import {  SlMagnifier } from "react-icons/sl";
import { usePathname, useRouter } from 'next/navigation'
import Link from "next/link";
import Image from "next/image";
import logoImg from '@/public/Images/logo.png'

const profileMenuItems = [
    {
        label: "My Profile",
        icon: FaRegCircleUser,
    },
 
];
export function Appbar() {
    const [openNav, setOpenNav] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const pathName = usePathname()
    const router = useRouter()
    const closeMenu = () => setIsMenuOpen(false);

    // console.log("currentUser",cartItems)
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-light">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 myfont"
                onClick={() => { setOpenNav(false) }}
            >
                <Link href="/members" className={`${pathName === '/' ? 'text-orange underline fontbold translate-x-1' : 'text-light'} flex items-center`}>
                    Home
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 myfont"
                onClick={() => { setOpenNav(false) }}

            >
                 <Link href="/products" className={`${pathName === '/' ? 'text-orange underline fontbold translate-x-1' : 'text-light'} flex items-center`}>
                        Products
                    </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className=" myfont"
                onClick={() => { setOpenNav(false) }}

            >
                 <Link href="/about" className={`${pathName === '/' ? 'text-orange underline fontbold translate-x-1' : 'text-light'} flex items-center`}>
                        About
                    </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 myfont"
                onClick={() => { setOpenNav(false) }}

            >
                <Link href="/contact" className={`${pathName === '/' ? 'text-orange underline fontbold translate-x-1' : 'text-light'} flex items-center`}>
                    Contact
                </Link>
            </Typography>

            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 myfont"
                onClick={() => { setOpenNav(false) }}

            >
                <Link
                    href="/"
                    className={`${pathName === '/' ? 'text-orange underline fontbold translate-x-1' : 'text-light'} flex items-center`}
                >
                    SignIn
                </Link>

            </Typography>
        </ul>
    );

    return (
        <Navbar className="sticky top-0 z-10 h-max max-w-full bg-darkBlue rounded-none border-none px-2 py-2 lg:px-8 lg:py-2">
            <div className="flex items-center justify-between text-light ">
                <Link href="/dashboard">
                    <Image
                        height={60}
                        width={60}
                        src={logoImg}
                        alt="Logo"
                        className="h-3/4  w-full bg-black object-contain"
                    />
                </Link>
                <div className="mr-4 hidden lg:block">{navList}</div>
                <div className="flex items-center sm:gap-4">
                    <span className="hidden sm:block">
                        <Input placeholder="Search ...." className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                            labelProps={{
                                className: "hidden",
                            }} icon={<SlMagnifier />} />
                    </span>
                   

                    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end"   >
                        <MenuHandler >
                            <Button
                                variant="text"
                                color="blue-gray"
                                className="items-center rounded-full p-0 hidden lg:block "
                            >
                                <Avatar
                                    variant="circular"
                                    size="md"
                                    alt="tania andrew"
                                    withBorder={true}
                                    color="blue-gray"
                                    className="rounded-full p-0.5"
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                />
                            </Button>
                        </MenuHandler>
                        <MenuList className="p-1 hidden lg:block">
                            {profileMenuItems.map(({ label, icon }, key) => {
                                const isLastItem = key === profileMenuItems.length - 1;
                                return (
                                    <MenuItem
                                        key={label}
                                        onClick={closeMenu}
                                        className={`flex items-center gap-2 rounded ${isLastItem
                                            ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                            : ""
                                            }`}
                                    >
                                        {React.createElement(icon, {
                                            className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                                            strokeWidth: 2,
                                        })}


                                        <Typography
                                            as="span"
                                            variant="small"
                                            className="myfont"
                                            color={isLastItem ? "red" : "inherit"}
                                        >
                                            {label}
                                        </Typography>
                                    </MenuItem>
                                );
                            })}
                        </MenuList>
                    </Menu>
                </div>
                <div className="flex items-center lg:hidden">

                    <IconButton
                        variant="text"
                        className="lg:hidden"
                        onClick={() => setOpenNav(!openNav)}
                    >

                        {openNav ? (
                            <RxCross2 className="h-6 w-6 text-white" />
                        ) : (
                            <HiMenuAlt1  className="h-6 w-6 text-white" />
                        )}
                    </IconButton>
                </div>
            </div>
            <Collapse open={openNav}>
                {navList}
                <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end" className='flex md:hidden'>

                    <MenuHandler>
                        <Button
                            variant="text"
                            color="blue-gray"
                            className="flex items-center rounded-full p-0  "
                        >
                            <Avatar
                                variant="circular"
                                size="md"
                                alt="tania andrew"
                                withBorder={true}
                                color="blue-gray"
                                className=" p-0.5"
                                src={"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"}
                            />
                        </Button>
                    </MenuHandler>
                    <MenuList className="p-1  md:hidden">
                        {profileMenuItems.map(({ label, icon }, key) => {
                            const isLastItem = key === profileMenuItems.length - 1;
                            return (
                                <MenuItem
                                    key={label}
                                    onClick={closeMenu}
                                    className={`flex items-center gap-2 rounded ${isLastItem
                                        ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                        : ""
                                        }`}
                                >
                                    {React.createElement(icon, {
                                        className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                                        strokeWidth: 2,
                                    })}
                                    <Typography
                                        as="span"
                                        variant="small"
                                        className="myfont"
                                        color={isLastItem ? "red" : "inherit"}
                                    >
                                        {label}
                                    </Typography>
                                </MenuItem>
                            );
                        })}
                    </MenuList>
                </Menu>
            </Collapse>
        </Navbar>
    );
}