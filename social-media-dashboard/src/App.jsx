import React, { useEffect } from 'react'
import './App.css'
import arrowUp from './assets/icon-up.svg'
import arrowDown from './assets/icon-down.svg'
import facebookIcon from './assets/icon-facebook.svg'
import twitterIcon from './assets/icon-twitter.svg'
import youtubeIcon from './assets/icon-youtube.svg'
import instagramIcon from './assets/icon-instagram.svg'

function toggleFunc() {
  const toggle = document.getElementById("toggleBtn");
}
const username = "@hozayves";
const socialMedia = [
  {id: 1, platform: "facebook", follower: "1984", dailyFollower: 12, icon: facebookIcon, riseUp: true},
  {id: 1, platform: "twitter", follower: "1044", dailyFollower: 12, icon: twitterIcon, riseUp: true},
  {id: 1, platform: "instagram", follower: "11k", dailyFollower: 12, icon: instagramIcon, riseUp: true},
  {id: 1, platform: "youtube", follower: "8239", dailyFollower: 144, icon: youtubeIcon, riseUp: false},
];
const socialOverview = [
  {name: "page views", icon: facebookIcon, number: 87, rise: true, riseNumber: 3},
  {name: "likes", icon: facebookIcon, number: 52, rise: false, riseNumber: 2},
  {name: "likes", icon: instagramIcon, number: 5462, rise: true, riseNumber: 2257},
  {name: "profile views", icon: instagramIcon, number: "52k", rise: true, riseNumber: 1357},
  {name: "retweets", icon: twitterIcon, number: "117", rise: true, riseNumber: 303},
  {name: "likes", icon: twitterIcon, number: "507", rise: true, riseNumber: 563},
  {name: "likes", icon: youtubeIcon, number: "107", rise: false, riseNumber: 19},
  {name: "total views", icon: youtubeIcon, number: "1407", rise: false, riseNumber: 12},
]

function App() {
  useEffect(() => {
    toggleFunc();
  }, [])

  return (
    <section className='w-full min-h-auto px-auto bg-lightWhiteBG font-inter dark:bg-veryDarkBlueBG'>
      <div className='flex flex-col gap-4 relative'>
        {/* Header */}
        <div className='w-full h-60 flex flex-col justify-between bg-lightVeryPaleBlueTop gap-1 px-6 py-10 pb-14 rounded-bl-[30px] rounded-br-[30px] sm:px-20 md:px-10 md:flex-row md:justify-between md:h-44 dark:bg-veryDarkBlueTop'>
          <div className='flex flex-col gap-2'>
            <h1 className='font-extrabold text-[26px] leading-6 capitalize md:text-4xl dark:text-whiteText'>Social media dashboard</h1>
            <p className='leading-normal font-semibold text-lightDarkGrayishBlueText md:text-sm dark:lightDarkGrayishBlueText'>Total Follower 23,452</p>
          </div>
          <hr className='md:hidden'/>
          <div className='flex justify-between items-center md:gap-4 md:self-start'>
            <span className='font-semibold text-lightDarkGrayishBlueText md:text-sm '>Dark Mode</span>
            <div className='w-[75px] h-[35px] flex items-center bg-lightToggle rounded-l-full rounded-r-full p-1 relative'>
              <div id='toggleBtn' className='absolute w-[30px] h-[30px] bg-lightWhiteBG rounded-full'></div>
            </div>
          </div>
        </div>
        <div className='w-full h-auto absolute top-52 px-6 flex flex-col gap-5 sm:px-20 md:flex-row md:flex-wrap md:justify-between md:gap-6 md:px-10 xl:gap-3 md:top-36'>
          {socialMedia?.map(({platform, follower, dailyFollower, icon, riseUp}) => (
            <div className={`w-full rounded-2xl md:w-[325px] lg:w-[450px] xl:w-[280px] ${platform === "instagram"
                ? "from-instagramFrom to-instagramTo bg-gradient-to-r"
                : platform === "facebook" ? "bg-facebook" : platform === "twitter" ? "bg-twitter" : "bg-youtube" }`}>
            <div className={`w-full flex flex-col justify-center items-center bg-lightGrayishBlueCard rounded-xl mt-1 px-2 py-6 gap-4 dark:bg-darkDesaturatedBlueCard`}>
              <div className='flex gap-2 justify-center items-center'>
                <img src={icon} alt="" />
                <h2 className='leading-normal text-lg font-medium text-lightDarkGrayishBlueText dark:text-lightDarkGrayishBlueText'>{ username }</h2>
              </div>
              <div className='flex flex-col justify-start items-center gap-2 dark:text-whiteText'>
                <h3 className='font-bold text-6xl'>{follower}</h3>
                <span className='leading-normal tracking-widest text-2xl text-lightDarkGrayishBlueText'>Followers</span>
              </div>
              <div className=''>
                { riseUp 
                  ?  <p className='flex items-center justify-center gap-1 text-lineGreen font-bold'><img src={arrowUp} alt="" /> {dailyFollower} Today</p>
                  : <p className='flex items-center justify-center gap-1 text-brightRed font-bold'><img src={arrowDown} alt="" /> {dailyFollower} Today</p>
                }
                
              </div>
            </div>
            </div>
          ))}
        <div className='w-full h-auto py-8 flex flex-col gap-10'>
          <h1 className='text-3xl font-extrabold text-lightDarkGrayishBlueText dark:text-whiteText'>Overview - Today</h1>
          <div className='flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-between md:gap-6 xl:gap-4'>
            {/* overview */}
            { socialOverview?.map(({name, icon, number, rise, riseNumber }) => (
              <div className='flex flex-col gap-8 bg-lightGrayishBlueCard p-6 rounded-2xl md:w-[325px] lg:w-[450px] xl:w-[280px] dark:bg-darkDesaturatedBlueCard'>
                <div className='flex justify-between items-center'>
                  <span className='capitalize font-bold text-xl text-lightDarkGrayishBlueText'>{ name }</span>
                  <img src={icon} alt="" />
                </div>
                <div className='flex justify-between items-center dark:text-whiteText'>
                  <span className='font-bold text-4xl'>{ number}</span>
                  {rise 
                    ? <div className='flex justify-center items-center gap-1 text-lineGreen font-semibold'>
                      <img src={arrowUp} alt="" />
                      <span>{riseNumber}%</span>
                    </div>
                    :
                      <div className='flex justify-center items-center gap-1 text-brightRed font-semibold'>
                        <img src={arrowDown} alt="" />
                        <span>{riseNumber}%</span>
                      </div>
                    }
                  
                </div>
              </div> 
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default App
