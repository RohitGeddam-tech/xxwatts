import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Nav from "./components/TestNav";
import Intro from "./home/Intro";
import About from "./home/About";
import Services from "./home/Services";
import Hire from "./home/Hire";
import Aos from "aos";
import "aos/dist/aos.css";

const View = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  const colorRef = useRef(null);

  const isInView = () => {
    const refColor = colorRef.current;
    const rect = refColor.getBoundingClientRect();
    return (
      (rect.top <= 100 || 
       rect.top <= 300 ||
       rect.top <= 500) &&
      (rect.bottom <= 0 ||
        rect.bottom >= window.innerHeight ||
        rect.bottom >= window.innerHeight - 100 ||
        rect.bottom >= window.innerHeight - 300 ||
        rect.bottom >= window.innerHeight - 500)
    );
  };

  console.log(window.innerHeight);

  const [inView, setInView] = useState(false);

  useEffect(() => {
    setInView(isInView());
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = () => {
    setInView(isInView());
  };

  const classColor = inView ? "about" : "about-none";

  return (
    <>
      <Nav />
      <section>
        <Intro />
      </section>
      <section>
        <div ref={colorRef} className={classColor}>
          <About />
        </div>
      </section>
      <section>
        <div>
          <Services />
        </div>
      </section>
      <section>
        <div>
          <Hire />
        </div>
      </section>
    </>
  );
};

const App = () => {
  const colorRef = useRef(null);

  const isInView = () => {
    const refColor = colorRef.current;
    const rect = refColor.getBoundingClientRect();
    return (
      (rect.top >= 300) &&
       (
      // (rect.bottom <= 0 ||
        // rect.bottom >= window.innerHeight ||
        // rect.bottom >= window.innerHeight - 100 ||
        // rect.bottom >= window.innerHeight - 300 ||
        // rect.bottom >= window.innerHeight - 500 ||
        rect.bottom >= window.innerHeight
      )
    );
  };

  console.log(window.innerHeight);

  const [inView, setInView] = useState(false);

  useEffect(() => {
    setInView(isInView());
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = () => {
    setInView(isInView());
  };

  const backColor = inView ? 'Appcolor' : 'App'

  return (
    <div ref={colorRef} className={backColor}>
      <View />
    </div>
  );
};

export default App;
