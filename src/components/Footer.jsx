export default function Footer() {
  return (
  
    <div className="border-t-2 my-20 border-gray-300">
    <div className="flex flex-col mt-10 justify-center items-center gap-3" data-aos="fade-left">
    <h1 className="text-4xl sm:text-5xl font-bold text-gray-700">Say hello to us</h1>
    <div className="relative">
    <input
      type="text"
      placeholder="Enter your email"
      className="mt-5 border-2 py-3 pl-7 pr-12 sm:pr-40 rounded-full outline-none bg-white shadow-lg"
    />
    <button className="absolute top-2 right-2 py-1 mt-5 px-4 rounded-full border-2 border-orange-600 bg-orange-600 text-white active:bg-white active:text-orange-600 shadow-lg">
      Send
    </button>
  </div>
    </div>
    <div
        className=" flex justify-center items-center flex-col xl:flex-row py-9"
        style={{
          fontSize: "17px",
        }}
      > 
        <div className=" flex justify-center items-center w-full xl:w-1/3 mt-3 xl:mt-0">
          <p>
            <a href="#">About us</a> &nbsp; | &nbsp;
            <a href="#">Privacy Policy</a> &nbsp; | &nbsp;
            <a href="#">Contact us</a>
          </p>
        </div>

        <div className=" flex justify-center items-center w-full xl:w-1/3 mt-5 xl:mt-0">
          <p className="opacity-50">Copyright &#169;  karan</p>
        </div>

        <div className=" flex justify-center xl:justify-end items-center w-full xl:w-1/3 mt-10 xl:mt-0 space-x-5 opacity-90">
          <a href="#" target="_blank" rel="noreferrer">
         <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="#" target="_blank" rel="noreferrer">
       <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
   
  )
}
