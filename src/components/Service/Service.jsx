import PropTypes from 'prop-types';
import SectionHeading from '../SectionHeading/SectionHeading';

const Service = ({ data }) => {
  const style = {
    fontSize:"20px"
  }
  return (
    <section id="services" className="section services-section bg-dark">
      <div className="container">
        <SectionHeading title="My Skills" subTitle="" />
        <div className="accordion accordion-flush d-flex align-items-center gap-3 " id="accordion_services">
          {data.map((element, index) => (
            <div
              className=""
              key={index}
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <div className="badge text-bg-secondary " style={style}>{element.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Service.propTypes = {
  data: PropTypes.array,
};

export default Service;
