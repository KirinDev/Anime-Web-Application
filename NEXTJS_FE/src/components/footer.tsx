import { FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { Silkscreen } from "next/font/google";

const silkscreen = Silkscreen({ weight: "400", subsets: ["latin"] });

export default function Footer() {

    return (
        <footer className="relative text-center p-16 text-white bottom-0 w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images7.alphacoders.com/134/1341150.png')" }}>
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="relative z-10">
                <div className={`${silkscreen.className} text-2xl p-6 font-bold`}>BONFIRE</div>
                <hr className="my-4 border-t-2 border-white w-1/2 mx-auto" />
                <div className="flex justify-center p-6 space-x-6">
                    <FaXTwitter className="text-2xl cursor-pointer hover:text-gray-400 hover:scale-125" />
                    <FaInstagram className="text-2xl cursor-pointer hover:text-gray-400 hover:scale-125" />
                    <FaLinkedin className="text-2xl cursor-pointer hover:text-gray-400 hover:scale-125" />
                    <FaDiscord className="text-2xl cursor-pointer hover:text-gray-400 hover:scale-125" />
                </div>
            </div>
        </footer>
    );
}
