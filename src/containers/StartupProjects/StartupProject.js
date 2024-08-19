import React, { useContext, useState } from "react";
import "./StartupProjects.scss";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import StyleContext from "../../contexts/StyleContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';
import ArrowCircleLeftSharpIcon from '@mui/icons-material/ArrowCircleLeftSharp';
import Button from '@mui/material/Button';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



export default function StartupProject() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsToShow = 1;

  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    const win = window.open(url, "_blank");
    win.focus();
  }

  const { isDark } = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }

  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < bigProjects.projects.length ? prevIndex + 1 : 0
    );
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : bigProjects.projects.length - 1
    );
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          </div>
          <p className={isDark ? "dark-mode project-subtitle" : "subTitle project-subtitle"}>
            {bigProjects.subtitle}
          </p>

          <div className="project-carousel">
            
            <div className="projects-container">
              {bigProjects.projects.slice(currentIndex, currentIndex + projectsToShow).map((project, i) => (
                <div
                  key={i}
                  className={isDark ? "dark-mode project-card project-card-dark" : "project-card project-card-light"}
                >
                  <div className="title-and-arrows">
                      <Button className="carousel-control left" variant="contained" onClick={prevProject} startIcon={<ArrowCircleLeftSharpIcon />}>
                        Previous
                      </Button>
                      <h5 className={isDark ? "dark-mode card-title" : "card-title"}>{project.projectName}</h5>
                      <Button className="carousel-control right"variant="contained" onClick={nextProject} endIcon={<ArrowCircleRightSharpIcon/>}>
                        Next
                      </Button>
                  </div>

                  <div className="project-detail">
                    <ul className={isDark ? "dark-mode project-bullets" : "project-bullets"}>
                      {project.bullets.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                      ))}
                    </ul>
                    {project.footerLink && (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => (
                          <span key={i} className={isDark ? "dark-mode project-tag" : "project-tag"} onClick={() => openUrlInNewTab(link.url)}>
                            {link.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {project.imageDir && (
                    <Swiper
                    modules={[EffectCoverflow, Pagination]}
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                      rotate: 50,
                      stretch: 0,
                      depth: 100,
                      modifier: 1,
                      slideShadows: true,
                    }}
                    pagination={{
                      clickable: true // This enables clickable pagination dots
                    }}
                  >
                    {project.imageDir.map((image, index) => (
                      <SwiperSlide key={index}>
                        <img src={image} alt={`Project ${currentIndex} Image ${index}`} className="project-card-image" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
            
                  )}

                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </Fade>
  );
}
