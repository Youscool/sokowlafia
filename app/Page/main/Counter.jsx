"use client";

import { useEffect, useRef, useState } from "react";

function Counter({ end, duration = 2000 }) {
  const [value, setValue] = useState(0);
  const elementRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return;

        started.current = true;
        let start = 0;
        const increment = end / (duration / 16); // 60 FPS approx

        const animate = () => {
          start += increment;
          if (start < end) {
            setValue(Math.floor(start));
            requestAnimationFrame(animate);
          } else {
            setValue(end);
          }
        };

        animate();
      },
      { threshold: 0.5 }
    );

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [end, duration]);

  return <h2 className="timer count-title fw-bold" ref={elementRef}>+ {value}</h2>;
}

export default function CounterUp() {
  return (<>
   {/* FUN FACTS */}
      <div className="fun-facts">
        <div className="container">
          <div className="wrapper">
            <div className="row g-2">
              <div className="col-lg-4">
                <div className="counter">
                  <Counter end={32}/>
                  <p className="count-text">
                    Projets
                    <br />
                    Finalisés
                  </p>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="counter">
                  <Counter end={10}/>
                  <p className="count-text">
                    Ans
                    <br />
                    D'expérience
                  </p>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="counter">
                   <Counter end={6}/>
                  <p className="count-text">
                    Awards
                    <br />
                    gagné
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</>
  );
}