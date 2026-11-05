import React, { useState } from "react";
import Hero from "../../Components/Hero";
import contact from "../../assets/images/contact.png";
import api from "../../helpers/api";
import fb from "../../assets/icons/fb2.png";
import x from "../../assets/icons/insta2.png";
import tiktok from "../../assets/icons/x2.png";
import instagram from "../../assets/icons/tiktok2.png";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setSuccess(false);
      setError(false);

      await api.post("/contact", { name, email, phone, message });

      setSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (erorr) {
      console.log("error", erorr);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Hero
        bg={contact}
        title="Connected Globally. Available Locally."
        desc="With experts positioned in the world’s most influential markets, we are never more than a conversation away. Reach out to our team to experience a new standard of real estate advisory."
        btn={false}
        btnContent="View Units"
        icons={false}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-20 py-16">

       
        <div>
          <h2 className="font-heading text-3xl font-bold">Contact Information</h2>

          <p className="mt-5 text-lg font-lato text-gray-500  leading-6">
            Our team is available for private consultations and off-market
            inquiries. We operate with absolute discretion to ensure your real
            estate objectives are met with precision.
          </p>

          <div className="mt-8 font-lato text-lg space-y-4 text-[#8E1616]">
            <p>📍 Minusio, Lake Maggiore, Switzerland — ref. LOC1771</p>
            <p>✉️ Grand.Atlas.Support@gmail.com</p>
            <p>📱 01247859622</p>
            <p>📞 035987124</p>
          </div>

          <h3 className="mt-10 font-serif text-lg font-semibold text-gray-500">
            Follow us on social media
          </h3>

          <div className="flex gap-3 mt-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#9B2C2C] hover:bg-gray-100 transition">
              <img src={fb} alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#9B2C2C] hover:bg-gray-100 transition">
              <img src={x} alt="X" className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#9B2C2C] hover:bg-gray-100 transition">
              <img src={instagram} alt="Instagram" className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#9B2C2C] hover:bg-gray-100 transition">
              <img src={tiktok} alt="TikTok" className="w-5 h-5" />
            </a>
          </div>

          <h3 className="mt-10 font-serif text-lg font-semibold text-gray-500">
            Working Hours
          </h3>

          <div className="mt-4 space-y-2 text-sm font-lato">
            <div className="grid grid-cols-[130px_1fr]">
              <span className="text-[#9B2C2C]">Saturday :</span>
              <span className="text-gray-500">9:00AM - 5:00 PM</span>
            </div>
            <div className="grid grid-cols-[130px_1fr]">
              <span className="text-[#9B2C2C]">Sunday :</span>
              <span className="text-gray-500">9:00AM - 5:00 PM</span>
            </div>
            <div className="grid grid-cols-[130px_1fr]">
              <span className="text-[#9B2C2C]">Monday :</span>
              <span className="text-gray-500">9:00AM - 5:00 PM</span>
            </div>
            <div className="grid grid-cols-[130px_1fr]">
              <span className="text-[#9B2C2C]">Tuesday :</span>
              <span className="text-gray-500">9:00AM - 5:00 PM</span>
            </div>
            <div className="grid grid-cols-[130px_1fr]">
              <span className="text-[#9B2C2C]">Wednesday :</span>
              <span className="text-gray-500">9:00AM - 5:00 PM</span>
            </div>
          </div>
        </div>

        
        <form
          onSubmit={handleSubmit}
          className="border border-gray-100 rounded-2xl shadow-md p-8 bg-white"
        >
          <h2 className="font-heading text-2xl font-bold mb-8">Send us a message</h2>

          <label className="block font-heading text-sm font-semibold mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full h-12 px-4 rounded-lg border border-gray-200 bg-gray-50 outline-none focus:border-[#9B2C2C]"
          />

          <label className="block font-heading text-sm font-semibold mt-6 mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full h-12 px-4 rounded-lg border border-gray-200 bg-gray-50 outline-none focus:border-[#9B2C2C]"
          />

          <label className="block font-heading text-sm font-semibold mt-6 mb-2">Phone</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full h-12 px-4 rounded-lg border border-gray-200 bg-gray-50 outline-none focus:border-[#9B2C2C]"
          />

          <label className="block font-heading text-sm font-semibold mt-6 mb-2">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full h-40 p-4 resize-none rounded-lg border border-gray-200 bg-gray-50 outline-none focus:border-[#9B2C2C]"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-8 w-full bg-[#B03A2E] hover:bg-[#8F2E24] text-white font-serif rounded-md py-3 transition disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="mt-4 text-center text-sm text-green-600">
              Your message has been sent successfully.
            </p>
          )}

          {error && (
            <p className="mt-4 text-center text-sm text-red-500">
              Something went wrong. Please try again.
            </p>
          )}
        </form>

      </div>
    </>
  );
}