import { useSpring, animated } from "@react-spring/web";

export const useAnimation = () => {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 100,
    config: { duration: 500 },
  });
  return {
    props: props,
    a: animated,
  };
};
