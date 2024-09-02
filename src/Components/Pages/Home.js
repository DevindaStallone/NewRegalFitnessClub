import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell, faLeaf, faHeartPulse, faPersonRunning } from '@fortawesome/free-solid-svg-icons'

const about = [
  { name: 'More Info', href: '/about-us', current: false },

]
const contact = [
  { name: 'Enroll Now', href: '/contact', current: false },

]
const Home = () => {
  return (
    <div class="container mx-auto">
      <div>
        <img src='Assets/Images/bg.jpg' class='m-0' width='100%' id='bgimg'></img>
        <h1 id='tag' class='text-4xl absolute text-orange-400 uppercase max-[768px]:text-lg' >
          <span class='text-9xl text-red-600 font-bold max-[768px]:text-4xl' id='regal'>New<br/> Regal</span><br />
          Fitness Club
          <br/>
          <button class='text-white font-sans text-base font-normal hover:p-4 hover:bg-red-900 capitalize rounded-full bg-red-600 p-3 max-[768px]:text-sm max-[768px]:p-2' type="button">
          {about.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    
                  >
                    {item.name}
                  </a>
                ))}
          </button>
          
        </h1>
      </div>
      <div id='bgpattern'>
        <h3 class='text-xl text-center text-orange-400 uppercase mt-24 pt-2.5 max-[768px]:text-base max-[768px]:m-1'>why chose us?</h3>
        <h1 class='text-5xl text-center text-white font-bold uppercase mt-2 max-[768px]:text-3xl'>push your limits forward</h1>

        <div class="cards  ">
          <div class="card ">
            <div id="icon-body-1">
              <FontAwesomeIcon icon={faDumbbell} id='icon' />
            </div>
            <p class="tip">modern equipment</p>
            <p class="second-text">Experience a state-of-the-art gym equipped with the latest fitness technology.
              Achieve your goals with modern machines designed for maximum performance and efficiency.</p>
          </div>
          <div class="card ">
            <div id="icon-body">
              <FontAwesomeIcon icon={faLeaf} id='icon' />
            </div>
            <p class="tip">Healthy nutrition plan</p>
            <p class="second-text">Achieve your fitness goals with our gym's personalized healthy nutrition plans,
              designed to fuel your workouts, boost energy, and support a balanced lifestyle<br/> &nbsp;</p>
          </div>
          <div class="card ">
            <div id="icon-body-3">
              <FontAwesomeIcon icon={faPersonRunning} id='icon' />
            </div>
            <p class="tip">Professional training plan</p>
            <p class="second-text">Achieve your fitness goals with our professional training plans tailored to your needs.
              Personalized guidance, expert trainers, and proven results for every fitness level</p>
          </div>
          <div class="card ">
            <div id="icon-body">
              <FontAwesomeIcon icon={faHeartPulse} id='icon' />
            </div>
            <p class="tip">Unique to your needs</p>
            <p class="second-text">Personalized fitness plans tailored to your goals. Our gym offers customized workouts,
              expert guidance, and a supportive environment to help you achieve success.</p>
          </div>
        </div>
      </div>
      <div>
        <h3 class='text-xl text-center text-orange-400 uppercase mt-24 max-[768px]:text-base max-[768px]:m-1'>our classes</h3>
        <h1 class='text-5xl text-center text-white font-bold uppercase mt-2 max-[768px]:text-3xl'>What we offer</h1>
        <div class="classes">
          <div class="palette">
            <div class="cl"><span><h1>Cardio</h1>
              Boost your fitness with our dynamic cardio classes.
              Join us for high-energy workouts that improve endurance,
              burn calories, and strengthen your heart</span></div>

            <div class="cl"><span><h1>Bodybuilding</h1>
              Join our expert-led bodybuilding classes to build strength, sculpt muscle,
              and achieve your fitness goals with personalized training in a motivating environment</span>
              </div>

            <div class="cl"><span><h1>Power Lifting</h1>
              Join our dynamic powerlifting classes, designed to build strength and technique.
              Train with expert coaches, perfect your form, and achieve your lifting goals</span></div>

            <div class="cl"><span><h1>Fitness Modeling</h1>
              Join our fitness modeling classes to sculpt your physique and boost confidence.
              Perfect your poses, enhance your style, and excel in the fitness modeling industry</span></div>
          </div>
        </div>
      </div>
      <div id='bgpattern-2'>
        <h3 class='text-2xl text-center text-orange-400 uppercase mt-2 pt-2.5 max-[768px]:text-base max-[768px]:m-1'>Our Plan</h3>
        <h1 class='text-6xl text-center text-white font-bold uppercase mt-2 max-[768px]:text-3xl'>Start today</h1>
        <div id='plan-div'>
          <table class=" mx-auto border-separate border-spacing-20">
            <tbody>
              <tr>
                <td><div class="plan ">
                  <div class="plan-details">
                    <p class="text-title mt-5 ">Basic Plan</p>
                    <br />
                    <h1 class='text-price -mt-4'>$25</h1>
                    <p class="text-body ">
                      <ul>
                        <li>Access to All Equipments</li>
                        <li>Training Plan</li>
                        <li>Nutrition Plan</li>
                        <li>Free Cardio Session</li>
                      </ul>
                    </p>
                  </div>
                  <button class="plan-button">{contact.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    
                  >
                    {item.name}
                  </a>
                ))}</button>
                </div>
                </td>

                <td><div class="plan">
                  <div class="plan-details">
                    <p class="text-title">Personal Training Plan</p>
                    <h1 class='text-price'>$45</h1>

                    <p class="text-body"><ul>
                      <li>Access to All Equipments</li>
                      <li>Personalized Training Plan</li>
                      <li>Nutrition Plan</li>
                      <li>Free Cardio Session</li>
                      <li>Free Consultation</li>
                      <li>Custom workouts</li>
                    </ul>
                    </p>
                  </div>
                  <button class="plan-button">{contact.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    
                  >
                    {item.name}
                  </a>
                ))}</button>
                </div>
                </td>

                <td><div class="plan">
                  <div class="plan-details">
                    <p class="text-title">12-Month Unlimited Plan</p>
                    <h1 class='text-price'>$250</h1>

                    <p class="text-body"><ul>
                      <li>Access to All Equipments</li>
                      <li>Personalized Training Plan</li>
                      <li>Nutrition Plan</li>
                      <li>Free Cardio Session</li>
                      <li>Free Consultation</li>
                      <li>Custom workouts</li>
                    </ul>
                    </p>
                  </div>
                  <button class="plan-button">{contact.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    
                  >
                    {item.name}
                  </a>
                ))}</button>
                </div>
                </td>

              </tr>

            </tbody>
          </table>
        </div>
        <div>

        </div>
      </div>
    </div>

  )
}

export default Home
