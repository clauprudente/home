import React from "react";
import Profile from "../../editable-stuff/Profile.jpg"

import {
  aboutHeading
} from "../../editable-stuff/configurations.json";
const divStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
};
const AboutMe = () => {
  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'#f7f7f7'}}>
      <div className="container container-fluid">
        <div className="row" style={divStyle}>
            <div className="col-5 d-none d-lg-inline align-self-center">
              <img
                className="border border-secondary rounded-circle"
                src={Profile}
                alt="profilepicture"
                width="375"
                height="375"
              />
            </div>
            <div className="col d-lg-inline align-self-center">
            <h1 className="display-4 mb-5 text-center">{aboutHeading}</h1>
            <h4>Hello World! <span role="img" aria-label="Emoji">👋</span></h4>
            <p className="lead">
              <span role="img" aria-label="Emoji">💼</span> I'm currently working as a Front-end developer and UI designer.<br></br>
              <span role="img" aria-label="Emoji">💪</span> Learning Javascript and their frameworks<br></br>
              <span role="img" aria-label="Emoji">🏠</span> Based in São Paulo - Brasil<br></br>
              <span role="img" aria-label="Emoji">👩</span> Pronouns: <strong>She|Her|Ela</strong></p><br/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
