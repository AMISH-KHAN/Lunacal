import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CSSProperties, useState } from "react";

interface ArrowProps {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}


function SampleNextArrow(props:ArrowProps) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{ ...style, display: "block",position:"absolute", top:"-4rem" ,right:"0" ,width:"62px",height:"62px",opacity:"0", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props:ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",position:"absolute", top:"-4rem" ,left:"29rem" ,width:"62px",height:"62px",opacity:"0" }}
      onClick={onClick}
    />
  );
}


function ImageWidget() {
  const settings = {
    className: "center",
    // centerMode: true,
    infinite: false,
    slidesToScroll:3,
    slidesToShow: 3,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const [imageUrlList, setImageUrlList] = useState<(string|undefined)[]>(["./assets/pic1.jpg","./assets/pic2.jpg","./assets/pic3.jpg"])
  // const urlList=[]
  const handleImageChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const file=files[0]
      const reader = new FileReader();
      reader.onloadend = () => {
        const url = reader.result?.toString()
        
        setImageUrlList((prev) => {
          return [
            ...prev,
            url
          ]
        });
      };
      reader.readAsDataURL(file);
    
    }
  };

  return (
    <>
      <div className="flex bg-[#363C43] w-[720px] h-[316px] rounded-xl shadow-[4px_4px_4px_4px_rgba(0,0,0,0.25)] p-[20px] gap-[29px]">
              <div className="w-[24px] h-[159.69px] flex flex-col justify-between ">
                  <img src="./assets/help.png" alt="" />
                  <img src="./assets/app.png" alt="" />
              </div>

             
        <div className='flex flex-col w-[88%]'>
          <div className="flex   justify-between">

                  <div className=' bg-[#171717] w-[149px] h-[62px] text-white text-[20px] text-center px-[38px] py-[16px] rounded-[20px]'>
                      Gallery
                  </div>
            <div className="flex gap-12 justify-center items-center ">
            <div className="w-[131.32px] h-[46px] bg-white/[0.03] rounded-full text-[12px] relative text-white text-center flex justify-center items-center font-extrabold  shadow-custom-inner">
              <input type="file" name="image" id="image" accept="image/*" className=" opacity-0 cursor-pointer absolute w-full h-full" onChange={handleImageChange} />

                + Add Image
              </div>
              <button className=" bg-gradient-to-tl to-[#303439] from-[#161718] w-[45px] h-[45px] flex justify-center items-center rounded-full shadow-[0px_4px_9px_5px_rgba(0,0,0,0.25)]">
                <img src="./assets/left_arrow.png" alt="" />
              </button>
              <button className=" bg-gradient-to-tl to-[#303439] from-[#161718] w-[45px] h-[45px] flex justify-center items-center rounded-full shadow-[0px_4px_9px_5px_rgba(0,0,0,0.25)]">
                <img src="./assets/right_arrow.png" alt="" />
              </button>
                      </div>
                  </div>
          
          <div className="slider-container mt-[55px] ">
      <Slider {...settings}>
  
                {
                imageUrlList && imageUrlList.map((item,key) => {
                  return (
                    <div key={key} className="w-[190px] h-[169px] pl-[15px]">
                      <img src={item} className="w-full h-full rounded-lg" alt="image" />
                      </div>
                    )
                  })
          }
      
       
      </Slider>
    </div>
              </div>
          </div>
              
    </>
  )
}

export default ImageWidget
