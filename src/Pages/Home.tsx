import ImageWidget from "../Components/ImageWidget"
import MainWidget from "../Components/MainWidget"


function Home() {
  return (
    <>
          <div className="  w-full min-h-screen bg-gradient-to-b from-[#373E44] from-0%  to-[#191B1F] to-100% flex  ">
              <div className=" w-1/2">
                  
              </div>
              <div className="  p-[8px] lg:p-[96px] flex flex-col gap-[2rem]">
              <div className=' container-line '>
              <MainWidget/>
                  
              </div>
              <div className=' container-line '>
              <ImageWidget/>
                  
              </div>
                  
              </div>
              
      </div>
    </>
  )
}

export default Home
