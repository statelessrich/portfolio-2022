import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowAltCircleRight, faEnvelope, faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./app.css";
import AptensioScreen from "./img/aptensioxr-screen.png";
import BreakawayScreen from "./img/breakaway-screen.png";
import DiscoverLogo from "./img/discover-logo.png";
import FulgentScreen from "./img/fulgent-screen.png";
import HarmonicScreen from "./img/harmonic-screen.png";
import MealzDesign from "./img/mealz-design.png";
import MealzScreen from "./img/mealz-screen.png";
import MetlifeLogo from "./img/metlife-logo.png";
import MountainsDesign from "./img/mountains-design.png";
import MountainsScreen from "./img/mountains-screen.png";
import PlaywhatScreen from "./img/playwhat-screen.png";
import PlaywhatAIScreen from "./img/playwhatai-screen.png";
import PNCLogo from "./img/pnc-logo.png";
import ProgressiveLogo from "./img/progressive-logo.png";
import SellerationScreen from "./img/selleration-screen.png";
import SNCScreen from "./img/snc-screen.png";
import TravelScreen from "./img/travel-screen.png";
import VocabifyScreen from "./img/vocabify-screen.png";

function App() {
  return (
    <div className="app">
      {/* header */}
      <div className="header">
        <div className="title">
          <h1>
            <b>richard pires</b>
          </h1>
          <h2>front-end developer</h2>
        </div>

        {/* links */}
        <div className="links">
          {/* github */}
          <a href="https://github.com/statelessrich" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>

          {/* linkedin */}
          <a href="http://www.linkedin.com/in/richardpires" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          {/* email */}
          <a href="mailto:richardjpires@gmail.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>

          {/* resume */}
          <a
            href="https://drive.google.com/file/d/12E2enC-sAiVOgtxel74k5B_plgrcV7_m/view?usp=sharing"
            className="btn text-center resume-link"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFileLines} />
            &nbsp;resume
          </a>
        </div>
      </div>

      {/* portfolio */}
      <div className="portfolio">
        {/* other clients */}
        <div className="other">
          <h2>clients</h2>
          <div className="list">
            <img src={PNCLogo} alt="pnc"></img>
            <img src={MetlifeLogo} alt="metlife"></img>
            <img src={ProgressiveLogo} alt="progressive"></img>
            <img src={DiscoverLogo} alt="discover"></img>
          </div>
        </div>

        <h2>portfolio</h2>

        <div className="screens">
          {/* vocabify */}
          <div className="screen">
            <img src={VocabifyScreen} alt="vocabify" />
            <div className="legend">
              OpenAI and speech recognition-powered vocabulary learning app built with React/Remix.
              <br />
              <br />
              <a href="https://vocabify.vercel.app/" target="_blank" rel="noreferrer">
                Demo
              </a>
            </div>
          </div>

          {/* playwhatai */}
          <div className="screen">
            <img src={PlaywhatAIScreen} alt="playwhatai" />
            <div className="legend">
              OpenAI-powered video game curation app built with React/Next.js.
              <br />
              <br />
              <a href="https://playwhatai.vercel.app/" target="_blank" rel="noreferrer">
                Demo
              </a>
            </div>
          </div>

          {/* playwhat */}
          <div className="screen">
            <img src={PlaywhatScreen} alt="playwhat" />
            <div className="legend">
              Video game database search engine built with React/Redux/React Query.
              <br />
              <br />
              <a href="https://statelessrich.github.io/playwhat/" target="_blank" rel="noreferrer">
                Demo
              </a>
            </div>
          </div>

          {/* harmonic */}
          <div className="screen">
            <img src={HarmonicScreen} alt="harmonic financial technologies" />
            <div className="legend">
              Insurance quoting and policy management app built with React.
              <br />
              <br />
              <a href="https://safetynetcommunity.org" target="_blank" rel="noreferrer">
                Live
              </a>
            </div>
          </div>

          {/* snc */}
          <div className="screen">
            <img src={SNCScreen} alt="safety net community" />
            <div className="legend">
              Insurance quoting and policy management app built with React.
              <br />
              <br />
              <a href="https://safetynetcommunity.org" target="_blank" rel="noreferrer">
                Live
              </a>
            </div>
          </div>

          {/* fulgent */}
          <div className="screen">
            <img src={FulgentScreen} alt="fulgent" />
            <div className="legend">Healthcare marketing website built with HTML/SASS/Gulp</div>
          </div>

          {/* selleration */}
          <div className="screen">
            <img src={SellerationScreen} alt="selleration" />
          </div>

          {/* aptensio xr */}
          <div className="screen">
            <img src={AptensioScreen} alt="aptensio xr" />
          </div>

          {/* amgen */}
          <div className="screen">
            <img src={BreakawayScreen} alt="amgen" />
          </div>

          {/* travel site */}
          <div className="screen">
            <img src={TravelScreen} alt="travel site" />
          </div>
        </div>

        {/* design to code */}
        <div className="design-to-code">
          <div className="design-image image-container">
            <img src={MealzDesign} alt="mealz" />
            <h2>Figma</h2>
          </div>

          <FontAwesomeIcon icon={faArrowAltCircleRight} />

          <div>
            <div className="screen-image image-container">
              <img src={MealzScreen} alt="mealz" />
              <div className="legend">
                Landing page for a food delivery app
                <br />
                <br />
                <a href="https://mealz-landing-page.vercel.app/" target="_blank" rel="noreferrer">
                  Demo
                </a>
              </div>
            </div>
            <h2>Code</h2>
          </div>
        </div>

        {/* design to code */}
        <div className="design-to-code">
          <div className="design-image image-container large">
            <img src={MountainsDesign} alt="los angeles mountains" />
            <h2>Photoshop</h2>
          </div>

          <FontAwesomeIcon icon={faArrowAltCircleRight} />

          <div>
            <div className="screen-image image-container large">
              <img src={MountainsScreen} alt="los angeles mountains" />
              <div className="legend">
                Landing page for a tourist website
                <br />
                <br />
                <a href="https://los-angeles-mountains-sepia.vercel.app/" target="_blank" rel="noreferrer">
                  Demo
                </a>
              </div>
            </div>
            <h2>Code</h2>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="footer"></div>
    </div>
  );
}

export default App;
