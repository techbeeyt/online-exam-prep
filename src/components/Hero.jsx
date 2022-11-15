import { useState } from "react";
import logo from "../assets/images/logo.png";
import { Link } from 'react-router-dom';
import Button from "./Button";
import LiveMark from "./LiveMark";
import RunningExams from "./RunningExams";

const Hero = () => {
    const [menu, setMenu] = useState(false);
    return (
        <div>
            <section>
            <div className="w-full relative pb-10 px-6 xl:px-0">
                <img className="absolute w-full inset-0 h-full object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/hero2-bg.png" alt="we care family"/>
                <nav className="lg:hidden relative z-40">
                    <div className="flex py-6 justify-between items-center px-4">
                        <div>
                            <img src={logo} alt="logo" width={120} />
                        </div> 
                        <div className="flex items-center justify-center">
                            <ul id="list" className={`${menu ? '' : 'hidden'} p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16`}>
                                <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <Link to="/live-exams">
                                        <span className="ml-2 font-bold">Live Exams</span>
                                    </Link>
                                </li>
                                <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none justify-center" onclick="dropdownHandler(this)">
                                    <Link to='/upcoming-exams'>
                                        <span className="ml-2 font-bold">Upcoming Exams</span>
                                    </Link>
                                </li>
                                <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 items-center focus:text-indigo-700 focus:outline-none">
                                    <Link to='/all-exams'>
                                        <span className="ml-2 font-bold">All Exams</span>
                                    </Link>
                                </li>
                                <li className="flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center" onclick="dropdownHandler(this)">
                                    <Link to='/results'>
                                        <span className="ml-2 font-bold">Results</span>
                                    </Link>
                                </li>
                                <li className="flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center" onclick="dropdownHandler(this)">
                                    <Link to='/notice'>
                                        <span className="ml-2 font-bold">Notice</span>
                                    </Link>
                                </li>
                                <li className="flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center" onclick="dropdownHandler(this)">
                                    <Link to='/blogs'>
                                        <span className="ml-2 font-bold">Blog</span>
                                    </Link>
                                </li>
                                {
                                    true ? (
                                        <>
                                            <Link to="/login">
                                                <Button>Login</Button>
                                            </Link>
                                            <Link to="/registration">
                                                <Button look="default">Sign Up</Button>
                                            </Link>
                                        </>
                                    ) : null
                                }
                            </ul>
                            <div className="xl:hidden">
                               <img id="open" className={` ${menu ? 'hidden' : '' } close-m-menu`} onClick={() => setMenu(!menu)}  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg1.svg" alt="menu" />
                                <div id="close" className={` ${menu ? '' : 'hidden' } close-m-menu`} onClick={() => setMenu(!menu)}>
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg2.svg" alt="cross" />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <nav  role="navigation" aria-label="Main" tabIndex="0" className="hidden relative z-10 w-full lg:flex justify-between items-center px-10 py-4">
                    <div className="w-1/6">
                        <Link tabIndex="0" aria-label="we care company logo" to='/'>
                            <img src={logo} alt="logo" width={150}/>
                        </Link>
                    </div>
                    <div className="w-5/6">
                        <div className="flex items-center justify-end">
                        <div className="flex gap-x-4 mr-2">
                                <Link className="roboto-regular text-xl relative" to="/live-exams">
                                    Live Exams
                                    <LiveMark />
                                </Link>
                                <Link className="roboto-regular  text-xl" to="/upcoming-exams">
                                    Upcoming Exams
                                </Link>
                                <Link className="roboto-regular  text-xl" to="/all-exams">
                                    All Exams
                                </Link>
                                <Link className="roboto-regular  text-xl" to="/result">
                                    Result
                                </Link>
                                <Link className="roboto-regular  text-xl" to="/notice">
                                    Notice
                                </Link>
                                <Link className="roboto-regular  text-xl" to="/blogs">
                                    Blogs
                                </Link>
                            </div>
                            <Link to="/login">
                                <Button>Login</Button>
                            </Link>
                            <Link to="/login">
                                <Button look="default">Sign Up</Button>
                            </Link>
                            
                        </div>
                    </div>
                </nav>
                {
                    false ? (
                        <div className="pt-32 lg:flex items-center relative z-10 container mx-auto">
                    <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
                        <img tabIndex="0" aria-label="people smiling" className="mx-auto" src="https://cdn.tuk.dev/assets/templates/weCare/hero2-left.png"  alt="people smiling"/>
                    </div>
                    <div  role="contentinfo"  className="w-full lg:w-1/2 h-full">
                        <p tabIndex="0" className="text-indigo-700 uppercase text-2xl mb-4">Qusique Tincidun sapien</p>
                        <h1 tabIndex="0" className="text-indigo-700 text-4xl lg:text-6xl font-black mb-8">All natural ingredients</h1>
                        <p tabIndex="0" className="text-gray-800 font-regular mb-8">COMBINING SCIENCE WITH BEAUTY. L'Oreal Paris offerincare products is developed and rigorously tested with leading scientists. Indulge yourself in a luxurious and sensorial skincare experience. Cutting-edge innovations, proven by Science.</p>
                        <div className="bg-white lg:mt-16 py-4 px-4 flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center shadow-lg rounded-lg">
                            <div className="sm:flex items-center py-2">
                                <div className="flex items-center">
                                   <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg4.svg" alt="icon" />
                                    <input aria-label="Doctor name" className="w-24 xl:w-32 leading-none tracking-normal text-gray-800 ml-2.5 placeholder-black" placeholder="Doctor Name" />
                                </div>
                                <div className="flex items-center sm:mx-4 xl:mx-14 my-6 lg:my-0">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg5.svg" alt="icon" />
                                    <input aria-label="zip code" className="w-24 xl:w-32 leading-none tracking-normal text-gray-800 ml-2.5 placeholder-black" placeholder="Zip code" />
                                </div>
                                <div className="flex items-center">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg6.svg" alt="icon" />
                                    <input aria-label="insurance" className="w-24 xl:w-32 leading-none tracking-normal text-gray-800 ml-2.5 placeholder-black" placeholder="Insurance" />
                                </div>
                            </div>
                            <button aria-label="search" className="focus:bg-indigo-700 focus:ring-indigo-700 focus:ring-2 focus:ring-offset-2 text-white bg-indigo-600 hover:bg-indigo-700 mt-4 sm:mt-0 p-3 lg:-ml-8 rounded w-full sm:w-auto relative">
                                <img className="absolute right-0 mr-2 sm:mr-auto sm:relative icon icon-tabler icon-tabler-search cursor-pointer" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg7.svg" alt="search" />
                                <input aria-label="search" className="sm:hidden border-b border-gray-300 w-full bg-transparent pr-6" />
                            </button>
                        </div> 
                    </div>
                </div>
                    ) : (
                        <>
                            <div className="relative">
                                <RunningExams />
                            </div>
                        </>
                    )
                }
            </div>
        </section>

            <style>
                {`
            /* Top menu */
            .top-100 {
                animation: slideDown 0.5s ease-in-out;
            }
            @keyframes slideDown {
                0% {
                    top: -50%;
                }
                100% {
                    top: 0;
                }
            }
            * {
                outline: none !important;
                -webkit-tap-higimport { Link } from 'react-router-dom';
hlight-color: rgba(0, 0, 0, 0);import Button from './Button';
import LiveMark from './LiveMark';

                -webkit-tap-highlight-color: transparent;
            }`}
            </style>
        </div>
    );
};
export default Hero;
