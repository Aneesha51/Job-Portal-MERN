import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 bg-[#eee]'>
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
          <h1 className='text-3xl text-blue-600 font-bold mb-5'>About Us</h1>
          <p className='text-justify leading-7'>
          Welcome to Employment Seeker, your dedicated partner in connecting talent with opportunity! At Employment Seeker, 
          we believe in the power of meaningful work and the impact it has on individuals and businesses alike. 
          Our platform serves as a dynamic bridge, bringing together job seekers and employers in a seamless and efficient manner.
          </p>
        </div>
        <img src={JobImg} alt='About' className='w-auto h-[300px]' />
      </div>

      <div className='leading-8 px-5 text-justify'>
        <p>
        Driven by the passion to foster career growth and organizational success, Employment Seeker is committed to providing a user-friendly, innovative job posting experience.
        Whether you're an ambitious professional seeking your next challenge or an employer searching for top-tier talent, our platform offers a tailored solution to meet your needs.
        <br />
        Why choose Employment Seeker?
        <br />
        <strong>Streamlined Job Search:</strong> Navigate a vast array of opportunities effortlessly, thanks to our intuitive interface and powerful search tools.
        <br />
        <strong>Targeted Job Postings:</strong> Employers can precisely target their ideal candidates, ensuring a higher quality pool of applicants for every position.
        <br />
        <strong>Personalized Career Paths:</strong> Job seekers can build and showcase their professional journey, enhancing their chances of landing the perfect job.
        <br />
        <strong>Responsive Support:</strong> Our dedicated support team is here to assist both employers and job seekers, ensuring a smooth and positive experience for everyone.
        <br />
        Join Employment Seeker today and unlock a world of possibilities for your career or organization. Let's embark on this journey together, where talent meets opportunity seamlessly!
        </p>
      </div>
    </div>
  );
};

export default About;