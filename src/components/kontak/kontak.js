import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const Kontak = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.preventDefault();
    const { name, email, message } = formData;
    const whatsappLink = `https://wa.me/628990656996?text=Nama:%20${name}%0AEmail:%20${email}%0APesan:%20${message}`;
    window.open(whatsappLink, "_blank");
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <div className="max-w-xl w-full mt-8 py-8 2xl:py-10 px-8 bg-black/30 rounded-2xl border border-secondary/30">
        <h2 className="text-2xl 2xl:text-3xl font-medium mb-4 text-center">
          Kontak Saya
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 2xl:mb-5">
            <label htmlFor="name" className="block text-sm 2xl:text-base">
              Nama:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full focus:outline-none focus:border-blue-500 bg-transparent border-b border-secondary p-1.5"
              required
            />
          </div>
          <div className="mb-4 2xl:mb-5">
            <label htmlFor="email" className="block text-sm 2xl:text-base">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full focus:outline-none focus:border-blue-500 bg-transparent border-b border-secondary p-1.5"
              required
            />
          </div>
          <div className="mb-4 2xl:mb-5">
            <label htmlFor="message" className="block text-sm 2xl:text-base">
              Pesan:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className="w-full focus:outline-none focus:border-blue-500 bg-transparent border-b border-secondary p-1.5"
              required
            ></textarea>
          </div>
          <div className="w-full text-end flex items-center justify-between gap-5">
            <FaWhatsapp
              size={30}
              className="text-secondary/30 pointer-events-none"
            />
            <button
              type="submit"
              className="bg-secondary/30 text-white px-6 py-2 rounded-full hover:bg-blue-600 focus:outline-none text-sm text-end"
            >
              Kirim Pesan
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Kontak;
