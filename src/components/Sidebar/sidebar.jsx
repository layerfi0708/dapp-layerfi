import React, { useState } from "react";
import logo from "../../assets/Images/logo2.png";
import "./sidebar.css";
import { HiHome } from "react-icons/hi2";
import { HiOutlineChartBar } from "react-icons/hi2";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoMdQrScanner } from "react-icons/io";
import { SiGitbook } from "react-icons/si";
import { RiTokenSwapLine } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

import { Link } from "react-router-dom";
function Sidebar() {
    const [hideSidebar, setHideSideBar] = useState(true);
    const toggleChecked = () => {
        setHideSideBar(!hideSidebar);
    };

    // Function to close the sidebar once a link is clicked

    return (
        <div className="">
            <div className="sm:hidden lg:block showNav">
                <div className="  h-[800px] absolute w-[270px] mx-4 my-5 border-2  border-violet-500 backdrop-blur-md rounded-xl box-border  ">
                    <div className="flex mx-auto mt-4">
                        <div className="mx-auto my-auto ">
                            <img
                                className=" h-[50px] pl-6"
                                alt="logo"
                                src={logo}
                            />
                        </div>
                        <div className="mx-auto my-auto pr-9 mt-2 ">
                            <span className=" text-4xl main-font ">
                                LAYERFi
                            </span>
                        </div>
                    </div>
                    <div className=" divide-y-reverse divide-y-2 divide-solid divide-purple-400 w-[230px] ml-5">
                        <div></div>
                        <div></div>
                    </div>
                    <div className="mt-8 ">
                        <ul className=" space-y-2">
                            <li className=" border-2 border-violet-300 rounded-lg bg-white mx-6 h-10 z-50">
                                <div>
                                    <Link
                                        className="mx-5 flex space-x-3"
                                        to="/dashboard">
                                        <HiHome size={35} />
                                        <span className=" text-center text-xl my-auto">
                                            DASHBOARD
                                        </span>
                                    </Link>
                                </div>
                            </li>
                            <li className=" border-2 border-violet-300 rounded-lg bg-white mx-6 h-10 z-50">
                                <div>
                                    <Link
                                        className="mx-5 flex space-x-3"
                                        to="/scanner">
                                        <IoMdQrScanner size={35} />
                                        <span className=" text-center text-xl my-auto">
                                            SCANNER
                                        </span>
                                    </Link>
                                </div>
                            </li>
                            <li className=" border-2 border-violet-300 rounded-lg bg-white mx-6 h-10 cursor-pointer z-50">
                                <div className="mx-5 flex space-x-3">
                                    <HiOutlineChartBar size={35} />{" "}
                                    <span className=" text-center text-xl my-auto">
                                        STAKE
                                    </span>
                                </div>
                            </li>
                            <li className=" border-2 border-violet-300 rounded-lg bg-white mx-6 h-10 z-50">
                                <div>
                                    <Link
                                        className="mx-5 flex space-x-3 cursor-pointer"
                                        to="/swap">
                                        <RiTokenSwapLine size={35} />{" "}
                                        <span className=" text-center text-xl my-auto">
                                            SWAP
                                        </span>
                                    </Link>
                                </div>
                            </li>
                            <li className=" border-2 border-violet-300 rounded-lg bg-white mx-6 h-10 cursor-pointer">
                                <div className="mx-5 flex space-x-3">
                                    <HiOutlineShoppingCart size={35} />{" "}
                                    <span className=" text-center text-xl my-auto">
                                        BUY LAYER
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className=" mx-auto  w-3/5 fixed left-[50px] bottom-8 text-center space-y-5 cursor-pointer">
                        <div className=" ">
                            <span className="sub-font">Contact Us</span>
                        </div>

                        <div className="flex">
                            <div className="mx-auto">
                                <FaTelegramPlane size={15} />
                            </div>
                            <div className="mx-auto">
                                <FaXTwitter size={15} />
                            </div>
                            <div className="mx-auto">
                                <FaDiscord size={15} />
                            </div>
                            <div className="mx-auto">
                                <SiGitbook size={15} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {hideSidebar ? (
                <div className="flex lg:hidden ">
                    <div className="  cursor-pointer hover:text-lime-400 sm:text-violet-500 absolute  sm:left-0  sm:pt-10 sm:pr-4  ">
                        <GiHamburgerMenu size={30} onClick={toggleChecked} />
                    </div>
                </div>
            ) : (
                <div>
                    {hideSidebar ? (
                        <div className="flex lg:hidden">
                            <div className="cursor-pointer hover:text-lime-400 sm:text-amber-500 absolute sm:left-0 sm:pt-10 sm:pr-4">
                                <GiHamburgerMenu
                                    size={30}
                                    onClick={toggleChecked}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="lg:hidden">
                            <div
                                className="fixed inset-0 bg-black bg-opacity-50 z-10"
                                onClick={toggleChecked}></div>
                        </div>
                    )}

                    <div
                        className={`fixed inset-y-0 left-0 transform lg:hidden z-20 transition-transform duration-300 ease-in-out ${
                            hideSidebar ? "-translate-x-full" : "translate-x-0"
                        }`}>
                        <div className=" lg:hidden sm:h-[600px] lg:h-[800px] absolute w-[270px] mx-4 my-5 border-2  border-violet-500 bg-white rounded-xl box-border  ">
                            <div className="flex mx-auto mt-4">
                                <div className="mx-auto my-auto ">
                                    <img
                                        className=" h-[50px] pl-6"
                                        alt="logo"
                                        src={logo}
                                    />
                                </div>
                                <div className="mx-auto my-auto pr-9 mt-2 ">
                                    <span className=" text-4xl main-font ">
                                        LAYERFI
                                    </span>
                                </div>
                            </div>
                            <div className=" divide-y-reverse divide-y-2 divide-solid divide-purple-400 w-[230px] ml-5">
                                <div></div>
                                <div></div>
                            </div>
                            <div className="mt-8 ">
                                <ul className=" space-y-2">
                                    <li className=" border-2 border-violet-300 rounded-lg bg-white mx-6 h-10 z-50">
                                        <div>
                                            <Link
                                                className="mx-5 flex space-x-3"
                                                to="/dashboard">
                                                <HiHome size={35} />
                                                <span className=" text-center text-xl my-auto">
                                                    DASHBOARD
                                                </span>
                                            </Link>
                                        </div>
                                    </li>
                                    <li className=" border-2 border-violet-300 rounded-lg bg-white mx-6 h-10 z-50">
                                        <div>
                                            <Link
                                                className="mx-5 flex space-x-3"
                                                to="/scanner">
                                                <IoMdQrScanner size={35} />
                                                <span className=" text-center text-xl my-auto">
                                                    SCANNER
                                                </span>
                                            </Link>
                                        </div>
                                    </li>
                                    <li className=" border-2 border-violet-300 rounded-lg bg-white mx-6 h-10 cursor-pointer z-50">
                                        <div className="mx-5 flex space-x-3">
                                            <HiOutlineChartBar size={35} />{" "}
                                            <span className=" text-center text-xl my-auto">
                                                STAKE
                                            </span>
                                        </div>
                                    </li>
                                    <li className=" border-2 border-violet-300 rounded-lg bg-white mx-6 h-10 z-50">
                                        <div>
                                            <Link
                                                className="mx-5 flex space-x-3 cursor-pointer"
                                                to="/swap">
                                                <RiTokenSwapLine size={35} />{" "}
                                                <span className=" text-center text-xl my-auto">
                                                    SWAP
                                                </span>
                                            </Link>
                                        </div>
                                    </li>
                                    <li className=" border-2 border-violet-300 rounded-lg bg-white mx-6 h-10 cursor-pointer">
                                        <div className="mx-5 flex space-x-3">
                                            <HiOutlineShoppingCart size={35} />{" "}
                                            <span className=" text-center text-xl my-auto">
                                                BUY LAYER
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className=" mx-auto  fixed left-[90px] sm:bottom-40 lg:bottom-8 text-center space-y-5 cursor-pointer">
                                <div className=" ">
                                    <span className="sub-font">Contact Us</span>
                                </div>

                                <div className="flex space-x-5 ">
                                    <div className="mx-auto">
                                        <FaTelegramPlane size={15} />
                                    </div>
                                    <div className="mx-auto">
                                        <FaXTwitter size={15} />
                                    </div>
                                    <div className="mx-auto">
                                        <FaDiscord size={15} />
                                    </div>
                                    <div className="mx-auto">
                                        <SiGitbook size={15} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Sidebar;
