import Image from "next/image"

const Course = () => {
  return (
    <div className="flex flex-col gap-10 bg-slate-500 py-10">
    <p className="text-2xl font-semibold text-center text-black">📚 Our courses are perfect for you :</p>
<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div className="md:flex">
    <div className="md:shrink-0">
      <Image className="h-48 w-full object-cover md:h-full md:w-48" src="/assets/notion.png" alt="Modern building architecture" width={500} height={500}/>
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">FREE</div>
      <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Notion Fundamentals</a>
      <p className="mt-2 text-slate-500">Looking to learn Notion, and take a step towards making yourself Productive? </p>
    </div>
  </div>
</div>

<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div className="md:flex">
    <div className="md:shrink-0">
      <Image className="h-48 w-full object-cover md:h-full md:w-48" src="/assets/notion.png" alt="Modern building architecture" width={500} height={500}/>
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Paid</div>
      <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Pro Notion Guide</a>
      <p className="mt-2 text-slate-500">Want to become a Pro at Notion & Maximise your Productivity by building Systems? Along with Build a Revenue stream for you.</p>
    </div>
  </div>
</div>

<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div className="md:flex">
    <div className="md:shrink-0">
      <Image className="h-48 w-full object-cover md:h-full md:w-48" src="/assets/notion.png" alt="Modern building architecture" width={500} height={500}/>
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Paid</div>
      <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Productiwise : Leverage your Unfair Advantage</a>
      <p className="mt-2 text-slate-500">Staring your Journey and confused about how to stand out? This course is for you.</p>
    </div>
  </div>
</div>
</div>
)
}

export default Course