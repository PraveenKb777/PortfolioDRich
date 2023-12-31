import { useEffect, useRef, useState } from "react";
import content from "../../assets/content";
import ScrollIdeas from "../NavBar/ScrollIdeas";

export default function TailScrollSection({ windowWidth }) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const tailRef = useRef(null);
  const { head, leftPara, rightPara } = content.tailContent;
  useEffect(
    (e) => {
      setWidth(Math.round(tailRef.current.offsetWidth));
      setHeight(Math.round(tailRef.current.offsetHeight));
    },
    [tailRef.current]
  );
  return (
    <section className="tail_main-cont" ref={tailRef}>
      <div className="tail_black-cont">
        {windowWidth > 600 &&
          [...Array(Math.round((width / 30) * (height / 30))).keys()].map(
            (e) => {
              return <div key={e} className="cubes" />;
            }
          )}
        <div className="tail_content_div">
          <div className="tail_content_left">
            <p>{head}</p>
            <h1>{leftPara.line1}</h1>
            <h1>{leftPara.line2}</h1>
            <h1>{leftPara.line3}</h1>
            {windowWidth > 600 && <div />}
          </div>
          <div className="tail_content_right">
            <h3>{rightPara}</h3>
            {windowWidth > 600 && <div />}
          </div>
        </div>
        {windowWidth < 600 && (
          <div className="scroll_ideas_tail">
            <ScrollIdeas />
          </div>
        )}
      </div>
    </section>
  );
}
