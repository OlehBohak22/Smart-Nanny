"use client";

import { useModal } from "@/components/ModalContext";
import { btnSvg } from "../BlogSection/BlogSection";
import s from "./EducationHero.module.css";
import Image from "next/image";

export const EducationHero = () => {
  const { openModal } = useModal();

  return (
    <section className={s.section}>
      <div className={s.homeHeroImage}>
        <Image
          src="/images/education-hero-image.png"
          alt="Hero image"
          width={1920}
          height={1080}
          priority
        />
        <Image
          src="/icons/pink-sun.svg"
          alt="Hero image"
          width={1920}
          height={1080}
          priority
          className={s.sun}
        />
      </div>

      <div className={s.content}>
        <h1>
          {svg}
          <span>Професійна {line} </span> няня
        </h1>

        <p>
          Практичний онлайн-курс, який допомагає впевнено взаємодіяти як з
          дітьми, так і з батьками, і будувати успішну карєру професійної няні
        </p>

        <button onClick={() => openModal("formB")} className={s.btn}>
          <div className={s.first}>{btnSvg}</div>
          Обрати навчання
          <div className={s.second}>{btnSvg}</div>
        </button>
        <Image
          alt="Plate"
          width={1920}
          height={1080}
          priority
          src="/icons/pink-plate.svg"
          className={s.plate}
        />
        <Image
          alt="Cloud"
          width={1920}
          height={1080}
          priority
          src="/images/pinkCloud3.png"
          className={s.cloud}
        />
      </div>
    </section>
  );
};

export const line = (
  <svg viewBox="0 0 367 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.00004 20.7578C2.45188 17.5375 10.2611 15.3919 13.0626 14.56C19.2811 12.7133 24.0145 9.7846 30.74 9.7846C34.8258 9.7846 52.0815 6.52609 43.2852 12.835C41.0185 14.4606 41.0163 13.5523 39.8457 15.3773C38.2423 17.8772 41.1509 16.0385 42.982 15.8346C52.0189 14.8282 59.7991 15.1512 68.9458 14.4606C83.7509 13.3429 100.311 15.5632 114.913 13.1378C125.853 11.3206 137.308 11.4634 148.196 9.78451C155.411 8.67211 162.687 7.24442 170.036 7.24442C172.464 7.24442 178.396 5.9582 178.191 9.07329C178.078 10.7718 172.111 13.0046 170.492 13.6455C168.708 14.352 159.357 17.3032 162.794 17.3032C178.232 17.3032 192.608 14.4284 207.729 11.8166C220.689 9.57803 233.794 5.41555 246.961 5.41555C262.394 5.41555 277.11 3.58668 292.637 3.58668C298.544 3.58668 303.415 1.68424 303.415 7.70164C303.415 9.69628 303.166 11.8532 302.16 13.6455C301.673 14.513 297.455 18.4038 298.282 16.7444C300.841 11.6149 311.575 11.429 316.758 9.78451C324.582 7.30183 333.611 5.67529 341.848 4.50112C349.491 3.41176 357.215 1.75781 365 1.75781"
      stroke="#FF91B2"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

const svg = (
  <svg
    className={s.svg}
    viewBox="0 0 73 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M36.3621 27.2955C39.2127 27.4948 42.2257 26.2379 44.7726 25.0087C48.7172 23.105 52.751 21.7021 56.6462 19.61C61.5437 16.9796 66.0046 13.684 70.6071 10.6438"
      stroke="#FF91B2"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M40.8599 34.6274C44.5822 34.8877 48.3044 35.148 52.0267 35.4083C54.6707 35.5932 57.1956 35.7387 59.8396 35.4813C60.9612 35.372 61.8667 35.7855 62.8761 35.1645"
      stroke="#FF91B2"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M3.34766 11.9561C9.48432 15.4242 13.6567 17.2354 19.5462 21.7878C27.5203 29.8543 31.9599 36.8304 33.6394 46.2696C34.9923 53.8728 35.4075 55.2242 34.9141 62.2806"
      stroke="#FF91B2"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M33.0005 18.0387C33.1774 17.0759 34.8309 16.1304 35.5503 15.5119C36.9222 14.3326 38.0754 13.0064 39.448 11.8265C41.4825 10.0776 43.2487 7.82947 44.9984 5.79019C45.573 5.12045 46.2076 4.31346 47.0152 3.98203"
      stroke="#FF91B2"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);
