function BgImage() {
  return (
<div className="p-10">
<div className="my-10 w-full h-96 rounded-xl overflow-hidden relative" data-aos="fade-up">
<img src="https://beats.kushalgohil.com/person.jpg" className="h-full w-full object-cover rotate-180" />
<div className="absolute bottom-0 backdrop-blur-xl left-0 m-6 flex items-center justify-center cursor-pointer p-3 rounded-lg">
  <div className="mr-2 bg-red-500 p-2 rounded-full">▶️</div>
  <div className="">
    <p className="font-bold text-xl">WATCH</p>
    <h1 className="font-medium text-xl">Intro Video</h1>
  </div>
</div>
</div>
</div>
  )
}

export default BgImage
