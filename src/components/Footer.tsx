import Image from "next/image";
import Link from "next/link";
import { BiLogoFacebook } from "react-icons/bi";
import { BsInstagram, BsSendFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-ink text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="">
          <span className="ml-2 text-xl font-bold">
            <Link href="/" className="inline-block rounded-xl bg-white p-2">
              <Image
                src="/images/justiway2.png"
                alt="Justiway Travel & Tours"
                width={140}
                height={140}
              />
            </Link>
          </span>
          <p className=" mt-2 mb-4 font-bold text-2xl">
            Women-first tours. Planned with care.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-gradient-to-r from-brand to-mint px-6 py-2.5 font-semibold text-white transition-all duration-300 hover:from-brand-dark hover:to-mint-dark"
          >
            Book a Tour
          </Link>
        </div>

        <div className=" flex flex-col space-y-3 p-3">
          <h3 className="text-lg font-medium text-[#fff]">Quick Links</h3>

          <Link
            href="/"
            className="text-gray-400 text-[14px] hover:text-mint transition-all duration-300"
          >
            Home
          </Link>

          <Link
            href="/services"
            className="text-gray-400 text-[14px] hover:text-mint transition-all duration-300"
          >
            Services
          </Link>

          <Link
            href="/about"
            className="text-gray-400 text-[14px] hover:text-mint transition-all duration-300"
          >
            About Us
          </Link>

          <Link
            href="/tours"
            className="text-gray-400 text-[14px] hover:text-mint transition-all duration-300"
          >
            Tour Packages
          </Link>
          <Link
            href="/safety"
            className="text-gray-400 text-[14px] hover:text-mint transition-all duration-300"
          >
            Safety Promise
          </Link>

          <Link
            href="/contact"
            className="text-gray-400 text-[14px] hover:text-mint transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>

        <div>
          <h3 className="text-lg font-medium text-[#fff]">
            <span className="inline-flex items-center justify-center gap-x-2">
              <FaPhoneAlt className="text-[#FFdf01] mr-2 " />
            </span>
            More Enquiry
          </h3>
          <p className="mb-7 text-gray-400 text-[14px]">+234 806 029 1061</p>
          <h3 className="text-lg font-medium text-[#fff]">
            <span className="inline-flex items-center justify-center gap-x-2">
              <BsSendFill className="text-[#FFdf01] mr-2 " />
            </span>
            Send Us a Message
          </h3>
          <p className=" text-gray-400 text-[14px]">
            enquiries@justiwaytravelandtours.com
          </p>
          <p className="mb-7 text-gray-400 text-[14px]">
            contact@justiwaytravelandtours.com
          </p>
          <h3 className="text-lg font-medium text-[#fff]">
            <span className="inline-flex items-center justify-center gap-x-2">
              <FaLocationDot className="text-[#FFdf01] mr-2 " />
            </span>
            Address
          </h3>
          <p className="mb-7 text-gray-400 text-[14px]">
            Chief Shittu Saka Musa Street, Ilaje , Lagos State
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium text-[#fff]">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <Link href="https://www.facebook.com/justiwaytours/">
              <span className="block border rounded-full p-1 mx-2 hover:bg-[#FFdf01] transition-all duration-500 hover:border-transparent">
                <BiLogoFacebook />
              </span>
            </Link>
            <Link href="https://www.instagram.com/justiway_tours/">
              <span className="block border rounded-full p-1 hover:bg-[#FFdf01] transition-all duration-500 hover:border-transparent">
                <BsInstagram />
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm mt-6 border-t border-gray-600 pt-4">
        © {new Date().getFullYear()} Justiway Travel and Tours. All rights
        reserved.
      </div>
    </footer>
  );
}
