import Image from "next/image";
import basithCC from "../../public/assets/basithCC.jpeg";
import shujauddin from "../../public/assets/shujauddin.jpeg";
import ayesha from "../../public/assets/ayesha.jpg";
import basithCTO from "../../public/assets/basithCTO.jpeg";
import sofain from "../../public/assets/sofain.jpg";

import { FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";

const GB = () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col m-10 text-center">
        <div className="w-[300px] bg-[#040D12] m-1 h-fit text-center">
          <div className="text-center rounded-t-[20px]">
            <Image
              src={basithCC}
              alt=""
              className="h-[300px] w-[100%] object-cover"
              style={{ clipPath: "polygon(0% 0%, 0% 100%, 100% 80%, 100% 0%)" }}
            ></Image>
          </div>
          <div>
            <p className="font-sans header text-white text-center font-bold mt-3 text-[24px] tracking-wider">
              ABDUL BASITH
            </p>
            <p className="font-sans header text-white text-center mt-1 text-[14px]">
              CHIEF COORDINATOR
            </p>
            <p className="font-sans header text-white mr-10 ml-10 mt-5 mb-5 text-center text-[14px]">
              Description here they can keep whatever they want
            </p>
          </div>
          <div className="flex justify-center space-x-4 mb-5 mt-3">
            <a
              href="#"
              className="text-gray-500 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col m-10 text-center">
        <div className="w-[300px] bg-[#040D12] m-1 h-fit text-center">
          <div className="text-center rounded-t-[20px]">
            <Image
              src={shujauddin}
              alt=""
              className="h-[300px] w-[100%] object-cover"
              style={{ clipPath: "polygon(0% 0%, 0% 100%, 100% 80%, 100% 0%)" }}
            ></Image>
          </div>
          <div>
            <p className="font-sans header text-white text-center font-bold mt-3 text-[24px] tracking-wider">
              SYED SHUJAUDDIN
            </p>
            <p className="font-sans header text-white text-center mt-1 text-[14px]">
              DEPUTY CHIEF COORDINATOR
            </p>
            <p className="font-sans header text-white mr-10 ml-10 mt-5 mb-5 text-center text-[14px]">
              Description here they can keep whatever they want
            </p>
          </div>
          <div className="flex justify-center space-x-4 mb-5 mt-3">
            <a
              href="#"
              className="text-gray-500 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col m-10 text-center">
        <div className="w-[300px] bg-[#040D12] m-1 h-fit text-center">
          <div className="text-center rounded-t-[20px]">
            <Image
              src={ayesha}
              alt=""
              className="h-[300px] w-[100%] object-cover"
              style={{ clipPath: "polygon(0% 0%, 0% 100%, 100% 80%, 100% 0%)" }}
            ></Image>
          </div>
          <div>
            <p className="font-sans header text-white text-center font-bold mt-3 text-[24px] tracking-wider">
              AYESHA FATIMA
            </p>
            <p className="font-sans header text-white text-center mt-1 text-[14px]">
              CHIEF INFORMATION OFFICER
            </p>
            <p className="font-sans header text-white mr-10 ml-10 mt-5 mb-5 text-center text-[14px]">
              Description here they can keep whatever they want
            </p>
          </div>
          <div className="flex justify-center space-x-4 mb-5 mt-3">
            <a
              href="#"
              className="text-gray-500 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col m-10 text-center">
        <div className="w-[300px] bg-[#040D12] m-1 h-fit text-center">
          <div className="text-center rounded-t-[20px]">
            <Image
              src={basithCTO}
              alt=""
              className="h-[300px] w-[100%] object-cover"
              style={{ clipPath: "polygon(0% 0%, 0% 100%, 100% 80%, 100% 0%)" }}
            ></Image>
          </div>
          <div>
            <p className="font-sans header text-white text-center font-bold mt-3 text-[24px] tracking-wider">
              ABDUL BASITH
            </p>
            <p className="font-sans header text-white text-center mt-1 text-[14px]">
              CHIEF TECHNOLOGY OFFICER
            </p>
            <p className="font-sans header text-white mr-10 ml-10 mt-5 mb-5 text-center text-[14px]">
              Description here they can keep whatever they want
            </p>
          </div>
          <div className="flex justify-center space-x-4 mb-5 mt-3">
            <a
              href="#"
              className="text-gray-500 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col m-10 text-center">
        <div className="w-[300px] bg-[#040D12] m-1 h-fit text-center">
          <div className="text-center rounded-t-[20px]">
            <Image
              src={sofain}
              alt=""
              className="h-[300px] w-[100%] object-cover"
              style={{ clipPath: "polygon(0% 0%, 0% 100%, 100% 80%, 100% 0%)" }}
            ></Image>
          </div>
          <div>
            <p className="font-sans header text-white text-center font-bold mt-3 text-[24px] tracking-wider">
              SOFAIN HUSSAIN
            </p>
            <p className="font-sans header text-white text-center mt-1 text-[14px]">
              CHIEF TECHNOLOGY OFFICER
            </p>
            <p className="font-sans header text-white mr-10 ml-10 mt-5 mb-5 text-center text-[14px]">
              Description here they can keep whatever they want
            </p>
          </div>
          <div className="flex justify-center space-x-4 mb-5 mt-3">
            <a
              href="#"
              className="text-gray-500 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GB;
