import React from "react";
import "./app.scss";
import FulgentScreen from "./img/fulgent-screen.png";
import SellerationScreen from "./img/selleration-screen.png";
import HarmonicScreen from "./img/harmonic-screen.png";
import SNCScreen from "./img/snc-screen.png";
import TravelScreen from "./img/travel-screen.png";
import AptensioScreen from "./img/aptensioxr-screen.png";
import BreakawayScreen from "./img/breakaway-screen.png";
import PlaywhatScreen from "./img/playwhat-screen.png";
import PNCLogo from "./img/pnc-logo.png";
import MetlifeLogo from "./img/metlife-logo.png";
import ProgressiveLogo from "./img/progressive-logo.png";
import DiscoverLogo from "./img/discover-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

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
            href="https://docs.google.com/document/d/17VhtHY2WHnXN_xwfmoPisekOIoQfvVJ1/edit?usp=sharing&ouid=104507859562980392117&rtpof=true&sd=true"
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
        <h2>portfolio</h2>

        <div className="screens">
          {/* harmonic */}
          <div className="screen">
            <img src={HarmonicScreen} alt="harmonic financial technologies" />
          </div>

          {/* snc */}
          <div className="screen">
            <img src={SNCScreen} alt="safety net community" />
          </div>

          {/* fulgent */}
          <div className="screen">
            <img src={FulgentScreen} alt="fulgent" />
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

          {/* playwhat */}
          <div className="screen">
            <img src={PlaywhatScreen} alt="playwhat" />
          </div>
        </div>

        {/* other clients */}
        <div className="other">
          <h2>other clients</h2>
          <div className="list">
            <img src={PNCLogo} alt="pnc"></img>
            <img src={MetlifeLogo} alt="metlife"></img>
            <img src={ProgressiveLogo} alt="progressive"></img>
            <img src={DiscoverLogo} alt="discover"></img>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="footer"></div>
    </div>
  );
}

export default App;
