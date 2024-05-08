/* eslint-disable @next/next/no-img-element */

function SoloPro() {
    return (
        <div className="overflow-hidden" id="product">
            <div className="w-full flex items-center justify-center flex-col text-center" >
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-700">Solo Pro</h1>
                <p className="w-full sm:w-96 mt-5 font-medium text-gray-700">
                    The only Headset you&apos;ll ever need.
                </p>
            </div>
            <div className="flex items-center justify-center py-10 " data-aos="fade-up">
                <div className="rounded-xl shadow-xl hover:shadow-2xl transition cursor-pointer overflow-hidden max-w-3xl ">
                    <div className="md:flex">
                        <div className="md:shrink-0">
                            <img src="https://beatsheadphone.vercel.app/person2.png" alt="img" className="h-80 w-full object-cover md:h-full md:w-80" />
                        </div>

                        <div className="text-center grid grid-cols-1 sm:grid-cols-2">
                            <div className="flex flex-col items-center justify-center border p-5">
                                <span className="text-2xl">🛜</span>
                                <p className="mt-3 font-medium cursor-pointer text-gray-700">Wireless Connectivity</p>
                            </div>
                            <div className="flex flex-col items-center justify-center border p-5">
                                <span className="text-2xl">📂</span>
                                <p className="mt-3 font-medium cursor-pointer text-gray-700">Foldable Design</p>
                            </div>
                            <div className="flex flex-col items-center justify-center border p-5">
                                <span className="text-2xl">⚖️</span>
                                <p className="mt-3 font-medium cursor-pointer text-gray-700">Product Weight</p>
                            </div>
                            <div className="flex flex-col items-center justify-center border p-5">
                                <span className="text-2xl">😊</span>
                                <p className="mt-3 font-medium cursor-pointer text-gray-700">Microphone feature</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SoloPro
