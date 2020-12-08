import { useSpring, animated, config } from "react-spring";
import React, { useRef } from "react";
import { Typography } from "../theme/themIndex";
import useInView from "./inViewHook";

const useSectionTitleSlide = (name, view, variant) => {
  const titleRef = useRef(null);
  const onScreen = useInView(titleRef, view);

  const spring = useSpring({
    opacity: !onScreen ? "0" : "1",
    transform: !onScreen ? "translate3d(-40px, 0, 0)" : "translate3d(0, 0, 0)",
    config: config.molasses,
  });

  const AnimatedTitle = animated(Typography);

  return (
    <AnimatedTitle
      variant={variant}
      ref={titleRef}
      style={spring}
      aria-label={name}>
      {name}
    </AnimatedTitle>
  );
};

export default useSectionTitleSlide;
