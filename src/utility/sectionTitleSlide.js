import { useSpring, animated, config } from "react-spring";
import React from "react";
import { Typography } from "../theme/themIndex";

const useSectionTitleSlide = (name, bool, ref) => {
  const spring = useSpring({
    opacity: !bool ? "0" : "1",
    transform: !bool ? "translate3d(-40px, 0, 0)" : "translate3d(0, 0, 0)",
    config: config.molasses,
  });

  const AnimatedTitle = animated(Typography);

  const text = (
    <AnimatedTitle variant="h2" ref={ref} style={spring}>
      {name}
    </AnimatedTitle>
  );

  return text;
};

export default useSectionTitleSlide;
