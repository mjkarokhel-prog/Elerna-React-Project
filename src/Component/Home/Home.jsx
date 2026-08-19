import { useState, useEffect, useRef } from "react";
import React from "react";
import { categories } from "./Homescript";
import courses from "./Homescript";
import { extraCourses } from "./Homescript";
import { course } from "./Homescript";

function CountUp({ end, suffix = "", duration = 1500, start }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;

    function tick(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setValue(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [start, end, duration]);

  return (
    <span>
      {value}
      {suffix}
    </span>
  );
}

// Renders 5 stars, filled based on rating value
function StarRating({ rating, reviews }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            viewBox="0 0 20 20"
            className={`h-4 w-4 ${
              star <= Math.round(rating) ? "fill-amber-400" : "fill-slate-300"
            }`}
          >
            <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.9l-5.2 2.61.99-5.79-4.21-4.1 5.82-.85L10 1.5z" />
          </svg>
        ))}
      </div>
      <span className="text-sm font-medium text-slate-700">
        {rating.toFixed(2)}
      </span>
      <span className="text-sm text-slate-400">({reviews})</span>
    </div>
  );
}

function Home() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-[780px] overflow-hidden bg-[#06272b] bg-cover bg-center text-white
  sm:min-h-[800px] lg:min-h-[780px]"
        style={{
          backgroundImage: "url('public/Images/Hero Background (1).avif')",
        }}
      >
        <div className="relative mx-auto mt-28 h-[780px] max-w-6xl sm:h-[800px] lg:h-[750px]">
          {/* ================= BLUE CIRCLE ================= */}
          <img
            src="public/Images/Blue Circle.svg"
            alt=""
            className="absolute left-[110px] top-[108px] z-20 w-8
      sm:left-[150px] sm:top-[115px]
      lg:-left-[20px] lg:top-[130px]"
          />

          {/* ================= YELLOW DOT LEFT ================= */}
          <img
            src="public/Images/Yellow Dot.svg"
            alt=""
            className="absolute left-[140px] top-[205px] z-20 w-2
      sm:left-[170px] sm:top-[215px]
      lg:left-[10px] lg:top-[220px]"
          />

          {/* ================= YELLOW DOT CENTER ================= */}
          <img
            src="public/Images/Yellow Dot.svg"
            alt=""
            className="absolute left-[565px] top-[345px] z-20 w-4
      sm:left-[620px] sm:top-[355px]
      lg:left-[530px] lg:top-[385px]"
          />

          {/* ================= YELLOW MOON ================= */}
          <img
            src="public/Images/Half Moon.svg"
            alt=""
            className="absolute left-[45px] top-[320px] z-20 h-[210px] w-auto
      sm:left-[70px] sm:top-[325px] sm:h-[240px]
      lg:-left-[60px] lg:top-[200px] lg:h-[260px]"
          />

          {/* ================= GIRL ================= */}
          <img
            src="public/Images/AI Girl.webp"
            alt=""
            className="absolute left-[-80px] top-[15px] z-10 h-[610px] w-[610px] object-contain
      sm:left-[-55px] sm:top-[15px] sm:h-[630px] sm:w-[630px]
      lg:left-[-80px] lg:top-[15px] lg:h-[650px] lg:w-[650px]"
          />

          {/* ================= ACHIEVEMENT CARD ================= */}
          <div
            className="absolute left-[85px] top-[365px] z-40 w-[205px]
      sm:left-[110px] sm:top-[375px] sm:w-[215px]
      lg:-left-[60px] lg:top-[408px] lg:w-[250px]"
          >
            <img
              src="public/Images/Achievement card.webp"
              alt=""
              className="block w-full"
            />
          </div>

          {/* ================= TRUSTED BY CARD ================= */}
          <div
            className="absolute left-[370px] top-[430px] z-40 w-[210px] rounded-[28px] bg-[#123f43] px-4 py-4 text-center shadow-lg
      sm:left-[405px] sm:top-[440px] sm:w-[215px]
      lg:left-[307px] lg:top-[540px] lg:w-[210px]"
          >
            <p className="text-xs text-gray-400">Trusted By</p>

            <p className="mt-1 text-sm font-medium">15000+ enrolled students</p>

            <p className="mt-2 text-sm text-yellow-400">★★★★★</p>

            <p className="text-xs">4.94 (625)</p>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div
            className="absolute right-0 top-[155px] z-30 w-[43%] font-outfit font-semibold tracking-wide
      sm:top-[165px]
      lg:top-[180px]"
          >
            <p className="mb-4 text-sm font-semibold uppercase">
              Online Learning
            </p>

            <h1 className="text-[50px] font-bold leading-[1.02]">
              More then <span className="text-yellow-400">25000+</span>
              <br />
              education courses
              <br />
              online
            </h1>

            <p className="mt-5 max-w-[390px] text-md leading-6 text-gray-300">
              Lorem ipsum dolor sit amet consectetur. Gravida enim risus
              sollicitudin mauris tincidunt commodo ornare.
            </p>

            <button
              type="button"
              className="mt-6 border border-gray-500 px-8 py-3 text-md font-medium transition hover:bg-white hover:text-[#06272b]"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>
      {/* SECOND SECTION - LOGOS */}
      <section className="overflow-hidden bg-[#f2f9fa] py-12 sm:py-16">
        <p className="mb-8 px-5 text-center text-[16px] font-medium font-outfit tracking-wide text-[#18343a]">
          Learn from 350+ leading universities and companies with us
        </p>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#f2f9fa] to-transparent sm:w-32" />

          <div className="absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#f2f9fa] to-transparent sm:w-32" />

          <div className="logo-track flex w-max items-center">
            {/* First set */}
            <div className="flex items-center gap-10 px-6 sm:gap-20 sm:px-10">
              <img
                src="/Images/Clients Logo-3.svg"
                alt="Client logo"
                className="h-14 w-auto opacity-60"
              />

              <img
                src="/Images/Clients Logo-6.svg"
                alt="Client logo"
                className="h-14 w-auto opacity-60"
              />

              <img
                src="/Images/Clients Logo.svg"
                alt="Client logo"
                className="h-14 w-auto opacity-60"
              />

              <img
                src="/Images/Clients Logo-5.svg"
                alt="Client logo"
                className="h-14 w-auto opacity-60"
              />

              <img
                src="/Images/Clients Logo-2.svg"
                alt="Client logo"
                className="h-14 w-auto opacity-60"
              />

              <img
                src="/Images/Clients Logo-4.svg"
                alt="Client logo"
                className="h-14 w-auto opacity-60"
              />
            </div>

            {/* Duplicate set */}
            <div className="flex items-center gap-10 px-6 sm:gap-20 sm:px-10">
              <img
                src="/Images/Clients Logo-3.svg"
                alt="Client logo"
                className="h-14 w-auto opacity-60"
              />

              <img
                src="/Images/Clients Logo-6.svg"
                alt="Client logo"
                className="h-14 w-auto opacity-60"
              />

              <img
                src="/Images/Clients Logo.svg"
                alt="Client logo"
                className="h-14 w-auto opacity-60"
              />

              <img
                src="/Images/Clients Logo-5.svg"
                alt="Client logo"
                className="h-14 w-auto opacity-60"
              />

              <img
                src="/Images/Clients Logo-2.svg"
                alt="Client logo"
                className="h-14 w-auto opacity-60"
              />

              <img
                src="/Images/Clients Logo-4.svg"
                alt="Client logo"
                className="h-14 w-auto opacity-60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* THIRD SECTION - CATEGORIES */}
      <section className="bg-white px-5 py-16 sm:px-6 sm:py-20">
        <div className="mb-12 text-center">
          <p className="mb-5 text-sm font-medium uppercase tracking-wide text-[#18343a]">
            Top Categories
          </p>

          <h2 className="mx-auto max-w-2xl text-3xl font-semibold leading-tight text-[#18343a] sm:text-4xl">
            Discover leading categories to
            <br />
            elevate your journey
          </h2>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 lg:gap-7">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex h-[215px] flex-col items-center justify-center border border-[#d9e1e3] bg-white px-4 text-center"
            >
              <div className="mb-4 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#f0f7f8]">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-10 w-10 object-contain"
                />
              </div>

              <h3 className="max-w-[140px] text-[17px] font-semibold leading-[1.25] text-[#18343a]">
                {category.title}
              </h3>

              <p className="mt-3 text-[16px] text-gray-500">
                {category.courses}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOURTH SECTION - POSTER CARDS */}
      <section className="px-5 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Left Card */}
          <div className="relative min-h-[288px] overflow-hidden rounded-md bg-[#edf7f8]">
            <div className="absolute left-6 top-10 z-10 sm:left-8 sm:top-16">
              <h3 className="max-w-[270px] text-2xl font-semibold leading-[1.35] text-[#102f34]">
                Quick access to the
                <br />
                popular courses
              </h3>

              <button
                type="button"
                className="mt-8 bg-[#ffb800] px-11 py-4 text-sm font-medium text-[#102f34]"
              >
                View Courses
              </button>
            </div>

            <img
              src="/Images/Woman Using Laptop-p-800.webp"
              alt="Woman using laptop"
              className="absolute bottom-0 right-0 h-full w-[52%] object-cover object-left sm:w-[62%]"
            />
          </div>

          {/* Right Card */}
          <div className="flex min-h-[288px] items-center justify-between gap-5 overflow-hidden rounded-md bg-[#f2f1e9] px-6 sm:px-8">
            <div>
              <h3 className="max-w-[220px] text-2xl font-semibold leading-[1.35] text-[#102f34]">
                Develop your
                <br />
                skills online!
              </h3>

              <button
                type="button"
                className="mt-8 rounded-md bg-[#102f34] px-11 py-4 text-sm font-medium text-white"
              >
                Apply Now
              </button>
            </div>

            <img
              src="/Images/Home One Video-poster-00001.jpg"
              alt="Online learning"
              className="h-[180px] w-[45%] rounded-2xl object-cover sm:h-[225px] sm:w-[50%]"
            />
          </div>
        </div>
      </section>

      {/* FIFTH SECTION - COURSES */}
      <section className="bg-sky-50 px-5 sm:px-7">
        <div className="flex flex-col justify-between gap-8 py-12 pt-16 lg:flex-row lg:items-end">
          <div className="flex flex-col gap-3 text-[#06272b]">
            <h1 className="font-outfit font-normal tracking-wide">
              ONLINE LEARNING
            </h1>

            <h1 className="font-outfit text-4xl font-medium sm:text-5xl">
              Top online courses
            </h1>
          </div>

          <ul className="flex flex-wrap gap-x-5 gap-y-3 text-sm sm:text-base lg:items-end lg:gap-4">
            <li>All courses</li>
            <li>Design</li>
            <li>Development</li>
            <li>Managment</li>
            <li>Finance</li>
          </ul>
        </div>

        {/* First Three Courses */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {courses.map((course) => (
            <div key={course.title} className="group overflow-hidden bg-white">
              <div className="relative h-[205px]">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute bottom-[-36px] right-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#3156e8] text-lg text-white">
                  Free
                </div>
              </div>

              <div className="px-6 pt-10 sm:px-7">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-[#18343a]">
                  {course.category}
                </p>

                <h3 className="mt-4 min-h-[56px] text-[20px] font-semibold leading-[1.35] text-[#102f34]">
                  {course.title}
                </h3>

                <div className="mt-4 flex items-center gap-2">
                  <img
                    src="/Images/Rating.svg"
                    alt="Rating"
                    className="h-[16px] w-auto"
                  />

                  <span className="text-[11px] text-gray-500">
                    {course.rating} ({course.reviews})
                  </span>
                </div>

                <div className="relative mt-6 h-[61px] border-t border-gray-200">
                  <div className="flex h-full items-center justify-around transition-opacity group-hover:opacity-0">
                    <div className="flex gap-3 text-sm">
                      <img src="public/Images/Books.svg" alt="" />
                      {course.lessons}
                    </div>

                    <div className="h-full border-l border-gray-200" />

                    <div className="flex gap-3 text-sm">
                      <img src="public/Images/Person.svg" alt="" />
                      {course.enrolled}
                    </div>
                  </div>

                  <div className="absolute inset-0 flex items-center opacity-0 transition-opacity group-hover:opacity-100">
                    <button
                      type="button"
                      className="w-full bg-[#ffc33d] py-3 text-sm text-[#18343a] transition hover:bg-[#18343a] hover:text-white"
                    >
                      Course Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rest of Other Three Cards */}
        <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {extraCourses.map((course, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white shadow-sm"
            >
              <div className="relative h-64">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute bottom-[-23px] right-5 flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-lg font-medium text-white">
                  {course.price}
                </div>
              </div>

              <div className="px-6 pb-2 pt-9 sm:px-7">
                <p className="mb-5 text-sm font-medium tracking-wide text-slate-800">
                  {course.category}
                </p>

                <h3 className="min-h-[64px] text-[22px] font-semibold leading-8 text-slate-900">
                  {course.title}
                </h3>

                <div className="mt-5 flex items-center gap-1">
                  <span className="text-xl text-yellow-400">★★★★★</span>
                  <span className="text-sm text-gray-500">
                    {course.rating} ({course.reviews})
                  </span>
                </div>

                <div className="relative mt-6 min-h-[60px] border-t border-gray-200 pt-4">
                  <div
                    className="
                      flex items-center divide-x divide-gray-200
                      transition-all duration-300
                      group-hover:invisible
                      group-hover:opacity-0
                    "
                  >
                    <div className="flex w-1/2 items-center justify-center gap-2 text-sm text-slate-900">
                      <img src="public/Images/Books.svg" alt="Lessons" />
                      {course.lessons}
                    </div>

                    <div className="flex w-1/2 items-center justify-center gap-2 text-sm text-slate-900">
                      <img src="public/Images/Person.svg" alt="" />
                      {course.enrolled}
                    </div>
                  </div>

                  <div
                    className="
                      absolute inset-x-0 top-2
                      flex gap-3
                      opacity-0
                      translate-y-2
                      transition-all duration-300
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    <button
                      className="
                        h-12 flex-1 rounded-sm
                        bg-amber-400
                        text-slate-800
                        transition-colors duration-200
                        hover:bg-amber-500
                      "
                    >
                      Course Details
                    </button>

                    <button
                      className="
                        h-12 flex-1 rounded-sm
                        bg-slate-700
                        text-white
                        transition-colors duration-200
                        hover:bg-emerald-600
                      "
                    >
                      Enroll
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Browsing Ads Tape */}
        <div className="pb-14">
          <div className="mx-auto mt-16 w-full max-w-[690px] rounded-full bg-[#06272b] px-5 py-4 text-white">
            <h1 className="text-center font-outfit text-sm font-medium tracking-wide sm:text-base">
              We assist you in finding the ideal tutor at no cost.
              <span className="ml-1 underline">
                Browse All Available Courses
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* SEVENTH SECTION - FREE COURSES */}
      <section className="bg-white px-5 py-16 sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* LEFT: overlapping images */}
          <div className="relative mx-auto h-[430px] w-full max-w-md sm:h-[520px]">
            {/* Back image */}
            <img
              src="/Images/Woman Image Holding Copy.webp"
              alt="Student wearing headphones taking notes"
              className="absolute bottom-28 right-0 h-[300px] w-[230px] rounded-md object-cover shadow-xl sm:bottom-40 sm:h-[380px] sm:w-[300px]"
            />

            {/* Front image */}
            <img
              src="/Images/Man Image Holding Graph.webp"
              alt="Student presenting a chart on a video call"
              className="absolute bottom-0 left-0 h-[300px] w-[230px] rounded-md object-cover shadow-xl sm:right-64 sm:left-auto sm:h-[380px] sm:w-[300px]"
            />

            {/* Badge */}
            <div className="absolute left-0 top-5 flex items-center gap-3 rounded-md bg-[#142033] px-4 py-3 shadow-lg sm:top-10 sm:px-5 sm:py-4">
              <span className="text-4xl font-bold text-yellow-500">50+</span>
              <span className="text-md font-medium leading-tight tracking-wide text-white">
                Free courses
                <br />
                listed online
              </span>
            </div>
          </div>

          {/* RIGHT: content */}
          <div>
            <p className="mb-3 text-sm font-semibold tracking-wide text-slate-500">
              WHAT WE OFFER
            </p>

            <h2 className="mb-4 text-4xl font-bold leading-tight text-[#142033] md:text-5xl">
              Personalized learning for your ambitions
            </h2>

            <p className="mb-6 max-w-md text-slate-500">
              Lorem ipsum dolor sit amet consectetur. Pellentesque id quam
              mauris mus. Vitae diam dolor lacus amet integer ut.
            </p>

            <ul className="mb-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {[
                "Skill-based instruction",
                "Analytics and insights",
                "Global certification",
                "Customizable courses",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 font-medium text-[#142033]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#142033]" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA box */}
            <div className="flex flex-col items-start justify-between gap-6 rounded-md bg-slate-100 p-6 sm:flex-row sm:items-center">
              <div>
                <h3 className="font-semibold text-[#142033]">
                  Still have questions?
                </h3>

                <p className="mt-4 max-w-xs text-md font-medium leading-6 text-gray-400">
                  Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.
                </p>
              </div>

              <button className="whitespace-nowrap rounded-md bg-[#142033] px-8 py-3 font-medium text-white transition hover:bg-[#1e2f4a]">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* EIGHT SECTION - TESTIMONIALS */}
      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-[#132A2C] px-5 py-20 font-outfit sm:px-6 md:py-28"
      >
        {/* Background waves image */}
        <img
          src="/Images/UI design for background.avif"
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
        />

        {/* Content */}
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* LEFT */}
          <div>
            <p className="mb-3 text-sm font-semibold tracking-wide text-slate-300">
              OUR TESTIMONIALS
            </p>

            <h2 className="mb-8 text-4xl font-bold leading-tight text-white md:text-5xl">
              Trusted by our <br /> successful students
            </h2>

            <img
              src="/Images/Testimonial Author Image.avif"
              alt="Linda Grady"
              className="h-[280px] w-full max-w-[460px] rounded-xl object-cover shadow-xl sm:h-[340px]"
            />
          </div>

          {/* RIGHT */}
          <div>
            {/* Stats */}
            <div className="mb-8 flex flex-wrap items-center gap-6 sm:gap-9">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-white">
                  <CountUp end={70} suffix="M" start={inView} />
                </span>

                <span className="h-8 w-px bg-slate-500" />

                <span className="text-sm font-medium leading-tight text-gray-500">
                  SUCCESSFUL
                  <br />
                  STUDENTS
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-white">
                  <CountUp end={25} suffix="K" start={inView} duration={1200} />
                </span>

                <span className="h-8 w-px bg-slate-500" />

                <span className="text-sm font-medium leading-tight text-gray-500">
                  GLOBAL JOB
                  <br />
                  PLACEMENTS
                </span>
              </div>
            </div>

            {/* Quote */}
            <p className="mb-8 max-w-lg text-lg leading-relaxed tracking-wide text-gray-500 sm:text-xl">
              “Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus
              tempus facilisis scelerisque vitae consectetur vitae. Amet
              faucibus venenatis donec mattis. Morbi placerat eleifend malesuada
              sed semper quis.”
            </p>

            {/* Author */}
            <div className="mb-10">
              <p className="text-2xl font-semibold tracking-wider text-white">
                Linda Grady
              </p>

              <p className="text-sm tracking-wide text-gray-500">
                CO-ASSISTANT MANAGER
              </p>
            </div>

            {/* Nav arrows */}
            <div className="flex items-center gap-4">
              <button
                aria-label="Next testimonial"
                className="flex h-11 w-11 rotate-180 items-center justify-center rounded-full border border-slate-500 text-gray-600 transition hover:border-white hover:text-white"
              >
                <img
                  src="public/Images/Slider Arrow.svg"
                  alt=""
                  className="w-5"
                />
              </button>

              <button
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-500 text-gray-600 transition hover:border-white hover:text-white"
              >
                <img
                  src="public/Images/Slider Arrow.svg"
                  alt=""
                  className="w-5"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* NINTH SECTION - TRENDING COURSES */}
      <section className="bg-[#EAF2F4] px-5 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold tracking-wide text-slate-500">
            TRENDING COURSES
          </p>

          <h2 className="mb-10 text-3xl font-bold text-[#142033] sm:text-4xl">
            Explore our top programs
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {course.map((course) => (
              <div key={course.title} className="rounded-md bg-white shadow-sm">
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-56 w-full object-cover"
                  />

                  <span className="absolute right-4 top-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-sm font-semibold text-white shadow-md">
                    {course.price}
                  </span>
                </div>

                <div className="p-5">
                  <p className="mb-2 text-xs font-semibold tracking-wide text-slate-400">
                    {course.category}
                  </p>

                  <h3 className="mb-3 font-semibold leading-snug text-[#142033]">
                    {course.title}
                  </h3>

                  <StarRating rating={course.rating} reviews={course.reviews} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TENTH SECTION - JOURNEY */}
      <section className="w-full bg-[#eff6f8] px-5 py-16 sm:px-6 sm:py-20">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-[13px] font-medium tracking-[0.5px] text-[#102b32]">
            WHY WE ARE
          </p>

          <h2 className="text-3xl font-semibold leading-[1.2] tracking-[-1px] text-[#102b32] sm:text-[34px]">
            Elevate your professional journey
          </h2>

          <p className="mx-auto mt-4 max-w-[570px] text-[16px] leading-7 text-[#7c8184]">
            Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris
            mus. Vitae diam dolor lacus amet integer ut.
          </p>
        </div>

        {/* Features */}
        <div className="mx-auto mt-11 grid max-w-[1260px] grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <img
                src="public/Images/Books Icons.svg"
                alt=""
                className="h-11 w-11 object-contain"
              />
            </div>

            <h3 className="text-[20px] font-semibold leading-6 text-[#102b32]">
              Learn anything
            </h3>

            <p className="mx-auto mt-7 max-w-[285px] text-[16px] leading-7 text-[#808487]">
              Lorem ipsum dolor sit amet conse
              <br />
              non quis id viverra id proin.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <img
                src="public/Images/Money Bag ICon.svg"
                alt=""
                className="h-11 w-11 object-contain"
              />
            </div>

            <h3 className="text-[20px] font-semibold leading-6 text-[#102b32]">
              Save money
            </h3>

            <p className="mx-auto mt-7 max-w-[285px] text-[16px] leading-7 text-[#808487]">
              Lorem ipsum dolor sit amet conse
              <br />
              non quis id viverra id proin.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <img
                src="public/Images/Course Icon.svg"
                alt=""
                className="h-11 w-11 object-contain"
              />
            </div>

            <h3 className="text-[20px] font-semibold leading-6 text-[#102b32]">
              Flexible courses
            </h3>

            <p className="mx-auto mt-7 max-w-[285px] text-[16px] leading-7 text-[#808487]">
              Lorem ipsum dolor sit amet conse
              <br />
              non quis id viverra id proin.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <img
                src="public/Images/Verified Icon.svg"
                alt=""
                className="h-11 w-11 object-contain"
              />
            </div>

            <h3 className="text-[20px] font-semibold leading-6 text-[#102b32]">
              Unlimited certificate
            </h3>

            <p className="mx-auto mt-7 max-w-[285px] text-[16px] leading-7 text-[#808487]">
              Lorem ipsum dolor sit amet conse
              <br />
              non quis id viverra id proin.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

// import { useState, useEffect, useRef } from "react";
// import React from "react";
// import { categories } from "./Homescript";
// import courses from "./Homescript";
// import { extraCourses } from "./Homescript";
// import { course } from "./Homescript";

// function CountUp({ end, suffix = "", duration = 1500, start }) {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     if (!start) return;

//     let startTime = null;

//     function tick(timestamp) {
//       if (!startTime) startTime = timestamp;
//       const progress = Math.min((timestamp - startTime) / duration, 1);
//       setValue(Math.floor(progress * end));

//       if (progress < 1) {
//         requestAnimationFrame(tick);
//       }
//     }

//     requestAnimationFrame(tick);
//   }, [start, end, duration]);

//   return (
//     <span>
//       {value}
//       {suffix}
//     </span>
//   );
// }

// // Renders 5 stars, filled based on rating value
// function StarRating({ rating, reviews }) {
//   return (
//     <div className="flex items-center gap-1.5">
//       <div className="flex">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <svg
//             key={star}
//             viewBox="0 0 20 20"
//             className={`h-4 w-4 ${
//               star <= Math.round(rating) ? "fill-amber-400" : "fill-slate-300"
//             }`}
//           >
//             <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.9l-5.2 2.61.99-5.79-4.21-4.1 5.82-.85L10 1.5z" />
//           </svg>
//         ))}
//       </div>
//       <span className="text-sm font-medium text-slate-700">
//         {rating.toFixed(2)}
//       </span>
//       <span className="text-sm text-slate-400">({reviews})</span>
//     </div>
//   );
// }
// function Home() {
//   const [inView, setInView] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setInView(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.3 },
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);

//     return () => observer.disconnect();
//   }, []);
//   return (
//     <>
//       <section
//         className=" min-h-[830px] bg-cover bg-center overflow-hidden bg-[#06272b] text-white"
//         style={{
//           backgroundImage: "url('public/Images/Hero Background (1).avif')",
//         }}
//       >
//         {/* Content */}
//         <div className="relative mx-auto my-8 flex max-w-6xl justify-between px-0 py-20">
//           {/* Left Image */}
//           {/* Positioned picture */}
//           <img
//             src="public/Images/AI Girl.webp"
//             alt=""
//             className="absolute top-20 -left-20 h-[650px] w-[650px]"
//           />
//           <img
//             src="public/Images/Blue Circle.svg"
//             alt=""
//             className="absolute right-[72rem] top-52"
//           />
//           <img
//             src="public/Images/Half Moon.svg"
//             alt=""
//             className="absolute right-[60rem] top-64 h-[284px]"
//           />
//           <img
//             src="public/Images/Yellow Dot.svg"
//             alt=""
//             className="absolute top-72 w-2"
//           />
//           <img
//             src="public/Images/Yellow Dot.svg"
//             alt=""
//             className="absolute right-[36rem] top-[29rem]"
//           />

//           <div className="relative top-[337px] right-3 w-1/2">
//             {/* Achievement Card */}
//             <div className="absolute bottom-40 right-[23rem] z-20 shadow-lg w-[275px]">
//               <img src="public/Images/Achievement card.webp" alt="" />
//             </div>

//             {/* Trusted By Card */}
//             <div className="absolute bottom-5 right-5 z-20 rounded-3xl bg-[#123f43] px-6 py-4 text-center shadow-lg">
//               <p className="text-xs text-gray-400">Trusted By</p>
//               <p className="mt-1 text-sm font-medium">
//                 15000+ enrolled students
//               </p>
//               <p className="mt-2 text-sm text-yellow-400">★★★★★</p>
//               <p className="text-xs">4.94 (625)</p>
//             </div>
//           </div>

//           {/* Right Content */}
//           <div className="relative w-[42%] top-40 tracking-wide font-outfit">
//             <p className="mb-4 text-xs font-semibold uppercase">
//               Online Learning
//             </p>

//             <h1 className="text-5xl font-bold leading-[1.05]">
//               More then <span className="text-yellow-400">25000+</span>
//               <br />
//               education courses
//               <br />
//               online
//             </h1>

//             <p className="mt-5 max-w-lg text-sm leading-6 text-gray-300">
//               Lorem ipsum dolor sit amet consectetur. Gravida enim risus
//               sollicitudin mauris tincidunt commodo ornare.
//             </p>

//             <button
//               type="button"
//               className="mt-6 border border-gray-500 px-8 py-3 text-sm font-medium transition hover:bg-white hover:text-[#06272b]"
//             >
//               Get Started
//             </button>
//           </div>
//         </div>
//       </section>
//       {/* Second section of animate tape */}
//       <section className="overflow-hidden bg-[#f2f9fa] py-16">
//         {/* Heading */}
//         <p className="mb-8 text-center text-[16px] font-medium font-outfit tracking-wide text-[#18343a]">
//           Learn from 350+ leading universities and companies with us
//         </p>

//         {/* Logo Slider */}
//         <div className="relative overflow-hidden">
//           {/* Left fade */}
//           <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#f2f9fa] to-transparent" />

//           {/* Right fade */}
//           <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#f2f9fa] to-transparent" />

//           {/* Moving logos */}
//           <div className="logo-track flex w-max items-center">
//             {/* First set */}
//             <div className="flex items-center gap-20 px-10">
//               <img
//                 src="/Images/Clients Logo-3.svg"
//                 alt="Client logo"
//                 className="h-14 w-auto opacity-60"
//               />

//               <img
//                 src="/Images/Clients Logo-6.svg"
//                 alt="Client logo"
//                 className="h-14 w-auto opacity-60"
//               />

//               <img
//                 src="/Images/Clients Logo.svg"
//                 alt="Client logo"
//                 className="h-14 w-auto opacity-60"
//               />

//               <img
//                 src="/Images/Clients Logo-5.svg"
//                 alt="Client logo"
//                 className="h-14 w-auto opacity-60"
//               />

//               <img
//                 src="/Images/Clients Logo-2.svg"
//                 alt="Client logo"
//                 className="h-14 w-auto opacity-60"
//               />

//               <img
//                 src="/Images/Clients Logo-4.svg"
//                 alt="Client logo"
//                 className="h-14 w-auto opacity-60"
//               />
//             </div>

//             {/* Duplicate set */}
//             <div className="flex items-center gap-20 px-10">
//               <img
//                 src="/Images/Clients Logo-3.svg"
//                 alt="Client logo"
//                 className="h-14 w-auto opacity-60"
//               />

//               <img
//                 src="/Images/Clients Logo-6.svg"
//                 alt="Client logo"
//                 className="h-14 w-auto opacity-60"
//               />

//               <img
//                 src="/Images/Clients Logo.svg"
//                 alt="Client logo"
//                 className="h-14 w-auto opacity-60"
//               />

//               <img
//                 src="/Images/Clients Logo-5.svg"
//                 alt="Client logo"
//                 className="h-14 w-auto opacity-60"
//               />

//               <img
//                 src="/Images/Clients Logo-2.svg"
//                 alt="Client logo"
//                 className="h-14 w-auto opacity-60"
//               />

//               <img
//                 src="/Images/Clients Logo-4.svg"
//                 alt="Client logo"
//                 className="h-14 w-auto opacity-60"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Third section of dynamic cards */}
//       <section className="bg-white px-6 py-20">
//         {/* Heading */}
//         <div className="mb-12 text-center">
//           <p className="mb-5 text-sm font-medium uppercase tracking-wide text-[#18343a]">
//             Top Categories
//           </p>

//           <h2 className="mx-auto max-w-2xl text-4xl font-semibold leading-tight text-[#18343a]">
//             Discover leading categories to
//             <br />
//             elevate your journey
//           </h2>
//         </div>

//         {/* Cards */}
//         <div className="mx-auto grid max-w-7xl grid-cols-6 gap-7">
//           {categories.map((category, index) => (
//             <div
//               key={index}
//               className="flex h-[215px] flex-col items-center justify-center border border-[#d9e1e3] bg-white px-4 text-center"
//             >
//               {/* Icon */}
//               <div className="mb-4 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#f0f7f8]">
//                 <img
//                   src={category.image}
//                   alt={category.title}
//                   className="h-10 w-10 object-contain"
//                 />
//               </div>

//               {/* Title */}
//               <h3 className="max-w-[140px] text-[17px] font-semibold leading-[1.25] text-[#18343a]">
//                 {category.title}
//               </h3>

//               {/* Courses */}
//               <p className="mt-3 text-[16px] text-gray-500">
//                 {category.courses}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>
//       {/*fourth section of poster card */}
//       <section className="px-6 py-16">
//         <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8">
//           {/* Left Card */}
//           <div className="relative h-[288px] overflow-hidden rounded-md bg-[#edf7f8]">
//             {/* Text */}
//             <div className="absolute left-8 top-16 z-10">
//               <h3 className="max-w-[270px] text-2xl font-semibold leading-[1.35] text-[#102f34]">
//                 Quick access to the
//                 <br />
//                 popular courses
//               </h3>

//               <button
//                 type="button"
//                 className="mt-8 bg-[#ffb800] px-11 py-4 text-sm font-medium text-[#102f34]"
//               >
//                 View Courses
//               </button>
//             </div>

//             {/* Woman Image */}
//             <img
//               src="/Images/Woman Using Laptop-p-800.webp"
//               alt="Woman using laptop"
//               className="absolute right-0 bottom-0 h-full w-[62%] object-cover object-left"
//             />
//           </div>

//           {/* Right Card */}
//           <div className="flex justify-between items-center px-8 h-[288px] overflow-hidden rounded-md bg-[#f2f1e9]">
//             {/* Text */}
//             <div className="">
//               <h3 className="max-w-[220px] text-2xl font-semibold leading-[1.35] text-[#102f34]">
//                 Develop your
//                 <br />
//                 skills online!
//               </h3>

//               <button
//                 type="button"
//                 className="mt-8 bg-[#102f34] px-11 py-4 rounded-md text-sm font-medium text-white"
//               >
//                 Apply Now
//               </button>
//             </div>

//             {/* Video Poster */}
//             <img
//               src="/Images/Home One Video-poster-00001.jpg"
//               alt="Online learning"
//               className=" h-[225px] w-[50%] rounded-2xl object-cover"
//             />
//           </div>
//         </div>
//       </section>
//       {/* fifth section of cards of courses */}
//       <section className="bg-sky-50 px-7">
//         <div className="flex justify-between pt-16 py-12">
//           <div className="text-[#06272b] flex flex-col gap-3">
//             <h1 className="font-outfit font-normal tracking-wide">
//               ONLINE LEARNING
//             </h1>
//             <h1 className="font-outfit font-medium text-5xl ">
//               Top online courses
//             </h1>
//           </div>
//           <ul className="flex items-end gap-4">
//             <li>All courses</li>
//             <li>Design</li>
//             <li>Development</li>
//             <li>Managment</li>
//             <li>Finance</li>
//           </ul>
//         </div>
//         <div className="grid grid-cols-3 gap-7">
//           {courses.map((course) => (
//             <div key={course.title} className="group overflow-hidden bg-white">
//               {/* Image */}
//               <div className="relative h-[205px]">
//                 <img
//                   src={course.image}
//                   alt={course.title}
//                   className="h-full w-full object-cover"
//                 />

//                 <div className="absolute bottom-[-36px] right-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#3156e8] text-lg text-white">
//                   Free
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="px-7 pt-10">
//                 <p className="text-[10px] font-semibold uppercase tracking-wide text-[#18343a]">
//                   {course.category}
//                 </p>

//                 <h3 className="mt-4 min-h-[56px] text-[20px] font-semibold leading-[1.35] text-[#102f34]">
//                   {course.title}
//                 </h3>

//                 {/* Rating */}
//                 <div className="mt-4 flex items-center gap-2">
//                   <img
//                     src="/Images/Rating.svg"
//                     alt="Rating"
//                     className="h-[16px] w-auto"
//                   />

//                   <span className="text-[11px] text-gray-500">
//                     {course.rating} ({course.reviews})
//                   </span>
//                 </div>

//                 {/* Bottom */}
//                 <div className="relative mt-6 h-[61px] border-t border-gray-200">
//                   {/* Normal */}
//                   <div className="flex h-full items-center justify-around transition-opacity group-hover:opacity-0">
//                     <div className="text-sm flex gap-3">
//                       <img src="public/Images/Books.svg" alt="" />
//                       {course.lessons}
//                     </div>

//                     <div className="h-full border-l border-gray-200" />

//                     <div className="text-sm flex gap-3">
//                       <img src="public/Images/Person.svg" alt="" />
//                       {course.enrolled}
//                     </div>
//                   </div>

//                   {/* Hover */}
//                   <div className="absolute inset-0 flex items-center opacity-0 transition-opacity group-hover:opacity-100">
//                     <button
//                       type="button"
//                       className="w-full bg-[#ffc33d] py-3 text-sm text-[#18343a] transition hover:bg-[#18343a] hover:text-white"
//                     >
//                       Course Details
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         {/* rest of other three cards dynamic */}
//         <div className="grid grid-cols-1 gap-7 mt-7  md:grid-cols-3">
//           {extraCourses.map((course, index) => (
//             <div
//               key={index}
//               className="group relative overflow-hidden bg-white shadow-sm"
//             >
//               {/* Image */}
//               <div className="relative h-64">
//                 <img
//                   src={course.image}
//                   alt={course.title}
//                   className="h-full w-full object-cover"
//                 />

//                 {/* Price */}
//                 <div className="absolute right-5 bottom-[-23px] flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-lg font-medium text-white">
//                   {course.price}
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="px-7 pt-9 pb-2">
//                 <p className="mb-5 text-sm font-medium tracking-wide text-slate-800">
//                   {course.category}
//                 </p>

//                 <h3 className="min-h-[64px] text-[22px] font-semibold leading-8 text-slate-900">
//                   {course.title}
//                 </h3>

//                 {/* Rating */}
//                 <div className="mt-5 flex items-center gap-1">
//                   <span className="text-xl text-yellow-400">★★★★★</span>
//                   <span className="text-sm text-gray-500">
//                     {course.rating} ({course.reviews})
//                   </span>
//                 </div>

//                 {/* Bottom */}
//                 <div className="relative mt-6 min-h-[60px] border-t border-gray-200 pt-4">
//                   {/* Normal information */}
//                   <div
//                     className="
//                   flex items-center divide-x divide-gray-200
//                   transition-all duration-300
//                   group-hover:invisible
//                   group-hover:opacity-0
//                 "
//                   >
//                     <div className="flex w-1/2 items-center justify-center gap-2 text-sm text-slate-900">
//                       <img src="public/Images/Books.svg" alt="Lessons" />
//                       {course.lessons}
//                     </div>

//                     <div className="flex w-1/2 items-center justify-center gap-2 text-sm text-slate-900">
//                       <img src="public/Images/Person.svg" alt="" />
//                       {course.enrolled}
//                     </div>
//                   </div>

//                   {/* Buttons appear when card is hovered */}
//                   <div
//                     className="
//                   absolute inset-x-0 top-2
//                   flex gap-3
//                   opacity-0
//                   translate-y-2
//                   transition-all duration-300
//                   group-hover:translate-y-0
//                   group-hover:opacity-100
//                 "
//                   >
//                     <button
//                       className="
//                     h-12 flex-1 rounded-sm
//                     bg-amber-400
//                     text-slate-800
//                     transition-colors duration-200
//                     hover:bg-amber-500
//                   "
//                     >
//                       Course Details
//                     </button>

//                     <button
//                       className="
//                     h-12 flex-1 rounded-sm
//                     bg-slate-700
//                     text-white
//                     transition-colors duration-200
//                     hover:bg-emerald-600
//                   "
//                     >
//                       Enroll
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         {/* Browsing ads tape */}
//         <div className="pb-14">
//           <div className=" m-auto mt-16 w-[690px] py-4 rounded-full bg-[#06272b] text-white">
//             <h1 className="text-center font-outfit font-medium tracking-wide ">
//               We assist you in finding the ideal tutor at no cost.
//               <span className="underline ml-1">
//                 Browse All Available Courses
//               </span>
//             </h1>
//           </div>
//         </div>
//       </section>
//       {/* seventh section of free Courses */}
//       <section className="bg-white px-6 py-16 md:py-24">
//         <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
//           {/* LEFT: overlapping images */}
//           <div className="relative mx-auto h-[520px] w-full max-w-md">
//             {/* Back image (woman with headphones) */}
//             <img
//               src="/Images/Woman Image Holding Copy.webp"
//               alt="Student wearing headphones taking notes"
//               className="absolute right-0 bottom-40 h-[380px] w-[300px] rounded-md object-cover shadow-xl"
//             />

//             {/* Front image (man with headphones at laptop) */}
//             <img
//               src="/Images/Man Image Holding Graph.webp"
//               alt="Student presenting a chart on a video call"
//               className="absolute bottom-0 right-64 h-[380px] w-[300px] rounded-md object-cover shadow-xl"
//             />

//             {/* Badge */}
//             <div className="absolute left-0 top-10 flex items-center gap-3 rounded-md bg-[#142033] px-5 py-4 shadow-lg">
//               <span className="text-4xl font-bold text-yellow-500">50+</span>
//               <span className="text-md font-medium leading-tight tracking-wide text-white">
//                 Free courses
//                 <br />
//                 listed online
//               </span>
//             </div>
//           </div>
//           {/* RIGHT: content */}
//           <div>
//             <p className="mb-3 text-sm font-semibold tracking-wide text-slate-500">
//               WHAT WE OFFER
//             </p>

//             <h2 className="mb-4 text-4xl font-bold leading-tight text-[#142033] md:text-5xl">
//               Personalized learning for your ambitions
//             </h2>

//             <p className="mb-6 max-w-md text-slate-500">
//               Lorem ipsum dolor sit amet consectetur. Pellentesque id quam
//               mauris mus. Vitae diam dolor lacus amet integer ut.
//             </p>

//             <ul className="mb-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
//               {[
//                 "Skill-based instruction",
//                 "Analytics and insights",
//                 "Global certification",
//                 "Customizable courses",
//               ].map((item) => (
//                 <li
//                   key={item}
//                   className="flex items-center gap-2 font-medium text-[#142033]"
//                 >
//                   <span className="h-1.5 w-1.5 rounded-full bg-[#142033]" />
//                   {item}
//                 </li>
//               ))}
//             </ul>

//             {/* CTA box */}
//             <div className="flex flex-col items-start justify-between gap-6 rounded-md bg-slate-100 p-6 sm:flex-row sm:items-center">
//               <div>
//                 <h3 className="font-semibold text-[#142033]">
//                   Still have questions?
//                 </h3>
//                 <p className="mt-4 max-w-xs leading-6 font-medium text-md text-gray-400">
//                   Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.
//                 </p>
//               </div>
//               <button className="whitespace-nowrap rounded-md bg-[#142033] px-8 py-3 font-medium text-white transition hover:bg-[#1e2f4a]">
//                 Get Started
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* eight section of tetimnals */}

//       <section
//         ref={sectionRef}
//         className="relative overflow-hidden bg-[#132A2C] px-6 py-20 md:py-28 font-outfit"
//       >
//         {/* Background waves image */}
//         <img
//           src="/Images/UI design for background.avif"
//           alt=""
//           className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
//         />

//         {/* Content */}
//         <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 md:grid-cols-2">
//           {/* LEFT: heading + image */}
//           <div>
//             <p className="mb-3 text-sm font-semibold tracking-wide text-slate-300">
//               OUR TESTIMONIALS
//             </p>

//             <h2 className="mb-8 text-4xl font-bold leading-tight text-white md:text-5xl">
//               Trusted by our <br /> successful students
//             </h2>

//             <img
//               src="/Images/Testimonial Author Image.avif"
//               alt="Linda Grady"
//               className="h-[340px] w-full max-w-[460px] rounded-xl object-cover shadow-xl"
//             />
//           </div>

//           {/* RIGHT: stats + quote */}
//           <div>
//             {/* Stats */}
//             <div className="mb-8 flex flex-wrap items-center gap-9">
//               <div className="flex items-center gap-4">
//                 <span className="text-4xl font-bold text-white">
//                   <CountUp end={70} suffix="M" start={inView} />
//                 </span>
//                 <span className="h-8 w-px bg-slate-500" />
//                 <span className="text-sm font-medium leading-tight text-gray-500">
//                   SUCCESSFUL
//                   <br />
//                   STUDENTS
//                 </span>
//               </div>

//               <div className="flex items-center gap-4">
//                 <span className="text-4xl font-bold text-white">
//                   <CountUp end={25} suffix="K" start={inView} duration={1200} />
//                 </span>
//                 <span className="h-8 w-px bg-slate-500" />
//                 <span className="text-sm font-medium leading-tight text-gray-500">
//                   GLOBAL JOB
//                   <br />
//                   PLACEMENTS
//                 </span>
//               </div>
//             </div>

//             {/* Quote */}
//             <p className="mb-8 max-w-lg text-xl leading-relaxed tracking-wide text-gray-500">
//               “Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus
//               tempus facilisis scelerisque vitae consectetur vitae. Amet
//               faucibus venenatis donec mattis. Morbi placerat eleifend malesuada
//               sed semper quis.”
//             </p>

//             {/* Author */}
//             <div className="mb-10">
//               <p className="font-semibold tracking-wider text-2xl text-white">
//                 Linda Grady
//               </p>
//               <p className="text-sm tracking-wide text-gray-500">
//                 CO-ASSISTANT MANAGER
//               </p>
//             </div>

//             {/* Nav arrows */}
//             <div className="flex items-center gap-4">
//               <button
//                 aria-label="Next testimonial"
//                 className="flex items-center justify-center h-11 w-11 rotate-180  rounded-full border border-slate-500 text-gray-600 transition hover:border-white hover:text-white"
//               >
//                 <img
//                   src="public/Images/Slider Arrow.svg"
//                   alt=""
//                   className="w-5"
//                 />
//               </button>
//               <button
//                 aria-label="Next testimonial"
//                 className="flex items-center justify-center h-11 w-11  rounded-full border border-slate-500 text-gray-600 transition hover:border-white hover:text-white"
//               >
//                 <img
//                   src="public/Images/Slider Arrow.svg"
//                   alt=""
//                   className="w-5"
//                 />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* ninth section of Trending Course */}
//       <section className="bg-[#EAF2F4] px-6 py-16 md:py-24">
//         <div className="mx-auto max-w-6xl">
//           <p className="mb-3 text-sm font-semibold tracking-wide text-slate-500">
//             TRENDING COURSES
//           </p>
//           <h2 className="mb-10 text-4xl font-bold text-[#142033]">
//             Explore our top programs
//           </h2>

//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//             {course.map((course) => (
//               <div key={course.title} className="rounded-md bg-white shadow-sm">
//                 <div className="relative">
//                   <img
//                     src={course.image}
//                     alt={course.title}
//                     className="h-56 w-full object-cover"
//                   />
//                   <span className="absolute right-4 top-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-sm font-semibold text-white shadow-md">
//                     {course.price}
//                   </span>
//                 </div>

//                 <div className="p-5">
//                   <p className="mb-2 text-xs font-semibold tracking-wide text-slate-400">
//                     {course.category}
//                   </p>
//                   <h3 className="mb-3 font-semibold leading-snug text-[#142033]">
//                     {course.title}
//                   </h3>
//                   <StarRating rating={course.rating} reviews={course.reviews} />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* tenth section of Journey */}
//       <section className="w-full bg-[#eff6f8] px-6 py-20">
//         {/* Heading */}
//         <div className="mx-auto max-w-4xl text-center">
//           <p className="mb-5 text-[13px] font-medium tracking-[0.5px] text-[#102b32]">
//             WHY WE ARE
//           </p>

//           <h2 className="text-[34px] font-semibold leading-[1.2] tracking-[-1px] text-[#102b32]">
//             Elevate your professional journey
//           </h2>

//           <p className="mx-auto mt-4 max-w-[570px] text-[16px] leading-7 text-[#7c8184]">
//             Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris
//             mus. Vitae diam dolor lacus amet integer ut.
//           </p>
//         </div>

//         {/* Features */}
//         <div className="mx-auto mt-11 grid max-w-[1260px] grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
//           {/* Feature 1 */}
//           <div className="text-center">
//             <div className="mb-6 flex justify-center">
//               <img
//                 src="public/Images/Books Icons.svg"
//                 alt=""
//                 className="h-11 w-11 object-contain"
//               />
//             </div>

//             <h3 className="text-[20px] font-semibold leading-6 text-[#102b32]">
//               Learn anything
//             </h3>

//             <p className="mx-auto mt-7 max-w-[285px] text-[16px] leading-7 text-[#808487]">
//               Lorem ipsum dolor sit amet conse
//               <br />
//               non quis id viverra id proin.
//             </p>
//           </div>

//           {/* Feature 2 */}
//           <div className="text-center">
//             <div className="mb-6 flex justify-center">
//               <img
//                 src="public/Images/Money Bag ICon.svg"
//                 alt=""
//                 className="h-11 w-11 object-contain"
//               />
//             </div>

//             <h3 className="text-[20px] font-semibold leading-6 text-[#102b32]">
//               Save money
//             </h3>

//             <p className="mx-auto mt-7 max-w-[285px] text-[16px] leading-7 text-[#808487]">
//               Lorem ipsum dolor sit amet conse
//               <br />
//               non quis id viverra id proin.
//             </p>
//           </div>

//           {/* Feature 3 */}
//           <div className="text-center">
//             <div className="mb-6 flex justify-center">
//               <img
//                 src="public/Images/Course Icon.svg"
//                 alt=""
//                 className="h-11 w-11 object-contain"
//               />
//             </div>

//             <h3 className="text-[20px] font-semibold leading-6 text-[#102b32]">
//               Flexible courses
//             </h3>

//             <p className="mx-auto mt-7 max-w-[285px] text-[16px] leading-7 text-[#808487]">
//               Lorem ipsum dolor sit amet conse
//               <br />
//               non quis id viverra id proin.
//             </p>
//           </div>

//           {/* Feature 4 */}
//           <div className="text-center">
//             <div className="mb-6 flex justify-center">
//               <img
//                 src="public/Images/Verified Icon.svg"
//                 alt=""
//                 className="h-11 w-11 object-contain"
//               />
//             </div>

//             <h3 className="text-[20px] font-semibold leading-6 text-[#102b32]">
//               Unlimited certificate
//             </h3>

//             <p className="mx-auto mt-7 max-w-[285px] text-[16px] leading-7 text-[#808487]">
//               Lorem ipsum dolor sit amet conse
//               <br />
//               non quis id viverra id proin.
//             </p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Home;
