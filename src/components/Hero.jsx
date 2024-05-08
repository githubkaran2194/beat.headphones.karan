/* eslint-disable @next/next/no-img-element */
export default function Hero() {
    const year = new Date().getFullYear();
    return (
      <div className="flex items-center justify-center text-center relative overflow-hidden min-h-[70vh] sm:min-h-screen 2xl:sm:min-h-[70vh]">
        <div data-aos="fade-up">
          <h1 className="text-[36vw] xl:text-[450px] font-extrabold opacity-10">
            {year}
          </h1>
        </div>
        <img
        alt="img"
          data-aos="fade-down"
          src="https://beatsheadphone.vercel.app/1.jpg"
          className="absolute left-0 right-0 ml-auto mr-auto w-[600px] animate"
        />
      </div>
    );
  }