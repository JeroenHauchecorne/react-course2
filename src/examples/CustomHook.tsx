import React from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

// Careful though, everywhere you use useWindowSize() hook, you'll create an eventlistener!!
// In practice you'd expose  this via Context Provider at root of your app

const useDeviceType = () => {
  const { width, height } = useWindowSize();

  const isMobile = width < 400 && height < 900;

  return {
    isMobile,
  };
};

export const CustomHook = () => {
  const { width, height } = useWindowSize(); 
  const { isMobile } = useDeviceType();

  return (
    <div>
      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>
      <p>{isMobile ? "MOBILE" : "DESKTOP"}</p>
    </div>
  );
};
