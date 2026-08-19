import React from "react";

function CTA() {
  return (
    <>
      {/* CTA */}
      <section className="relative z-10 mx-4 -mb-[100px] rounded-[4px] bg-[#ffb511] px-8 py-14 sm:px-12 lg:px-[100px]">
        <div className="mx-auto flex max-w-[1190px] flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          {/* Heading */}
          <h2 className="max-w-[390px] text-[32px] font-semibold leading-[1.25] tracking-[-1px] text-[#09282d] sm:text-[36px]">
            Are you ready to start
            <br />
            your journey?
          </h2>

          {/* Buttons */}
          <div className="flex w-full flex-col gap-4 sm:flex-row sm:w-auto">
            <a
              href="#"
              className="flex h-[50px] w-full items-center justify-center rounded-[4px] border border-transparent bg-[#09282d] px-8 text-[15px] font-medium text-white transition-all duration-300 hover:border-[#09282d] hover:bg-[#ffb511] hover:text-[#09282d] sm:w-[202px]"
            >
              Browse Courses
            </a>

            <a
              href="#"
              className="flex h-[50px] w-full items-center justify-center rounded-[4px] border border-[#09282d] bg-transparent px-8 text-[15px] font-medium text-[#09282d] transition-colors duration-300 hover:bg-[#09282d] hover:text-white sm:w-[225px]"
            >
              Become A Teacher
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default CTA;
