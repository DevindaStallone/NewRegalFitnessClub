import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMobileScreen, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Teams = () => {
  return (
    <div class="container mx-auto" id='bgpattern-3'>
      <div class='mb-9'>
        <h3 class='text-xl text-center text-orange-400 uppercase  pt-2.5'>Our Coach</h3>
        <h1 class='text-3xl text-center text-white font-bold uppercase mt-2'>Mr<br />
          <span class='text-5xl text-center text-white font-bold uppercase mt-2' >N . A . S . Madusanka</span>
        </h1>
        <div class="flex flex-col sm:flex-row  mx-auto ">
          <div class="basis-1/3 pl-3  max-[768px]:m-auto">
            <div>
              <div class="teamcard  max-[768px]:w-80 max-[768px]:h-96 ">
                <div class="background">
                </div>
                <div class="logo">
                  <img src='Assets/Images/coach.jpeg' id='coachimg'></img>
                </div>
                <a href="https://www.instagram.com/newregalfitness?igsh=NnR3dGRnOWN3b3Jp"><div class="box box1"><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg></span></div></a>

                <a href="https://www.facebook.com/profile.php?id=100064170879484&mibextid=LQQJ4d"><div class="box box2"><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg">
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                </svg></span></div></a>

                <a href="https://wa.me/94778368588?text=Hello,%20I%20would%20like%20to%20know%20more%20details%20about%20your%20gym" target="_blank"><div class="box box3"> <span class="icon"><svg class="svg" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z">
                  </path> </svg></span></div></a>
              </div>
            </div>
          </div>
          <div class="basis-4/6 aboutme px-3 max-[768px]:mx-9">
            <h1>Greetings,<br /><br />I am seasoned professional in the fitness industry with a rich background that spans over a decade.
              As a strength lifting national coach, I've had the privilege of guiding athletes to their pinnacle of performance, transforming potential into prowess.
              My certifications in bodybuilding, wellness, and physics-based bodybuilding are a testament to my deep understanding of the science and art of fitness.
              Whether it's sculpting physiques or enhancing overall well-being, my approach is rooted in precision, dedication, and a relentless pursuit of excellence. <br /><br />
              <span class='uppercase'><i>Join me on a journey to unlock your true potential, where strength, wellness, and science converge to create lasting results</i></span></h1>
          </div>
        </div>
      </div>
      <div  class='mb-3 border-t-2 border-orange-400 '>
        <h3 class='text-xl text-center text-orange-400 uppercase mt-9 pt-2'>Certificates</h3>
        <h1 class='text-5xl max-[768px]:text-2xl md:text-5xl  text-center text-white font-bold uppercase my-6 '>Wisdom through learning</h1>

        <section class=" overflow-hidden ">
          <div class="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-16  mt-40 mb-12  py-5 lg:py-24 space-y-10 h-svh flex flex-col justify-center ">
            <div class="flex flex-col sm:flex-row mx-auto">
              
              <a href="#_">
                <img src="Assets/Images/cer7.jpg" class="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12  h-full w-full object-cover hover:scale-125 transform origin-bottom" alt="#_" />
              </a>
              <a href="#_">
                <img src="Assets/Images/cer3.jpg" class="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-125 transform origin-bottom" alt="#_" />
              </a>
            </div>
            <div class="flex flex-col sm:flex-row mx-auto">
              <a href="#_"> 
                <img src="Assets/Images/cer5.jpg" class="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom" alt="#_" />
              </a>
              <a href="#_">
                <img src="Assets/Images/cer6.jpg" class="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom" alt="#_" />
              </a>
              <a href="#_">
                <img src="Assets/Images/cer1.jpg" class="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom" alt="#_" />
              </a>
              <a href="#_">
                <img src="Assets/Images/cer1.jpg" class="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom" alt="#_" />
              </a>
              
            </div>

          </div>
        </section>
      </div>
      <div class='grid grid-cols-3 gap-4 text-center p-7 gridbg text-xl font-bold uppercase max-[768px]:text-base max-[768px]:flex max-[768px]:flex-col '>
        <div>
        <FontAwesomeIcon icon={faLocationDot} id='contacticon'/>
        <h3>
        No:149, Puttalam - Colombo Rd, Chilaw
        </h3>
        </div>
        <div>
        <FontAwesomeIcon icon={faMobileScreen} id='contacticon'/>
        <h3>
        0778368588
        </h3>
        </div>
        <div>
        <FontAwesomeIcon icon={faEnvelope} id='contacticon2'/>
        <h3>
        Newregalfitnnesclub@gmail.com
        </h3>

        </div>
      </div>
    </div>
  )
}

export default Teams
