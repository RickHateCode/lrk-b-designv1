import React, { useRef } from "react";
import {
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

function SwiperService({service}) {
  return(
    <div className="bg-black py-6 px-3 rounded-xl ">
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
    </div>
  )
}
export default SwiperService;