import { useRef } from "react";
import Lottie from "lottie-react";
import animationData from "../Animation/WelcomeAnimation.json";

export default function WelcomeAnimation() {
  const lottieRef = useRef();

  return (
    <div className="flex justify-center items-center mt-5 mb-2">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{ width: "100%", height: "auto", maxHeight: 150 }}
        />
      </div>
    </div>
  );
}
