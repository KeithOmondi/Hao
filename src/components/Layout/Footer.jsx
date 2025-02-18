
import { FaFacebook, FaTwitter, FaLinkedin, FaTiktok } from "react-icons/fa";


const Footer = () => {
    return (
        <section className="relative py-20 bg-blue-950 text-white overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-0 w-48 h-48 bg-blue-800 rounded-full opacity-10"></div>
                <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-700 rounded-full opacity-20"></div>
                <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-blue-600 rounded-full opacity-10"></div>
            </div>
            <div className="mx-auto px-6 flex flex-col lg:flex-row justify-between gap-8">
                <div className="flex flex-col space-y-4 w-1/4 bg-blue-950 p-4">
                    <h4 className="font-semibold text-white">Useful Links</h4>
                    <ul className="space-y-1">
                        <li><a href="/home" className="hover:text-blue-300 text-white cursor-pointer">Home</a></li>
                        <li><a href="/about" className="hover:text-blue-300 text-white cursor-pointer">About Us</a></li>
                        <li><a href="/services" className="hover:text-blue-300 text-white cursor-pointer">Services</a></li>
                        <li><a href="/contact" className="hover:text-blue-300 text-white cursor-pointer">Contact</a></li>
                    </ul>
                </div>


                {/* About Us Section */}
                <div className="flex flex-col space-y-4 w-2/4">
                    <h4 className="font-semibold">About Us</h4>
                    <p className="text-sm">
                        We are committed to making the process of finding homes easy and stress-free. Our mission is to help you find the perfect space for your needs.
                    </p>
                </div>

                {/* Connect with Us Section */}
                <div className="flex flex-col space-y-4 w-1/4">
                    <h4 className="font-semibold">Connect with Us</h4>
                    <div className="flex flex-col items-start gap-6">
                        <div className="flex items-center justify-start gap-2">
                            <span className="font-semibold">Call:</span>
                            <span>(123) 456-7890</span>
                        </div>
                        <div className="flex items-center justify-start gap-2">
                            <span className="font-semibold">Message:</span>
                            <span>(123) 456-7890</span>
                        </div>
                        <div className="flex items-center justify-start gap-2">
                            <span className="font-semibold">Email:</span>
                            <span>info@haochapchap.com</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">    <div className="flex items-center gap-4 mt-4 bg-white p-3 justify-center rounded-full">
                        <FaFacebook className="text-blue-600 text-2xl hover:text-blue-800" />
                    </div>
                        <div className="flex items-center gap-4 mt-4 bg-white p-3 justify-center rounded-full">  <FaTwitter className="text-blue-400 text-2xl hover:text-blue-600" /></div>

                        <div className="flex items-center gap-4 mt-4 bg-white p-3 justify-center rounded-full">
                            <FaTiktok className="text-black text-2xl hover:text-gray-700" /></div>
                        <div className="flex items-center gap-4 mt-4 bg-white p-3 justify-center rounded-full">
                            <FaLinkedin className="text-blue-700 text-2xl hover:text-blue-900" /></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Footer;
