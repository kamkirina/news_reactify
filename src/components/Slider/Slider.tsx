import React, { useRef } from "react";
import styles from "./styles.module.css";

interface IProps {
  children: React.ReactElement | any;
  step?: number;
}

export function Slider({ children, step = 150 }: IProps) {
  const sliderRef = useRef<HTMLElement | null>(null);

  const scrollLeft = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft -= step;
  };

  const scrollRight = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft += step;
  };

  return (
    <div className={styles.slider}>
      <button className={styles.arrow} onClick={scrollLeft}>{`<`}</button>
      {React.cloneElement(children, { ref: sliderRef })}
      <button className={styles.arrow} onClick={scrollRight}>{`>`}</button>
    </div>
  );
}
