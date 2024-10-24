import { useState } from "react";
import '../styles/global.css'


const Houses = () => {

const [active, setActive] = useState("Homes");
  return (
    <section>
      {/* Container */}
      <div className="text-white mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="flex flex-col items-center">
          {/* Heading Div */}
          <div className="mb-8 max-w-3xl text-center">
            <h2 className="mb-4 mt-6 text-3xl font-bold md:text-5xl">
              Our Homes
            </h2>
            <p className="mx-auto mt-4 text-gray-500">
              These are just some of our high quality Homes!
            </p>

            {/* Select */}
            <div className="relative mx-auto flex-col md:flex-row mt-8 flex w-fit cursor-pointer bg-gray-100 md:mt-12">
              <div
                onClick={() => setActive("Homes")}
                className={`relative px-5 py-2 ${active === "Homes" ? "btnHome1 text-white" : "text-gray-500"}`}
              >
                Homes
              </div>
            </div>
          </div>
          {/* Blog Content */}
          <div              className={`grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ${active === "Homes" ? "grid" : "hidden"}`}
>
            
            {/* Blog Item */}
            <a
              href="/"
              className={`border border-yellow-500 p-5 max-w-full flex-col gap-4 rounded-3xl px-4 md:px-2  flex`}

            >
              <img
                alt=""
                src="/home1.jpg"
                className="inline-block h-60 w-full rounded-2xl object-cover"
              />
              <div className="flex h-full w-full flex-col items-start justify-around px-0 py-4">
                <div className="mb-2 flex flex-col items-start gap-2">
                  <div className="rounded-md bg-blue-50 text-blue-600 font-semibold px-2 py-1.5">
                    <p>50.000$ Once</p>
                  </div>
                  <p className="text-lg font-bold md:text-2xl">Location: Ibiza</p>
                </div>
                <div className="flex items-center gap-11 sm:flex-row">
                <div className="flex items-center">
                    <p className="mr-3">Owner:</p>
					<img src="/woman.png" alt="Layla kruz" className="mr-2 inline-block rounded-full object-cover h-7 w-7 sm:h-7"/>
					<p className="text-sm font-bold">Jaine hawks</p>
				</div>
				<div className="flex items-center">
				  <p className="mr-2 text-sm font-bold bg-blue-500 p-2 rounded-full hidden sm:flex">Mid Rated Seller</p>
				</div>
			  </div>
              </div>
            </a>
            {/* Blog Item */}
            <a
              href="/"
              className={`border border-yellow-500 p-5 max-w-full flex-col gap-4 rounded-3xl px-4 md:px-2  flex`}
            >
              <img
                alt=""
                src="/home2.jpg"
                className="inline-block h-60 w-full rounded-2xl object-cover"
              />
              <div className="flex h-full w-full flex-col items-start justify-around px-0 py-4">
                <div className="mb-2 flex flex-col items-start gap-2">
                  <div className="rounded-md bg-blue-50 text-blue-600 font-semibold px-2 py-1.5">
                    <p>199.999$ Once</p>
                  </div>
                  <p className="text-lg font-bold md:text-2xl">Location: Bali</p>
                </div>
                <div className="flex items-center gap-11 sm:flex-row">
                <div className="flex items-center">
                    <p className="mr-3">Owner:</p>
					<img src="/woman.png" alt="Layla kruz" className="mr-2 inline-block rounded-full object-cover h-7 w-7 sm:h-7"/>
					<p className="text-sm font-bold">Alex Stone</p>
				</div>
				<div className="flex items-center">
				  <p className="mr-2 text-sm font-bold bg-yellow-500 p-2 rounded-full hidden sm:flex">Top Rated Seller</p>
				</div>
			  </div>
              </div>
            </a>
            {/* Blog Item */}
            <a
              href="/"
              className={`border border-yellow-500 p-5 max-w-full flex-col gap-4 rounded-3xl px-4 md:px-2  flex`}
            >
              <img
                alt=""
                src="/home3.jpg"
                className="inline-block h-60 w-full rounded-2xl object-cover"
              />
              <div className="flex h-full w-full flex-col items-start justify-around px-0 py-4">
                <div className="mb-2 flex flex-col items-start gap-2">
                  <div className="rounded-md bg-blue-50 text-blue-600 font-semibold px-2 py-1.5">
                    <p>250.999$ Once</p>
                  </div>
                  <p className="text-lg font-bold md:text-2xl">Location: Mexico</p>
                </div>
                <div className="flex items-center gap-11 sm:flex-row">
				<div className="flex items-center">
                    <p className="mr-3">Owner:</p>
					<img src="/woman.png" alt="Layla kruz" className="mr-2 inline-block rounded-full object-cover h-7 w-7 sm:h-7"/>
					<p className="text-sm font-bold">Cole Doe</p>
				</div>
				<div className="flex items-center">
				  <p className="mr-2 text-sm font-bold bg-yellow-500 p-2 rounded-full hidden sm:flex">Top Rated Seller</p>
				</div>
			  </div>
              </div>
            </a>
          </div>
                                {/* Button */} <a href="#" className="mt-10 rounded-md bg-black px-6 py-3 font-semibold text-white"> See More... </a>
        </div>
        
      </div>
      
    </section>
  )};

  export default Houses;