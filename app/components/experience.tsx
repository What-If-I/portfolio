import Badge from 'react-bootstrap/Badge';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import experienceData from '~/resume_content/experience';

export default function Experience({ experience: experience }: { experience: typeof experienceData }) {
  const work = experience.map(function (work, i) {

    const mainTech = work.mainTech.map((technology, i) => {
      return (
        <Badge pill className="main-badge mr-2 mb-2" key={i}>
          {technology}
        </Badge>
      );
    });

    const tech = work.technologies.map((technology, i) => {
      return (
        <Badge pill className="experience-badge mr-2 mb-2" key={i}>
          {technology}
        </Badge>
      );
    });
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={work.years}
        iconStyle={{
          background: "#AE944F",
          color: "#fff",
          textAlign: "center",
        }}
        icon={<i className={`experience-icon ${work.iconClass}`}></i>}
        key={i}
      >
        <div style={{ textAlign: "left", marginBottom: "4px" }}>{mainTech}</div>

        <h3 className="vertical-timeline-element-title" style={{ textAlign: "left" }}>
          {work.title}
        </h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ textAlign: "left" }}>
          <a href={work.company.link}>@{work.company.title}</a>
        </h4>
        <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
      </VerticalTimelineElement>
    );
  });

  return (
    <section id="resume" className="pb-5">
      <div className="col-md-12 mx-auto">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span className="text-black" style={{ textAlign: "center" }}>
              Expirience
            </span>
          </h1>
        </div>
      </div>
      <div className="col-md-8 mx-auto">
        <VerticalTimeline>
          {work}
          <VerticalTimelineElement
            iconStyle={{
              background: "#AE944F",
              color: "#fff",
              textAlign: "center",
            }}
            icon={<i className="fas fa-hourglass-start mx-auto experience-icon"></i>}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
}
