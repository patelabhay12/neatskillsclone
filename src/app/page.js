import Image from 'next/image'
import Navbar from './navbar/page'
import side from '@/assets/sideimg.svg'
import HAT from "@/assets/imageshat.webp"
import Lside from '@/assets/Group.svg';
import Footer from './footer/page';
import Studying from '@/assets/Studying.svg';
import Goro from '@/assets/Grouph.png';
import Goro1 from '@/assets/Groupm.png';
import Goro2 from '@/assets/Grou.png';

export default function Home() {


  const data = [
    {
      image: side,
    },
    {
      image: Lside
    }
  ]
  return (
    <main >
      <Navbar />
      <div className='flex justify-center align-middle p-20 '>
        <div className="flex flex-col justify-start w-[75%] gap-10">
          <h1 className='text-7xl font-bold '>Lets Learn beyond the limits</h1>
          <p>Educational Programs that will help you start , grow and upskill. Book a demo class today !!</p>
          <div className="flex  gap-4">
            <button className="px-6 py-5 border-2  border-white bg-pink-500 text-white font-semibold hover:bg-pink-600 transition duration-300">Start Learning
            </button>
            <button className="px-6 py-5 border-2  border-white text-whit font-semibold hover:border-pink-600 hover:text-pink-600 transition duration-300">Watch Demo Session
            </button>
          </div>
        </div>
        <div className="right">
          <Image src={side} alt="side image aa gya" />
        </div>
      </div>

      <div className="h-[100vh] w-[100vw] bg-[#141518] flex flex-col p-20 gap-16">

        <div className="flex justify-between align-middle">
          <h2 className='w-[20%] flex justify-center text-center font-bold text-3xl'>Explore our Courses</h2>
          <h3 className='w-[36%] pt-2 md:pt-0 text-sm lg:text-xl font-normal justify-between text-center flex items-center text-white'>You don't need to have any prior knowledge to take our classes. You just need curiosity and the desire to learn.</h3>
          <button className="md:flex border-2 text-base md:text-lg w-52 h-16 justify-center items-center font-semibold">Explore Courses
          </button>
        </div>

        <div className="shrink-0 rounded-2xl border-2  border-white shadow-lg bg-[#141518] py-[10px] px-[12px] h-[230px] md:h-[17rem] w-[250px] md:w-[355px]  md:p-5 flex flex-col  ">
          <div className="flex justify-between">
            <Image src={HAT} alt='Hat Image' />
            <div className="text-[10px] pt-3 md:pt-0 md:text-sm text-[#E1348B]">
              <span className='mr-3'>Lessons</span>
              <span>Beginner</span>
            </div>
          </div>

          <div className="flex flex-col justify-between h-full overflow-hidden">
            <div className="">
              <h1 className='text-[#ffffff8c] text-[6px] md:text-[14px] md:text-sm font-medium'>COURSE</h1>
              <h1 className='text-white  md:text-2xl font-medium'>Christmas Update...</h1>
              <p className="font-raleway text-left text-white text-[10px] md:text-[0.8rem]  overflow-hidden overflow-ellipsis leading-normal tracking-wide md:line-clamp-3 line-clamp-2">Christmas Update going on!</p>
            </div>
            <div className="flex justify-end pb-4">
              <button className=' text-white border border-pink-600 text-xs md:text-sm px-3 py-2 hover:bg-primary hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-110  hover:shadow-lg'>Explore</button>
            </div>
          </div>
        </div>

      </div>

      <div className="flex flex-col justify-center items-center w-full py-[42px] md:py-28 md:p-7 mt-10 sm:px-2 bg-bs min-h-screen">
        <div className="w-full flex flex-col max-w-[1440px]">
          <p className="w-[80%] sm:block font-ral text-[26px] sm:text-4xl lg:text-[55px] font-medium text-white px-9 text-center md:self-start lg:leading-[3.5rem]">
            Why learning with <span className='text-pink-800 whitespace-nowrap mr-2'>Neat Skills</span> gives you a one up
          </p>
          <div className="flex flex-col md:flex-row justify-evenly items-center mt-5 lg:mt-10">
            <div className="mx-[84px] sm:mx-24 md:ml-10 md:mr-10 lg:mr-16 ">
              <Image src={Lside} alt='haa..' className='h-[100] w-full object-contain' />
            </div>
            <div className=" flex flex-col justify-center w-full lg:min-w-[460px] lg:max-w-[460px] mt-[58px] lg:mt-auto ">
              <p className='text-white border border-pink-500 bg-pink-600 p-4 md:p-6  rounded-r-3xl md:rounded-3xl w-7/12 md:w-3/4 md:mr-20 text-xs sm:text-sm md:text-base lg:text-xl'>Go beyond Pre-Recorded Courses with Neat Skills and clear your doubts.</p>
              <p className='text-white bg-gradient-to-r border border-pink-500 bg-pink-600 p-4 md:p-6 mt-5 lg:mt-[78px]  rounded-l-3xl md:rounded-3xl w-8/12  md:w-3/4 md:ml-20   text-xs sm:text-sm md:text-base lg:text-xl self-end'>Our Online classes allows teacher and student to set their own pace of learning and there is added flexibility in setting a schedule that fits everyone.</p>
              <p className='text-white bg-gradient-to-r border border-pink-500 bg-pink-600 p-4 md:p-6 mt-5 lg:mt-[78px] rounded-r-3xl md:rounded-3xl w-9/12  md:w-3/4 md:mr-20   text-xs sm:text-sm md:text-base lg:text-xl'>Interactive problem-solving is more effective than watching lectures. Reinforce your learning with interactive quizzes.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center h-screen md:h-full w-full  text-white font-raleway ">
        <div className="bg-[#1E1E1E] w-[90%] rounded-2xl px-5 py-9 md:pt-[110px] md:pb-[129px] max-w-[1440px]">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className=" text-2xl md:text-3xl flex flex-col items-center bg-bottom bg-contain bg-no-repeat">
              <h1>Meet Our</h1>
              <h1>Mentors</h1>
              <div className="bg-[#DA2C84] transform -rotate-2 w-full origin-bottom-right h-1 mt-[-10px] ml-[10px]">
              </div>
            </div>
            <div className="text-sm md:text-base md:w-1/2 pt-4 px-4 md:pl-8">
              Neat Skills offers the world’s best classes from the world’s best practitioners. It’s like having a mentor at your fingertips - no matter where you are
            </div>
          </div>

          <div className="">
            <div className="flex items-center justify-center mt-10 p-2">

            </div>
          </div>
        </div>
      </div>


      <div className="flex justify-between align-middle p-20">
        <div className="left col-span-2 2xl:col-span-1">
          <Image src={Studying} alt='Image hai bhai' />
        </div>

        <div className="w-[40%]">
          <h1 className=''>JOIN OUR NEAT SKILLS COMMUNITY</h1>
          <p className=''>Learn any skill (coding , AI/ML , art , business, stock market , marketing , video editing and much more) at just one nominal monthly subscription cequivalent to your sim card plan</p>

          <div className="w-[75%] flex gap-5">
            <div className="h-[15px] w-[25px] bg-pink-600 translate-y-1">
            </div>
            <div>
              <h1>Easily accessible</h1>
              <p>Learn at the comfort of your home , with regular assessments and doubt sessions.</p>
            </div>
          </div>
          <div className="w-[75%] flex gap-5">
            <div className="h-[15px] w-[25px] bg-pink-600 translate-y-1">
            </div>
            <div>
              <h1>More affordable cost</h1>
              <p>Monthly subscription cost equivalent to your sim card plan.</p>
            </div>
          </div>
          <div className="w-[75%] flex gap-5">
            <div className="h-[15px] w-[25px] bg-pink-600 translate-y-1">
            </div>
            <div>
              <h1>Fun learning experience</h1>
              <p>Participate in competitions , earn badges and share on social media.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col py-11 lg:py-[125px] w-full bg-bs justify-center items-center">
        <div className="max-w-[1440px] space-y-4">
          <div className="flex w-full pl-[22px] sm:pl-16 lg:pl-[84px]">
            <p className='text-[15px] sm:text-xl md:text-2xl lg:text-[32px] self-start text-white text-center'>
              A number of available learning
              <br />
              activities that will
              <span className='text-[#E1348B]'>shock you</span>
            </p>

          </div>
          <div className="w-full px-5 sm:px-14 md:px-28 lg:px-48">
            <Image src={Goro} alt='Image hai ' className='' />
          </div>
        </div>
      </div>


      <div className="flex justify-between align-middle p-20 bg-[#141518]">
        <div className="flex flex-col justify-center align-middle gap-3">
          <p>Stand out with a skill <span className='text-pink-500'>certificate</span></p>

          <p>Earn globally recognized certification and improve your knowledge.</p>
          <div className="">

            <button className="px-6 py-5 border-2  border-white text-whit font-semibold transition duration-300">Explore Courses
            </button>
          </div>
        </div>
        <div className="right">
          <Image src={Goro1} alt='image hai bhai' />
        </div>
      </div>

      <div className="bg-bs  flex flex-col justify-center items-center lg:px-[62px] md:px-12 md:min-h-screen py-12 md:py-36 lg:py-56">
        <div className="flex  justify-center items-center w-full max-w-[1280px]  bg-[#DA2C84] text-white rounded-3xl  py-2 px-5 md:py-4 md:px-16 ">
          <div className="h-full w-7/12 space-y-3 sm:space-y-4  md:space-y-5 lg:space-y-7 pr-4 md:pr-16 ">
            <h1 className='text-sm sm:text-xl md:text-3xl lg:text-[40px] lg:leading-[132%]'>The great aim of education is not knowledge, but action.</h1>
            <button className='flex transition duration-300 ease-in-out transform hover:scale-105 items-center w-28 h-[30px]  sm:h-10 sm:w-28 md:h-12 md:w-40 lg:h-16 lg:w-[235px]  bg-black border border-white justify-center space-x-1 sm:space-x-2 md:space-x-4'>
              <h1 className='text-[12px] sm:text-xs md:text-base lg:text-2xl'>Sign up</h1>
            </button>
          </div>
            <Image src={Goro2} alt='' />
        </div>
      </div>
      {/* 
      <div className="flex items-center justify-center min-h-screen bg-bs">
        <div className="w-full py-4 px-4 text-white relative space-y-20 flex flex-col items-center">
          <div className=" bg-bs absolute top-0 left-0 w-full h-full -z-20 ">

          </div>

          <div className="w-full md:px-16 grid md:grid-cols-2 max-w-[1440px] space-y-8">
            <div className="flex flex-col justify-center space-y-6 md:hidden  z-10">
              <h1 className='md:text-4xl text-2xl font-medium md:text-start text-center uppercase'>Join our Neat Skills Community</h1>

            </div>
          </div>
        </div>
      </div> */}

      <Footer />

    </main>
  )
} 
 