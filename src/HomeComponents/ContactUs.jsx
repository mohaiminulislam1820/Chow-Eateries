import React from 'react';

const ContactUs = () => {
    return (
        <section className="">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-6 text-4xl tracking-tight font-bold text-center ">Contact Us</h2>
                <p className="mb-10 lg:mb-16  text-center  text-gray-500"> We would love to hear from you! Whether you have a question, a comment, a suggestion, or a complaint, please feel free to contact us using the form below. We will get back to you as soon as possible. Thank you for choosing chow eateries!</p>

                <div>
                    <label htmlFor="email" className="block mb-2 font-medium ">Your email</label>
                    <input type="email" id="email" className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 mb-6" placeholder="email" required />
                </div>
                <div>
                    <label htmlFor="subject" className="block mb-2 font-medium ">Subject</label>
                    <input type="text" id="subject" className="block p-3 w-full text-sm  rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 mb-6" placeholder="Let us know how we can help you" required />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 font-medium text-gray-900 ">Your message</label>
                    <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 mb-10" placeholder="Leave your message ..."></textarea>
                </div>
                <button type="submit" className="py-3 px-5 font-bold text-yellow-200 bg-slate-800 rounded-lg">Send message</button>

            </div>
        </section>
    );
};

export default ContactUs;