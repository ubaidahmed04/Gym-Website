"use client"
import React, { useState } from 'react';

import contactImg from "@/public/Images/contact.jpg"
import Image from 'next/image';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <section className="font-[sans-serif] max-w-6xl mx-auto relative bg-darkBlue shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl overflow-hidden mt-4">
            <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-orange"></div>
            <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-orange"></div>

            <div className="grid md:grid-cols-2 gap-8 py-8 px-6">
                <div className="text-center flex flex-col items-center justify-center">
                    <Image
                        height={200}
                        width={400}
                        src={contactImg}
                        className="shrink-0 w-5/6"
                        alt="Contact Us"
                    />
                </div>

                <form onSubmit={handleSubmit} className="rounded-tl-3xl rounded-bl-3xl">
                    <h2 className="text-2xl text-orange font-bold text-center mb-6">Contact us</h2>
                    <div className="max-w-md mx-auto space-y-3 relative">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="w-full bg-gray-100 rounded-md py-3 px-4 text-sm outline-orange focus-within:bg-transparent"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full bg-gray-100 rounded-md py-3 px-4 text-sm outline-orange focus-within:bg-transparent"
                        />
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone No."
                            className="w-full bg-gray-100 rounded-md py-3 px-4 text-sm outline-orange focus-within:bg-transparent"
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            rows="6"
                            className="w-full bg-gray-100 rounded-md px-4 text-sm pt-3 outline-orange focus-within:bg-transparent"
                        ></textarea>

                        <button
                            type="submit"
                            className="text-white w-full relative bg-orange hover:bg-darkBlue  rounded-md text-sm px-6 py-3 !mt-6"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="#fff" className="mr-2 inline" viewBox="0 0 548.244 548.244">
                                <path
                                    fillRule="evenodd"
                                    d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;