import PropTypes from "prop-types";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Icon } from "@iconify/react";


const Experience = ({ data }) => {
  const { text, experience, resumeCv,education } = data;
  return (
    <section className="section experience-section bg-g">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-5">
            <div className="section-heading">
              <SectionHeading title="My Experience" subTitle="Experience" />
              <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">{text}</p>
              <div className="btn-bar" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                <a href={resumeCv} className="px-btn dark" download>
                  Download my resume <Icon icon="bi-download" />
                </a>
              </div>
              <div className="col-lg-12 py-5">
                <SectionHeading title="Eduction" subTitle="" />
                <ul className="resume-box">
                  {education.map((element, index) => (
                    <li key={index} data-aos="fade-up" data-aos-duration="800">
                         <h5>{element.title}</h5>
                      <div className="r-meta">
                        <label>-{element.subtitle}</label>
                        <div>{element.start} - {element.end}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-7 ps-xl-5">
            <ul className="resume-box">
              {experience.map((element, index) => (
                <li key={index} data-aos="fade-up" data-aos-duration="800">
                  <div className="r-meta">
                    <span>{element.start} - {element.end}</span>
                    <label>-{element.subtitle}</label>
                  </div>
                  <h5>{element.title}</h5>
                  <label>-{element.p1}</label> 
                  <label>-{element.p2}</label>
                  <label>-{element.p3}</label>

                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

Experience.propTypes = {
  data: PropTypes.object
}

export default Experience;
