"use client"
import React, { ReactNode, useEffect } from "react";

interface FadeInOnScrollProps {
  children: ReactNode; // Accept children as a prop
}

const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({ children }) => {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fadein");
          observer.unobserve(entry.target); // Stop observing after adding the class
        }
      });
    };

    const observerOptions = {
      root: null, // Observes against the viewport
      threshold: 0.5, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe elements with the .prefade class
    const elements = document.querySelectorAll(".prefade");
    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect(); // Clean up observer on component unmount
    };
  }, []);

  return <div>{children}</div>; // Render children passed to the layout
};

export default FadeInOnScroll;
