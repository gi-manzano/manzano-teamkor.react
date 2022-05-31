import React from "react";

const Finalizado = () => {
    return (
        <>
        
            <div className="flex text-gray-600 body-font justify-center">
                <div className="px-auto py-24 mx-auto">
                    <div className="flex   -mb-10 text-center">
                        <div className="mb-10 px-4">
                            <div className="rounded-lg h-64 overflow-hidden">
                                <img
                                    alt="content"
                                    className="object-cover object-center object-scale-down h-full w-full"
                                    src="https://blog.ventiapp.com/wp-content/uploads/2019/10/9.png"
                                />
                            </div>
                            <h2 className="title-font text-2xl font-medium text-sky-900 mt-6 mb-3">
                                Gracias por tu compra!!
                            </h2>
                            <p className="text-2xl font-medium text-sky-900 mt-6 mb-3">
                                El envío esta en camino, no olvides revisar tu E-mail para hacer el seguimiento!!!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Finalizado;