import { useState } from "react";

function Contacto() {

    const [ contacto , setContacto ] = useState(false);
    
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-pink-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        className="absolute inset-0"
                        title="map"
                        marginHeight="0"
                        marginWidth="0"
                        scrolling="no"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.78601581462!2d-0.17137358434257302!3d51.517141679636744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ab48c2727c3%3A0xc1bd02c306e7c1b6!2s27%20Sussex%20Gardens%2C%20Tyburnia%2C%20London%20W2%201UD!5e0!3m2!1ses!2suk!4v1653243562221!5m2!1ses!2suk" 
                        width="100%"
                        height="100%"
                        frameBorder="0"
                    ></iframe>
                    <div className="bg-white relative flex flex-wrap py-4 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-bold text-blue-900 tracking-widest text-xs">
                                TEAMWORK SPORTY
                            </h2>
                            <p className="mt-1">
                               Marylebond, 27 Suxsex Gardens, Londres.
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                Email
                            </h2>
                            <a
                                href="mailto:gsolotun@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                                className="text-indigo-500 leading-relaxed"
                            >
                                temaworksport@contacto.com
                            </a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                                WhatsApp
                            </h2>
                            <a
                                href="https://api.whatsapp.com/send/?phone=5491126138166"
                                target="_blank"
                                rel="noreferrer"
                                className="text-green-500 leading-relaxed"
                            >
                                +44 77 5960 4580
                            </a>
                        </div>
                    </div>
                </div>
                
                {contacto 
                ?
                    <div className="llg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 justify-center items-center">Consulta enviada</div>
                :
                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                            Contáctenos
                        </h2>
                        <p className="leading-relaxed mb-5 text-gray-600">
                            Completa el formulario y resivi ofertas semanales.
                        </p>
                        <div className="relative mb-4">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                placeholder="Nombre*"
                                />
                        </div>
                        <div className="relative mb-4">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                placeholder="Email*"
                                />
                        </div>
                        <div className="relative mb-4">
                            <textarea
                                id="message"
                                name="message"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                placeholder="Mensaje*"
                                ></textarea>
                        </div>
                        <button onClick={() => {setContacto(true)}} className=" border-0  px-5 py-1 mx-auto mt-10 focus:outline-none bg-blue-300 hover:bg-blue-800 hover:text-white rounded-full text-base md:mt-0 text-lg font-bold">
                            Enviar consulta
                        </button>
                    </div>
            }

            </div>
        
        </section>
    );
}

export default Contacto;
