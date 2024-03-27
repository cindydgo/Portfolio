import Marquee from "react-fast-marquee";
import ReactIcon from "../../assets/icons/react-icon.png";
import BootstrapIcon from "../../assets/icons/bootstrap-icon.png"
import JavaScriptIcon from "../../assets/icons/js-icon.png"
import HTMLIcon from "../../assets/icons/html-icon.png"
import CSSIcon from "../../assets/icons/css-icon.png"
import FigmaIcon from "../../assets/icons/figma-icon.png"
import "./Skills.css"

const Skills = () => {
    return(
        <div className="skills-container">
            <Marquee 
                gradient={false}
                speed={80}
                delay= {0}
                pauseOnHover={true}
            >
                <div className="d-flex skills-icon">
                    <div>
                        <img src={JavaScriptIcon} alt="JavaScript icon"/>
                        <h6 className="fw-bold">JS</h6>
                    </div>
                    <div>
                        <img src={ReactIcon} alt="React icon"/>
                        <h6 className="fw-bold">React</h6>
                    </div>
                    <div>
                        <img src={BootstrapIcon} alt="Bootstrap icon"/>
                        <h6 className="fw-bold">Bootstrap</h6>
                    </div>
                    <div>
                        <img src={HTMLIcon} alt="HTML icon"/>
                        <h6 className="fw-bold">HTML</h6>
                    </div>
                    <div>
                        <img src={CSSIcon} alt="CSS icon"/>
                        <h6 className="fw-bold">CSS</h6>
                    </div>
                    <div>
                        <img src={FigmaIcon} alt="Figma icon"/>
                        <h6 className="fw-bold">Figma</h6>
                    </div>
                </div>
            </Marquee>
        </div>
    )
}

export default Skills