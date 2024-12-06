import { styles } from "../lib/utils";
import {a_propos, value} from '../constants/index'
import { motion } from "framer-motion";
import { textVariant,fadeIn,zoomIn } from "../lib/motion";
import valueImage from "../assets/valueImage.jpg"
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const Value = ()=> {
    return(
        <div className="relative isolate overflow-hidden bg-white px-6 py-24  lg:overflow-visible lg:px-0 mx-aut">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          >
            <defs>
              <pattern
                x="40%"
                y={9}
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-red-100">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1   lg:mx-0 lg:max-w-none xl:grid-cols-3  lg:items-start lg:gap-y-0">
          {/* <div className="lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pl-12">
              <motion.div variants={textVariant()} className="lg:max-w-lg">
                <p className={`${styles.sectionSubText} `}>djsjs</p>
                <h1 className={`${styles.sectionHeadText}  text-start`}>fmfmf</h1>
                
              </motion.div>
            </div>
            
          </div> */}
            
          <div className="lg:col-span-2 lg:col-start-2 lg:row-start-2 lg:mx-auto  lg:w-full lg:max-w-[100rem] xl:grid-cols-2 lg:gap-x-8 lg:px-0 ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8  ">
            <div className="mx-auto  max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {value.map((value) => (
                <div key={value.title} className="relative ">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                    {/* <feature.icon aria-hidden="true" className="h-6 w-6 text-white" /> */}
                    </div>
                     <p className="ml-12 pt-1">{value.title}</p>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
   
          </div>

          <div className="-ml-12 mt-20 p-12 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden ">
            <img
               alt=""
               src={valueImage}
               className="w-[30rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:w-[45rem]"
              />
          </div>
        </div>
      </div>
    )
}

export default Value;