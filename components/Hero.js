import Image from "next/image";

const Hero = () => {
  return (
    <div className="container mx-auto my-auto">
      <div className="select-none">
        <div className="mx-auto max-w-4xl py-30 sm:py-20 lg:py-30">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcement : Join Notion Fundamentals for FREE.{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Know more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex lg:flex-row items-center sm:flex-col sm:gap-5">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Hi 👋
                <br />
                <div className="gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Welcome to TheHarshWise</div> </h1>
                <br />
                <h2 className="font-semibold">We&apos;ll help you become <a className="line-through">Productive</a> Effecient & Proactive.</h2>
                <div class="flex py-6 items-center">
      <a href="#" class="-mx-3 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 bg-blue-600 text-white hover:bg-blue-500">Explore More!</a>
    </div>
            </div>
            <Image
                src="/assets/main-.png"
                width={500}
                height={500}
                alt="harsh mishra founder theharshwise png"
            ></Image>
            
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
    
  );
}

export default Hero;
