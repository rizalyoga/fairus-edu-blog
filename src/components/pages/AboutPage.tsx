import React from "react";

const About = () => {
  return (
    <div className="bg-base-100 pt-20">
      <div className="content-container px-4 lg:px-0">
        <div className="about w-full m-auto pb-16 lg:w-[80%]">
          <div className="about-us pt-12">
            <h1 className="text-title-section font-bold text-primary-green text-center">
              About Us
            </h1>
            <p className="py-10 text-center text-base-content text-lg">
              Established in 2010 and approved as an official institution of the
              Athalia Berkat Anugerah Foundation in 2022. Our services started
              by providing Shadow Teacher services or teacher support services
              for children with special needs in schools, then developed
              according to community needs by providing behavioral therapy
              services, remedial teaching and home program, currently continuing
              to develop assessment services for children with special needs,
              workshops, parenting, and learning consultations.
            </p>
          </div>
          <div className="vision text-lg">
            <h1 className="text-title-sub-section font-bold text-base-content text-center">
              Vision
            </h1>
            <p className="text-center py-10 px-10 text-base-content">
              Become a friend of parents accompanying children with special
              needs to reach the child&apos;s best level
            </p>
          </div>
          <div className="Mission text-lg">
            <h1 className="text-title-sub-section py-10 font-bold text-base-content text-center">
              Missions
            </h1>
            <ol className="list-decimal text-base-content">
              <li>
                Provide consultations for children with special needs and
                provide appropriate intervention according to the child&apos;s
                needs.
              </li>

              <li>
                Provide assistance to children with special needs at school, by
                bridging parents with schools.
              </li>

              <li>
                Serving home programs that suit the needs of children at home.
              </li>

              <li>
                Provides remedial teaching for children with special needs
                academics and life skills.
              </li>

              <li>
                Provides behavioral therapy for children with special needs
                improve communication skills, reduce behavior problematic in
                order to acquire adaptive skills.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
