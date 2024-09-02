import React from 'react'
import { useEffect, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const contact = [
  { name: 'Join Us', href: '/contact', current: false },

]

const AboutUs = () => {
  const videoRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  },
    []);
  useEffect(() => {
    if (videoRef.current) {
      // Set the volume to 10%
      videoRef.current.volume = 0.1;
    }
  }, []);
  return (
    <div class="container mx-auto" id='bgpattern'>
      <div class='mb-9'>
        <h3 class='text-xl text-center text-orange-400 uppercase  pt-2.5'>Awesome feature</h3>
        <h1 class='text-3xl text-center text-white font-bold uppercase mt-2'>
          <span class='text-5xl text-center text-white font-bold uppercase mt-2' >Why you Join with us</span>
        </h1>
        <div class="cards pb-10">
          <div class="card ">
            <p class="tip">modern equipment</p>
            <p class="second-text">Experience a state-of-the-art gym equipped with the latest fitness technology.
              Achieve your goals with modern machines designed for maximum performance and efficiency.</p>
          </div>
          <div class="card ">
            <p class="tip">Healthy nutrition plan</p>
            <p class="second-text">Achieve your fitness goals with our gym's personalized healthy nutrition plans,
              designed to fuel your workouts, boost energy, and support a balanced lifestyle<br /> &nbsp;</p>
          </div>
          <div class="card ">
            <p class="tip">Professional training plan</p>
            <p class="second-text">Achieve your fitness goals with our professional training plans tailored to your needs.
              Personalized guidance, expert trainers, and proven results for every fitness level</p>
          </div>
          <div class="card ">
            <p class="tip">Unique to your needs</p>
            <p class="second-text">Personalized fitness plans tailored to your goals. Our gym offers customized workouts,
              expert guidance, and a supportive environment to help you achieve success.</p>
          </div>
        </div>
      </div>
      <div id='bgpattern-3' class='py-10 grid grid-cols-2  max-[768px]:grid-cols-1'>

        <div class='m-auto pl-5 max-[768px]:p-5'>
          <video ref={videoRef} width="640" height="360" loop muted>
            <source src="Assets/Video/New Regal Fitness Club.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <h3 class='text-xl text-center text-orange-400 uppercase   max-[768px]:text-base max-[768px]:m-1'>About us</h3>
          <h1 class='text-5xl text-center text-white font-bold uppercase mt-2 max-[768px]:text-3xl'>What We Are Doing</h1>
          <p class='text-sm text-justify text-white font-light capitalize mt-2 max px-10'>
            We are dedicated fitness enthusiasts committed to helping you reach your goals. With state-of-the-art equipment and personalized training,
            we guide you to success in a supportive, motivating environment.
            Whether it's weight loss, muscle building, or overall fitness, our experts are here to make your fitness dreams a reality

          </p>
          <div class="Progress-container">
            <div class="skill-box">
              <span class="title">Cardio</span>

              <div class="skill-bar">
                <span class="skill-per cardio">
                  <span class="tooltip">70%</span>
                </span>
              </div>
            </div>

            <div class="skill-box">
              <span class="title">Bodybuilding</span>

              <div class="skill-bar">
                <span class="skill-per Bodybuilding">
                  <span class="tooltip">80%</span>
                </span>
              </div>
            </div>
            <div class="skill-box">
              <span class="title">Fitness Modeling</span>

              <div class="skill-bar">
                <span class="skill-per Fitness">
                  <span class="tooltip">75%</span>
                </span>
              </div>
            </div>
            <div class="skill-box">
              <span class="title">Powerlifting</span>

              <div class="skill-bar">
                <span class="skill-per Powerlifting">
                  <span class="tooltip">50%</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='regBg'>
        <h1 class='text-5xl text-center text-white font-bold uppercase my-auto max-[768px]:text-3xl'>Register Now to get more deals</h1>
        <h3 class='text-xl text-center text-orange-400 uppercase   max-[768px]:text-base max-[768px]:m-1'>Where health, beauty and fitness meet.</h3>
        <button>
          <span>{contact.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    
                  >
                    {item.name}
                  </a>
                ))}</span>
        </button>
      </div>
      <div style={{ width: "100%", margin: "auto" }} class='py-12' id='bgpattern-3'>
      <h3 class='text-2xl text-center text-orange-400 uppercase max-[768px]:text-base max-[768px]:m-1'>testimonial</h3>
      <h1 class='text-6xl text-center text-white font-bold uppercase mt-2 mb-12 max-[768px]:text-3xl'>what our clients say</h1>
        <Slider {...settings}>
          <div>
            <div class="mx-auto group before:hover:scale-95 before:hover:h-52 before:hover:w-80 before:hover:h-44 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-orange-400 via-orange-600 to-red-600 before:absolute before:top-0 w-96 h-96 relative bg-black flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
              <div class="w-28 h-28 bg-black mt-8 rounded-full border-4 border-black z-10 group-hover:scale-150 group-hover:-translate-x-32  group-hover:-translate-y-10 transition-all duration-500">
                <img src='Assets/Images/te1.JPG' class='rounded-full'/>
              </div>
              <div class="z-10  group-hover:-translate-y-5 transition-all duration-500">
                <span class="text-2xl font-semibold">Ranuka Nipun</span>
                <p class=' text-justify px-5 pt-2 '>"This gym has completely transformed my fitness journey. The trainers are incredibly supportive,
                   and they genuinely care about helping you reach your body goals. Highly recommended!" </p>
              </div>
            </div>

          </div>
          <div>
          <div class="mx-auto group before:hover:scale-95 before:hover:h-52 before:hover:w-80 before:hover:h-44 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-orange-400 via-orange-600 to-red-600 before:absolute before:top-0 w-96 h-96 relative bg-black flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
          <div class="w-28 h-28 bg-black mt-8 rounded-full border-4 border-black z-10 group-hover:scale-150 group-hover:-translate-x-32  group-hover:-translate-y-10 transition-all duration-500">

                <img src='Assets/Images/te2.JPG' class='rounded-full'/>
              </div>
              <div class="z-10  group-hover:-translate-y-5 transition-all duration-500">
                <span class="text-2xl font-semibold">Rashmika Fernando</span>
                <p class=' text-justify px-5 pt-2'>"I've never felt more motivated to achieve my fitness goals. The gym has a fantastic environment, and the support from the staff is unmatched.
                   They really push you to be your best!"</p>
              </div>
            </div>

          </div>
          <div>
          <div class="mx-auto group before:hover:scale-95 before:hover:h-56 before:hover:w-80 before:hover:h-44 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-orange-400 via-orange-600 to-red-600 before:absolute before:top-0 w-96 h-96 relative bg-black flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
          <div class="w-28 h-28 bg-black mt-8 rounded-full border-4 border-black z-10 group-hover:scale-150 group-hover:-translate-x-32  group-hover:-translate-y-12 transition-all duration-500">

                <img src='Assets/Images/te3.JPG' class='rounded-full'/>
              </div>
              <div class="z-10  group-hover:-translate-y-5 transition-all duration-500">
                <span class="text-2xl font-semibold">Devinda Stallone</span>
                <p class=' text-justify px-5 pt-2'>"The gym offers top-notch equipment and a team that is always ready to help. I’ve seen amazing 
                  progress thanks to their personalized approach to fitness!"</p>
              </div>
            </div>

          </div>
          <div>
            
          <div class="mx-auto group before:hover:scale-95 before:hover:h-52 before:hover:w-80 before:hover:h-44 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-orange-400 via-orange-600 to-red-600 before:absolute before:top-0 w-96 h-96 relative bg-black flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
          <div class="w-28 h-28 bg-black mt-8 rounded-full border-4 border-black z-10 group-hover:scale-150 group-hover:-translate-x-32  group-hover:-translate-y-10 transition-all duration-500">

                <img src='Assets/Images/te4.JPG' class='rounded-full'/>
              </div>
              <div class="z-10  group-hover:-translate-y-5 transition-all duration-500">
                <span class="text-2xl font-semibold">Samuditha Warunamal</span>
                <p class=' text-justify px-5 pt-2'>"I’m so glad I joined this gym. The support here is phenomenal, and they truly help you stay on track with your body goals.
                   It’s a game-changer for anyone serious about fitness!"</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default AboutUs
