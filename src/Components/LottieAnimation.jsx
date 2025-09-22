import { useRef } from "react";
import Lottie from "lottie-react";
import animationData from "../Animation/Animation.json";

export default function LottieAnimation() {
  const lottieRef = useRef();

  return (
    <div className="flex justify-center items-center mt-4 px-4">
      <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
