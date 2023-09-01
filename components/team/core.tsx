import Image from "next/image";
import { FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";
import abid from "../../public/assets/abid.jpg";


const Core = () => {
  return (

    <div className="flex flex-col m-10 w-[260px]  bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4]  text-center rounded-[20px]">
      <div className="w-[250px] bg-[#040D12] rounded-[20px] m-1 h-fit text-center">
        <div className="text-center mt-10">
          <Image
            src={abid}
            alt=""
            className="block h-[120px] w-[120px] rounded-full ml-auto mr-auto"
          ></Image>
        </div>
        <div>
          <p className="font-sans header text-white text-center font-bold mt-5 text-2xl tracking-wider">Abid Nafi</p>
          <p className="font-sans header text-white text-center mt-2 text-base">Web Team Head</p>
          <p className="font-sans header text-white mr-10 ml-10 mt-5 mb-5 text-center text-xs">Description here they can keep whatever they want</p>
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
  );
};

export default Core;
