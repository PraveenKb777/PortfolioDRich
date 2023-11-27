import { useState } from "react";
import content from "../../assets/content";
import NavBar from "../NavBar/NavBar";
import "./about.css";

const IcanDescCont = ({
  data = {
    id: "58822a64-5fc7-4eaf-ferg-ed3ec4fb6afe",
    no: "03",
    title: "The full package",
    desc: "Complete project from concept to final design, that’s what makes me stand out. My great sense of design skills enable me to create superlative projects.  ",
  },
}) => {
  return (
    <div className="ican_desc_cont">
      <h1 className="ican_head_no">{data.no}</h1>
      <div className="ican_divider_line" />
      <h3
        className="ican_sub_head "
        style={data.no === "03" ? { color: "var(--logo-green)" } : {}}
      >
        {data.title}
      </h3>
      <p className="ican_main_desc">{data.desc}</p>
    </div>
  );
};
export default function About() {
  const {
    title,
    heroVideo,
    idealogyheading,
    aboutPhoto,
    aboutPhotoDesc,
    icanHelpItems,
  } = content.about;
  const [videoHover, setVideoHover] = useState(false);

  const changeVideoHoverState = () => {
    setVideoHover((e) => !e);
  };

  return (
    <>
      <NavBar companyTextColor={videoHover ? "var(--menu-white)" : ""} />
      <video
        src={heroVideo}
        autoPlay={true}
        loop={true}
        muted
        className={`about_hero_bg_video ${videoHover ? "video_opacity" : ""}`}
      />
      <section className="about_main_cont" id="about">
        <section
          id="about_main"
          className="about_hero_cont"
          style={{ color: videoHover ? "var(--menu-white)" : "" }}
        >
          <h1 className="about_hero_main_heading">{title}</h1>
          <video
            src={heroVideo}
            autoPlay={true}
            loop={true}
            muted
            className="about_hero_small_video"
            onMouseEnter={changeVideoHoverState}
            onMouseLeave={changeVideoHoverState}
          />
        </section>
        <section id="about_ideologies" className="about_idea_main_cont">
          <div className="about_idea_top_head_cont">
            <p className="idea_head_text">{idealogyheading}</p>
            <p className="idea_head_subtext">Ever-venturing</p>
          </div>
          <div className="about_photo_cont">
            <p
              style={{ width: "41rem", alignSelf: "flex-end" }}
              className="idea_head_text"
            >
              {aboutPhotoDesc}
            </p>
            <img src={aboutPhoto} alt="about_photo" className="about_photo" />
          </div>
        </section>
        <section id="icanhelpyou" className="icanhelp_main_cont">
          <h1 className="idea_ican_text">I can help you with</h1>
          <div className="ican_desc_main_cont">
            {icanHelpItems.map((e) => (
              <IcanDescCont key={e.id} data={e} />
            ))}
          </div>
        </section>
      </section>
    </>
  );
}