
import ManagementTeam from "./ManagementTeam";

const About = () => {
  return (
    <> 
  
      {/* Responsive Banner */}
     
      <div className=" mt-4 ">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
        Our Purpose & Promises
      </h2>
      <p className="mt-4 text-gray-500 leading-relaxed">
        We understand that healthcare is about more than just treating illness and injuries. It is about treating and caring for people. That is why we are dedicated to providing patient-centric service with kindness and compassion at the heart of all we do.
      </p>
      <p className="mt-4 text-gray-500 leading-relaxed">
        Our team of experienced medical professionals promises to treat every patient with empathy, understanding, and respect while delivering the highest standard of medical care. We promise to create a welcoming and comforting environment for all who seek our care.
      </p>

    
    </div>
    <ManagementTeam/>
    </>
  );
};

export default About;
