import { useState } from "react"

function MainWidget() {
    const [active, setActive] = useState("1")


    
  return (
    <>
          <div className="flex relative bg-[#363C43] w-[720px] h-[316px] rounded-xl shadow-[4px_4px_4px_4px_rgba(0,0,0,0.25)] p-[20px] gap-[29px] container ">
              <div className="w-[24px] h-[159.69px] flex flex-col justify-between ">
                  <img src="./assets/help.png" alt="" />
                  <img src="./assets/app.png" alt="" />
              </div>
              <div>
                  <nav className="p-[6px] flex row gap-[6px] bg-[#171717] rounded-2xl mb-[35px]">
                      <div onClick={()=>{setActive("1")}} className={`h-[49px] w-[195px] active: rounded-2xl text-[#A3ADB2] flex justify-center flex-col items-center cursor-pointer ${active==="1"?"bg-[#28292F] shadow-[0px_4.96px_12.4px_2.48px_rgba(0,0,0,0.55)]":""} `}>About Me</div>
                      <div onClick={()=>{setActive("2")}} className={`h-[49px] w-[195px] active: rounded-2xl text-[#A3ADB2] flex justify-center flex-col items-center cursor-pointer ${active==="2"?"bg-[#28292F] shadow-[0px_4.96px_12.4px_2.48px_rgba(0,0,0,0.55)]":""} `}>Experience</div>
                      <div onClick={()=>{setActive("3")}} className={`h-[49px] w-[195px] active: rounded-2xl text-[#A3ADB2] flex justify-center flex-col items-center cursor-pointer ${active==="3"?"bg-[#28292F] shadow-[0px_4.96px_12.4px_2.48px_rgba(0,0,0,0.55)]":""} `}>Recommended</div>
                  </nav>
                  {/* content */}
                  <div className=" h-[175px] overflow-y-auto w-[611px] scrollbar-gradient">
                      <div className={`opacity-0 ${active === "1" ? "opacity-100" : ""} pr-[20px] `}>
                          <p className="text-[20px] text-[#969696]">
                          Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.

                              I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
                              
                          </p>
                      </div>
                  </div>
              </div>
      </div>
    </>
  )
}

export default MainWidget
