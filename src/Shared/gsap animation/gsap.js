import React, { useRef ,useEffect} from "react";
import { gsap } from "gsap";

function Gsap() {
  const imageRef = useRef(null);
  
  useEffect(() => {
    // create a timeline
    const tl = gsap.timeline({ defaults: { ease: "linear" } });
    // move image to the right
    tl.to(imageRef.current,.8, { x: "100%", duration: 5 });
    // move image back to the left
    tl.to(imageRef.current,.8, { x: "0%", duration: 4 }, "-=4");
    // repeat animation
    tl.repeat(-1);
  }, []);

  return (
    <div>
      <img ref={imageRef} id="my-image" src="bird.png" alt="Animated Image" />
    </div>
  );

}

export default Gsap;