import React from 'react'
import logo from "./Assets/images/logo.webp"
// import pic from "./Assets/images/pic.webp"
import i1 from "./Assets/images/i1.png"
// import i2 from "./Assets/images/i2.webp"
import hamburger from "./Assets/images/hamburger.png"
import close from "./Assets/images/close.png"

const Sample = () => {
  return (
    <div>

      {/* Div for navbar */}

      <div className='lg:grid lg:grid-cols-6 hidden'>
        <div className='col-span-1'>
          <img src={logo} alt='alternate' className='h-16 w-56 m-3 pl-3'></img>
        </div>
        <div className='col-span-3 flex p-8 justify-between text-[16px]'>
          <div>Blog</div>
          <div>Free Tools</div>
          <div>Resources</div>
          <div>Solutions</div>
          <div>About Us</div>
        </div>
        <div className='flex col-span-2 p-4 font-bold justify-between'>
          <div className='grid grid-cols-3'>
            <div className='col-span-1  text-center p-4 ml-5 border-orange-400 rounded-full text-orange-400 hover:bg-orange-400 hover:text-white'>Get a Demo</div>
            <div className='col-span-2 text-center p-4 ml-4 border-orange-500 bg-orange-400 rounded-full text-white'>Free Google ads grader</div>
          </div>
        </div>
      </div>

      <div className='lg:hidden'>
          <div className="">
            <div className='flex items-center justify-between mx-4 cursor-pointer'>
              <img src={logo} alt='alternate' className='h-12 w-12'></img>
              <div className='group'>
              <img src={hamburger} className='h-7 w-7 group-open:hidden ' alt='imagesss'></img>
              <img src={close} className='h-7 w-7 group-open:block hidden' alt='imgg'></img></div>
            </div>
            

          </div>
      </div>

      {/* Div for first page */}

      {/* <div className= 'bg-blue-700 xl:h-[550px] lg:h-[450px] md:h-[350px] 2xl:h-[650px]'>    
        <div className='md:grid md:grid-cols-5'>
          <div className='md:col-span-3 text-white font-sans'>
            <p className='lg:text-5xl md:p-10 pb-7 p-2 md:text-xl'>Stop wasting money in Google Ads.</p>
            <p className='lg:text-3xl md:p-10 p-2 md:text-xl'>Get an instant audit of your account with the Free Google Ads Performance Grader.</p>
          </div>
          <div className='col-span-2 md:pt-10'>
            <img src={pic} alt='not displayed'></img>
          </div>
        </div>
      </div> */}

      {/* Div for second page */}

      <div className='md:grid grid-cols-2 bg-orange-200'>   
        <div className='col-span-1 md:p-20 pl-52'>
          <img src={i1} alt='not available' className=''></img>
        </div>
        <div className='col-span-1 font-sans lg:pb-20 lg:mr-10'>
          <p className='font-sans font-extrabold lg:text-6xl lg:pt-20 lg:pb-20'>
            Get a true read
            on your performance
          </p>
          <p className='font-bold lg:text-3xl lg:pb-10'>
            THE GOOGLE ADS PERFORMANCE GRADER
          </p>
          <p className='lg:text-[20px]'>
            How are your Google Ads really performing? Find out with a free, instant report card, with
            scores in nine key areas (plus tips on how to improve!)
          </p>
        </div>
      </div>


      {/* Div for third page */}

      {/* <div className='grid grid-cols-2 bg-slate-900'>     
        <div className='col-span-1 grid grid-rows-2 text-white pl-20 pt-7'>
          <p className='text-[60px] font-bold text-pl-10 pt-10 pb-5 row-span-1'>Get ready to grow your business</p>
          <p className='text-[20px] row-span-1'>LocaliQ offers technology-backed marketing 
            solutions built to help you find, convert, and keep more customers.</p>
              <div className='grid grid-cols-2 text-2xl -mt-32'>
                  <div className='col-span-1 text-center bg-blue-950 rounded-3xl mr-5 p-10'>
                      <div className='text-5xl font-bold'>133M</div>
                      hours saved
                  </div>
                  <div className='col-span-1 text-center bg-blue-950 rounded-3xl ml-5 p-10'>
                      <div className='text-5xl font-bold'>267M</div>
                      leads delivered
                  </div>
                  <div className='grid grid-rows-1 row-span-1 bg-blue-950 rounded-3xl mt-4 mr-4 p-10'>
                      <div className='text-5xl font-bold'>$15.9B</div>
                      in revenue generated
                  </div>
              </div>
        </div>
        <div className='col-span-1 mt-40'>
          <img src={i2} alt='Alternate text'></img>
        </div>
      </div> */}
    </div>
  )
}

export default Sample
