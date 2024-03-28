import React, {useContext, useState} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import { FcMusic } from 'react-icons/fc';
import { TbMusicPause } from "react-icons/tb";
import { TbMusic } from "react-icons/tb";
import song from "../../assets/audio/song_2.mp3";

import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import { FcViewDetails, FcPhone, FcBriefcase, FcMindMap } from "react-icons/fc";
import Sound from 'react-sound';
import {
  greeting,
  workExperiences,
  bigProjects,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewProjects = bigProjects.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          {/* <span className="grey-color"> &lt;</span> */}
          <span className="grey-color">{greeting.username}</span>
          {/* <span className="grey-color">/&gt;</span> */}
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>

                
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">
                <FcMindMap/> Skills
                </a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">
                <FcBriefcase /> Work Experiences
                </a>
            </li>
          )}
          {viewProjects && (
            <li>
              <a href="#projects">
              <FcMindMap/> Projects
              </a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">Open Source</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">Talks</a>
            </li>
          )}
          <li>
              <a href="https://docs.google.com/document/d/1vZ6JWfWrGspEN8fi70cvSwvBX7BHWs6LxdU9bQCXq24"
              target="_blank">
              <FcViewDetails /> Resume
              </a>
          </li>
          <li>
            <a href="#contact">
              <FcPhone /> Contact Me
            </a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
          
        </ul>

        <div className="music-icon-container">
          <a href="#" onClick={toggleAudio}>
            {isPlaying ? (
                          <TbMusicPause/>
                        ) : (
                          <FcMusic/>
              )}
          </a>
          
          <Sound
            url={song}
            playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.PAUSED}
            volume={35}
            loop={true}
          />
        
        </div>
      </header>
    </Headroom>
  );
}
export default Header;
