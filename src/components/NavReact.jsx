import { useState } from "react";
import '../styles/global.css'

const navbar = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [menuOne, setMenuOne] = useState(false);
  return (
    <>
    <section>
      <nav className="z-50 border-b border-yellow-500 text-white mb-10 font-inter mx-auto h-auto w-full max-w-screen-2xl lg:relative lg:top-0">
        <div className="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:py-4">
          <a href="/">
          <svg className="md:w-80" xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24"><path fill="#f4d000" d="M5.37 20q-.553 0-.942-.387q-.39-.387-.39-.94v-1.727l3.54-3.146V20zm3.053 0v-3.538h7.154V20zm8 0v-7.267L12.61 9.366l2.679-2.368l4.23 3.744q.212.206.327.46q.116.255.116.543v6.923q0 .553-.387.943t-.94.389zM4.039 15.788v-4.03q0-.287.115-.551t.327-.465l6.635-5.88q.2-.181.424-.259q.225-.078.461-.078t.46.078t.424.259l1.769 1.582z"/></svg>
          </a>
          <div
            className={`mt-14 flex flex-col space-y-8 lg:mt-0 lg:flex lg:flex-row lg:space-x-1 lg:space-y-0 ${isOpen ? "" : "hidden"}`}
          >
                        <a
              href="/"
              className="font-inter rounded-lg lg:px-6 lg:py-4 lg: lg:hover:text-yellow-500"
            >
              Home
            </a>
            <a
              href="/kontakt"
              className="font-inter rounded-lg lg:px-6 lg:py-4 lg: lg:hover:text-yellow-500"
            >
              Contact
            </a>
            <div className="relative flex flex-col">
              <button
                onClick={() => setMenuOne(!menuOne)}
                className={`flex flex-row rounded-lg lg:px-6 lg:py-4 lg: lg:hover:text-yellow-500 ${menuOne ? "text-yellow-500 lg:border lg:border-yellow-800" : "text-white lg:border lg:border-yellow-500"}`}
              >
                More
                <svg
                  className={`w-6 h-6 fill-current transition-transform duration-300 ${menuOne ? "rotate-180" : "rotate-0"}`}
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
                </svg>
              </button>
              {menuOne && (
                <div className="flex w-md flex-col rounded-lg px-5 py-5 lg:absolute lg:top-16 lg:right-1 lg:w-[750px] navBg lg:flex-row lg:flex-wrap lg:py-7 xl:w-[550px]">
                  {/* ITEM */}
                  <a
                    className="text-white hover:text-yellow-500 lg:hover:scale-105 transition bg-gray-800 flex grow flex-col px-5 py-5  lg:basis-60 xl:px-8 border border-black hover:border hover:border-yellow-500"
                    href="/homes"
                  >
                    {/* ICON */}
                    <div className="relative bg-gray-800 w-12 p-1 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24"><path fill="#f4d000" d="M5.37 20q-.553 0-.942-.387q-.39-.387-.39-.94v-1.727l3.54-3.146V20zm3.053 0v-3.538h7.154V20zm8 0v-7.267L12.61 9.366l2.679-2.368l4.23 3.744q.212.206.327.46q.116.255.116.543v6.923q0 .553-.387.943t-.94.389zM4.039 15.788v-4.03q0-.287.115-.551t.327-.465l6.635-5.88q.2-.181.424-.259q.225-.078.461-.078t.46.078t.424.259l1.769 1.582z"/></svg>
                    </div>
                    {/* TEXT */}
                    <h2 className="font-inter mb-1 mt-5 text-lg font-medium">
                      Homes
                    </h2>
                  </a>
                  {/* ITEM */}
                  <a
                    className="text-white hover:text-yellow-500 lg:hover:scale-105 transition flex grow flex-col px-5 py-5 bg-gray-800 lg:basis-60 xl:px-8 border border-black hover:border hover:border-yellow-500"
                    href="/team"
                  >
                    {/* ICON */}
                    <div className="relative bg-gray-800 w-12 p-1 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24"><path fill="#f4d000" d="M5.37 20q-.553 0-.942-.387q-.39-.387-.39-.94v-1.727l3.54-3.146V20zm3.053 0v-3.538h7.154V20zm8 0v-7.267L12.61 9.366l2.679-2.368l4.23 3.744q.212.206.327.46q.116.255.116.543v6.923q0 .553-.387.943t-.94.389zM4.039 15.788v-4.03q0-.287.115-.551t.327-.465l6.635-5.88q.2-.181.424-.259q.225-.078.461-.078t.46.078t.424.259l1.769 1.582z"/></svg>
                    </div>
                    {/* TEXT */}
                    <h2 className="font-inter mb-1 mt-5 text-lg font-medium">
                      Our Team
                    </h2>
                  </a>
                </div>
              )}
            </div>
          </div>
          <button
            className="absolute right-5 lg:hidden"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <svg className="mt-3" xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><g fill="none" stroke="#ffd000" stroke-dasharray="16" stroke-dashoffset="16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 5h14"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0"/></path><path d="M5 12h14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="16;0"/></path><path d="M5 19h14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="16;0"/></path></g></svg>
          </button>
        </div>
      </nav>
    </section>
    </>
  )};

  export default navbar;