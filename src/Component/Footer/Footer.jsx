import React from "react";

function Footer() {
  return (
    <>
      <footer
        className="w-full  min-h-[400px] bg-cover bg-[#08272c] font-outfit px-8 pt-40 text-white"
        style={{
          backgroundImage: "url('public/Images/Header pic.avif')",
        }}
      >
        <div className="mx-auto max-w-[1320px]">
          <div className="flex  gap-36">
            <div className="lg:pr-8">
              <img
                src="public/Images/Logo.svg"
                alt="Logo"
                className="inline-flex items-center"
              ></img>

              <p className="mt-6 text-[16px] max-w-[280px] tracking-wider leading-[1.8] text-[#8d989a]">
                Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis
                eget amet ut tristique cras.
              </p>
            </div>
            {/* Footer Content */}
            <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-4">
              {/* Logo & Description */}

              {/* Quick Links */}
              <div>
                <h3 className="text-[19px] font-semibold text-white">
                  Quick links
                </h3>

                <ul className="mt-7 space-y-5 text-[16px] text-[#8d989a]">
                  <li>
                    <a
                      href="#"
                      className="transition-colors hover:text-yellow-500"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-colors hover:text-yellow-500"
                    >
                      Events
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-colors hover:text-yellow-500"
                    >
                      Career
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-colors hover:text-yellow-500"
                    >
                      Instructor
                    </a>
                  </li>
                </ul>
              </div>

              {/* Popular Courses */}
              <div>
                <h3 className="text-[19px] font-semibold text-white">
                  Popular courses
                </h3>

                <ul className="mt-7 space-y-5 text-[16px] text-[#8d989a]">
                  <li>
                    <a
                      href="#"
                      className="transition-colors hover:text-yellow-500"
                    >
                      Finance
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-colors hover:text-yellow-500"
                    >
                      Management
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-colors hover:text-yellow-500"
                    >
                      Design
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-colors hover:text-yellow-500"
                    >
                      Web development
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-[19px] font-semibold text-white">
                  Company
                </h3>

                <ul className="mt-7 space-y-5 text-[16px] text-[#8d989a]">
                  <li>
                    <a
                      href="#"
                      className="transition-colors hover:text-yellow-500"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-colors hover:text-yellow-500"
                    >
                      Courses
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-colors hover:text-yellow-500"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-colors hover:text-yellow-500"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-colors hover:text-yellow-500"
                    >
                      License
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-colors hover:text-yellow-500"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-colors hover:text-yellow-500"
                    >
                      404
                    </a>
                  </li>
                </ul>
              </div>

              {/* CMS */}
              <div>
                <h3 className="text-[19px] font-semibold text-white">CMS</h3>

                <ul className="mt-7 space-y-5 text-[16px] text-[#8d989a]">
                  <li>
                    <a
                      href="#"
                      className="transition-colors hover:text-yellow-500"
                    >
                      Course details
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-colors hover:text-yellow-500"
                    >
                      Instructor details
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-colors hover:text-yellow-500"
                    >
                      Blog details
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[#526064] py-5 text-[14px] uppercase tracking-[0.2px] text-[#8d989a] md:flex-row md:items-center">
            <p>
              Design by{" "}
              <span className="font-semibold text-white">
                Radiant Templates
              </span>
            </p>

            <p>
              Powered by{" "}
              <span className="font-semibold text-white">Webflow</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
