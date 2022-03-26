import carousel from "./carousel.module.css";
import { useState } from "react";

function SliderLabels({ activeSlide, setActiveSlide, inputNum }) {
  return (
    <>
      {inputNum.map((item) => {
        return (
          <label
            key={item}
            htmlFor={item}
            onClick={() => {
              setActiveSlide(item);
            }}
            className={`${carousel["manual-btn"]}  
              ${item === activeSlide ? carousel["active"] : ""}`}
          ></label>
        );
      })}
    </>
  );
}

export function Carousel() {
  const [activeSlide, setActiveSlide] = useState("slide1");
  const inputNum = ["slide1", "slide2", "slide3", "slide4"];
  const slideList = [
    {
      divClassName: `${carousel["slide"]} ${carousel[activeSlide]}`,
      src: "/assets/images/living.webp",
      alt: "living room",
      imgClass: "top-fit",
    },
    {
      divClassName: carousel["slide"],
      src: "/assets/images/wallplanters.webp",
      alt: "planters on a wall",
      imgClass: "",
    },
    {
      divClassName: carousel["slide"],
      src: "/assets/images/portraitwall.webp",
      alt: "three portraits on a wall",
      imgClass: "bottom-fit",
    },
    {
      divClassName: carousel["slide"],
      src: "/assets/images/yellowsofa1.webp",
      alt: "living room sofa",
      imgClass: "bottom-fit",
    },
  ];

  return (
    <section className={carousel["carousel"]}>
      <div className={carousel["slides"]}>
        {slideList.map(({ divClassName, src, alt, imgClass }) => {
          return (
            <div className={divClassName} key={src}>
              <img src={src} alt={alt} className={imgClass} />
            </div>
          );
        })}

        <div className={carousel["manual-navigation"]}>
          <SliderLabels
            activeSlide={activeSlide}
            setActiveSlide={setActiveSlide}
            inputNum={inputNum}
          />
        </div>
      </div>
    </section>
  );
}
