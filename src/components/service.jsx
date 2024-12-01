import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../lib/utils";
import { services } from "../constants";
import { SectionWrapper } from "../hoc"
import { textVariant } from "../lib/motion";
import logoRemove from "../assets/logoRemove.png"

const ServiceCard = ({ service }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#000000",
        color: "#fff",
        cursor: true
      }}
      contentArrowStyle={{ borderRight: "7px solid  #f34b46" }}
      // date={service.date}
      iconStyle={{ background: service.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={logoRemove}
            alt={service.company_name}
            className='w-[90%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{service.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {service.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {service.points.map((point, index) => (
          <li
            key={`service-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Service = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
           ce que nous pouvons vous offrir
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Nos Services 
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline lineColor="#f34b46">
          {services.map((service, index) => (
            <ServiceCard
              key={`experience-${index}`}
              service={service}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Service, "work");
