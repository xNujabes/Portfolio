import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const [formData] = useState({
        message: "",
        email: "",
    });


    function sendEmail(e : any) {
        e.preventDefault();
        emailjs
            .send(
                "service_19cb7jx",
                "template_n7ekmq9",
                formData,
                "O8MXPRf5nN23jhVOS"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setEmailSubmitted(true);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    }

    return (
        <section
            id="contact"
            className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
        >
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div className="z-10">
                <h5 className="text-xl font-bold text-white my-2">
                    Contactez-moi !
                </h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    Vous avez un projet ou vous souhaitez discuter de quelque chose ? Joignez moi ici.
                </p>
                <div className="socials flex flex-row gap-2">

                </div>
            </div>
            <div>
                {emailSubmitted ? (
                    <p className="text-green-500 text-sm mt-2">
                        Email envoyé !
                    </p>
                ) : (
                    <>
                        <form className="flex flex-col" onSubmit={sendEmail}>
                            <div className="mb-6">
                                <label
                                    htmlFor="email"
                                    className="text-white block mb-2 text-sm font-medium"
                                >
                                    Votre mail
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    id="email"
                                    required
                                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                    placeholder="votre@mail.com"/>
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="objet"
                                    className="text-white block text-sm mb-2 font-medium"
                                >
                                    Objet
                                </label>
                                <input
                                    name="objet"
                                    type="text"
                                    id="objet"
                                    required
                                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                    placeholder="Objet"/>
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="message"
                                    className="text-white block text-sm mb-2 font-medium"
                                >
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                    placeholder="Message"/>
                            </div>
                            <button
                                type="submit"
                                className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                            >
                                Envoyez Message
                            </button>
                        </form>
                    </>
                )}
            </div>
        </section>
    );
};


export default EmailSection