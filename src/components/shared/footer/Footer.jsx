import Link from "next/link";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import logo from "../../../../public/logo/logo.png";
import bKash from "../../../../public/logo/bKash.png";
import nagad from "../../../../public/logo/nagad.png";
import masterCard from "../../../../public/logo/masterCard.png";
import Image from "next/image";

function Footer() {
  return (
    <>
      <footer className="bg-[#282828] text-gray-300 py-12 w-full">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex gap-5">
            {/* Column 1: Logo & Description */}
            <div className="w-full md:w-1/3 mb-6">
              <div className="flex items-center">
                <Image src={logo} alt="image loading" weight={50} height={50} />
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  Bus Booking
                </h2>
              </div>
              <p className="text-gray-400">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature
                Contrary. It has roots in a piece of classical Latin literature
                Contrary.
              </p>

              <div className="flex space-x-4 mb-6 mt-4">
                <div className="bg-[#464646] rounded-full p-2">
                  <Link
                    className="text-gray-400 hover:text-white "
                    href="https://facebook.com"
                  >
                    <FaFacebookF size={24} />
                  </Link>
                </div>
                <div className="bg-[#464646] rounded-full p-2">
                  <Link
                    className="text-gray-400 hover:text-white "
                    href="https://facebook.com"
                  >
                    <FaYoutube size={24} />
                  </Link>
                </div>
                <div className="bg-[#464646] rounded-full p-2">
                  <Link
                    className="text-gray-400 hover:text-white "
                    href="https://facebook.com"
                  >
                    <RiInstagramFill size={24} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Column 2: Explore Links */}
            <div className="w-full md:w-1/3 mb-6">
              <h3 className="text-xl font-semibold text-white mb-4">Explore</h3>
              <ul className="space-y-2">
                <li>
                  <a className="hover:text-white" href="/posts">
                    FAQ
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="/about">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="/contact">
                    How To Buy Ticket
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="/privacy-policy">
                    Cancellation Policy
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 3: Explore Links */}
            <div className="w-full md:w-1/3 mb-6">
              <h3 className="text-xl font-semibold text-white mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <a className="hover:text-white" href="/posts">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="/about">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Social Media & Community */}
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-semibold text-white mb-4">
                Pay With
              </h3>
              <div className="flex space-x-4 mb-6">
                <div className="bg-white rounded-md p-4 bg-cover">
                  <Image
                    src={bKash}
                    alt="image loading"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="bg-white rounded-md p-4 bg-cover">
                  <Image
                    src={nagad}
                    alt="image loading"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="bg-white rounded-md p-4 bg-cover">
                  <Image
                    src={masterCard}
                    alt="image loading"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
              <div className="flex space-x-4 mb-6">
                <div className="bg-white rounded-md p-4 bg-cover">
                  <Image
                    src={bKash}
                    alt="image loading"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="bg-white rounded-md p-4 bg-cover">
                  <Image
                    src={nagad}
                    alt="image loading"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="bg-white rounded-md p-4 bg-cover">
                  <Image
                    src={masterCard}
                    alt="image loading"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-700 pt-6 text-center">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} 2025 busbooking. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
