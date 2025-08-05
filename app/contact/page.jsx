"use client"
import Link from "next/link";
import { ArrowLeft, Mail, Phone, MapPin, Send } from "lucide-react";
import {
  FaXTwitter,
  FaLinkedin,
  FaSquareInstagram,
  FaSquareGithub,
} from "react-icons/fa6";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add your form submission logic here
  };

  return (
    <main className="min-h-screen p-4 lg:p-10 flex flex-col items-center font-poppins">
      <div className="w-full max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="flex items-center space-x-2 text-[#00ff00] hover:text-[#00cc00] transition duration-300"
          >
            <ArrowLeft size={20} />
            <span className="text-sm">Back to Home</span>
          </Link>
          <h1 className="text-lg font-bold text-center font-montserrat">
            Contact Me
          </h1>
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center w-full">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full items-start justify-center max-w-6xl">
          {/* Left Content - Contact Info */}
          <div className="w-full lg:w-2/5 p-2 lg:p-6">
            <h2 className="my-4 text-xl md:text-2xl text-[#00ff00]">
              Let's Connect
            </h2>
            <p className="my-4 text-sm text-justify leading-relaxed">
              I'm always open to discussing new opportunities, collaborating on exciting projects, 
              or simply having a conversation about technology and innovation. Feel free to reach out!
            </p>

            <div className="space-y-6 mt-8">
              <div className="flex items-center space-x-4">
                <div className="p-3 border border-white rounded-lg">
                  <Mail size={24} className="text-[#00ff00]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold">Email</h3>
                  <p className="text-xs text-gray-400">boluwatifelambe@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 border border-white rounded-lg">
                  <Phone size={24} className="text-[#00ff00]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold">Phone</h3>
                  <p className="text-xs text-gray-400">Available upon request</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 border border-white rounded-lg">
                  <MapPin size={24} className="text-[#00ff00]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold">Location</h3>
                  <p className="text-xs text-gray-400">Lagos, Nigeria</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-bold mb-4">Connect on Social Media</h3>
              <div className="flex space-x-4">
                <div className="bg-[#171717]/60 hover:bg-[#00ff00] rounded-full p-3 transition duration-300">
                  <Link href="https://twitter.com/Danibholie">
                    <FaXTwitter size={20} />
                  </Link>
                </div>
                <div className="bg-[#171717]/60 hover:bg-[#00ff00] rounded-full p-3 transition duration-300">
                  <Link href="https://www.instagram.com/lbd_codes/">
                    <FaSquareInstagram size={20} />
                  </Link>
                </div>
                <div className="bg-[#171717]/60 hover:bg-[#00ff00] rounded-full p-3 transition duration-300">
                  <Link href="https://www.linkedin.com/in/lambe-boluwatife-870b6136">
                    <FaLinkedin size={20} />
                  </Link>
                </div>
                <div className="bg-[#171717]/60 hover:bg-[#00ff00] rounded-full p-3 transition duration-300">
                  <Link href="https://github.com/lambeboluwatife">
                    <FaSquareGithub size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="w-full lg:w-3/5 p-2 lg:p-6">
            <h2 className="my-4 text-xl md:text-2xl">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-white rounded-lg focus:border-[#00ff00] focus:outline-none transition duration-300 text-sm"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-white rounded-lg focus:border-[#00ff00] focus:outline-none transition duration-300 text-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-white rounded-lg focus:border-[#00ff00] focus:outline-none transition duration-300 text-sm"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-transparent border border-white rounded-lg focus:border-[#00ff00] focus:outline-none transition duration-300 text-sm resize-none"
                  placeholder="Tell me about your project, idea, or just say hello..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 text-sm px-6 py-4 font-semibold bg-[#00ff00] text-black hover:bg-[#00cc00] transition duration-300 rounded-lg"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>

            <div className="mt-6 p-4 border border-gray-600 rounded-lg">
              <p className="text-xs text-gray-400 text-center">
                I typically respond within 24 hours. For urgent matters, 
                feel free to reach out on LinkedIn or Twitter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}