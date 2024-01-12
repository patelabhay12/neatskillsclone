import Link from "next/link";
import Image from "next/image";
import WorkImg from "@/assets/Studying.svg";
import neatLogo from "@/assets/logo.png";

const SignUp = () => {


    return (
        <div className="w-[100vw] min-h-[100vh] bg-[#0D0E14] grid grid-cols-2 items-center z-[-2] text-center text-white font-sans">
            <div className="left__img flex flex-col items-center">
                <Image src={neatLogo} alt="" />
                <div>
                    <Image src={WorkImg} alt="" className="w-[460px] z-[5] absolute" />
                    <div className="w-[450px] h-[431px] bg-violet-700 z-[0] rounded-[50%] filter blur-[200px]"></div>
                </div>
            </div>
            <div className="right__form m-auto md:mt-auto w-[90vw] xl:w-[35vw] py-[2rem]">
                <div className="rounded-[25px] py-8 w-full bg-[#15161B] md:bg-[#ffffff05] px-[3rem]  space-y-2 ">
                    <h1 className="md:mt-[30px] md:text-2xl">Get started for free</h1>
                    <p className="text-white text-xl pb-5 ">
                        Already have an account{" "}
                        <Link href={"/login"} className="text-pink-600">
                            Login
                        </Link>
                    </p>
                    <button

                        className="flex w-[90%] transition-transform duration-300 ease-in-out transform hover:scale-110  hover:shadow-lg md:w-[80%] m-auto py-2 md:text-sm text-xs  text-white align-middle items-center justify-center gap-2 xl:p-[10px] lg:p-1.5px  border-[1px]  border-white rounded-lg"
                    >
                        <i className="fa-brands fa-google"></i>
                        Continue with Google
                    </button>
                    <br />
                    <hr />
                    <br />
                    <div className="flex rounded-[15px]  bg-[#ffffff05] items-center px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            height="2.5vh"
                            width="2.5vh" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>


                        <input
                            type="username"
                            placeholder="username...."
                            className="input text-2xl md:p-3 p-[20px] pr-10 focus:border-transparent focus:outline-none rounded-lg  bg-transparent  w-[100%]"
                            data-temp-mail-org="0"
                        />
                    </div>

                    <div className="flex rounded-[15px]  bg-[#ffffff05] items-center px-4">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 1024 1024"
                            height="2.5vh"
                            width="2.5vh"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
                        </svg>
                        <input
                            type="email"
                            placeholder="Enter your email...."
                            className="input text-2xl md:p-3 p-[20px] pr-10 focus:border-transparent focus:outline-none rounded-lg  bg-transparent  w-[100%]"
                            data-temp-mail-org="0"
                        />
                    </div>
                    <div className="flex rounded-[15px]  bg-[#ffffff05] items-center px-4">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 448 512"
                            height="2.5vh"
                            width="2.5vh"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path>
                        </svg>
                        <input
                            type="password"
                            placeholder="Enter your password..."
                            className="input text-2xl md:p-3 p-[20px] pr-10 focus:border-transparent focus:outline-none rounded-lg  bg-transparent  w-[100%]"

                            data-temp-mail-org="0"
                        />
                    </div>
                    <button
                        className="bg-[#E1348B] transition-transform duration-300 ease-in-out transform hover:scale-110  hover:shadow-lg md:w-[100%] w-[50%] p-2   rounded-[10px]"

                    >
                        SignUp
                    </button>
                </div>
            </div>
        </div >
    );
}

export default SignUp;