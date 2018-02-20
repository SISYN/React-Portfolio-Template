import React, { Component } from 'react';
import Mailto from './Mailto';
import NewWindow from './NewWindow';

import ContactInfo from './ContactInfo';
import MainProject from './MainProject';
import OtherProject from './OtherProject';
import FeaturedProject from './FeaturedProject';

import Skills from './Skills';
import Skill from './Skill';

import Work from './Work';
import Job from './Job';

import Quote from './Quote';

class Body extends Component {
  render() {
    return (
      <section className="margin-top-30">
        <div className="container">
          <div className="row">
            <div className="col-md-8">


              <div className="block">
                <h3 className="heading">About Me</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue massa vel ipsum scelerisque ornare.
                    Sed id ipsum at massa fringilla auctor sed ac nunc. Quisque et mauris suscipit, laoreet mi quis, consequat
                    lacus. Phasellus pretium eget ligula in scelerisque. Quisque ullamcorper quis arcu id gravida.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue massa vel ipsum scelerisque ornare.
                    Sed id ipsum at massa fringilla auctor sed ac nunc. Quisque et mauris suscipit, laoreet mi quis, consequat
                    lacus. Phasellus pretium eget ligula in scelerisque. Quisque ullamcorper quis arcu id gravida.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue massa vel ipsum scelerisque ornare.
                    Sed id ipsum at massa fringilla auctor sed ac nunc.
                  </p>
              </div>

              <div className="block">
                <FeaturedProject
                  title="Some really cool project" ribbonText="New"
                  subtitle="Give a brief description, some one-liner that really hooks the reader on your mission."
                  img="/circuit.jpg">
                  <p className="text-left margin-top-30">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue massa vel ipsum scelerisque ornare.
                    Sed id ipsum at massa fringilla auctor sed ac nunc. Quisque et mauris suscipit, laoreet mi quis, consequat
                    lacus. Phasellus pretium eget ligula in scelerisque. Quisque ullamcorper quis arcu id gravida.
                  </p>
                  <p className="text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue massa vel ipsum scelerisque ornare.
                    Sed id ipsum at massa fringilla auctor sed ac nunc. Quisque et mauris suscipit, laoreet mi quis, consequat
                    lacus. Phasellus pretium eget ligula in scelerisque. Quisque ullamcorper quis arcu id gravida.
                  </p>
                </FeaturedProject>
                <hr className="margin-top-50 margin-bottom-50" />
                <ul className="main-projects">
                  <MainProject title="Main Project #1" href="https://example.com" img="https://sisyn.com/media/img/able.png">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue massa vel ipsum scelerisque ornare.
                    Sed id ipsum at massa fringilla auctor sed ac nunc. Quisque et mauris suscipit, laoreet mi quis, consequat
                    lacus.
                  </MainProject>
                  <MainProject title="Main Project #2" href="https://example.com" img="https://sisyn.com/media/img/adom.jpg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue massa vel ipsum scelerisque ornare.
                    Sed id ipsum at massa fringilla auctor sed ac nunc. Quisque et mauris suscipit, laoreet mi quis, consequat
                    lacus.
                  </MainProject>
                </ul>
              </div>

              <div className="block">
                <h3 className="heading">Other Projects</h3>
                <OtherProject title="Other Project #1" href="https://example.com" openSource>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue massa vel ipsum scelerisque ornare.
                  Sed id ipsum at massa fringilla auctor sed ac nunc. Quisque et mauris suscipit, laoreet mi quis, consequat
                  lacus.
                </OtherProject>
                <OtherProject title="Other Project #2" href="https://example.com" openSource>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue massa vel ipsum scelerisque ornare.
                  Sed id ipsum at massa fringilla auctor sed ac nunc. Quisque et mauris suscipit, laoreet mi quis, consequat
                  lacus.
                </OtherProject>
                <OtherProject title="Other Project #3" href="https://example.com" openSource>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue massa vel ipsum scelerisque ornare.
                  Sed id ipsum at massa fringilla auctor sed ac nunc. Quisque et mauris suscipit, laoreet mi quis, consequat
                  lacus.
                </OtherProject>
                <OtherProject title="Other Project #4" href="https://example.com" openSource>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue massa vel ipsum scelerisque ornare.
                  Sed id ipsum at massa fringilla auctor sed ac nunc. Quisque et mauris suscipit, laoreet mi quis, consequat
                  lacus.
                </OtherProject>
                <NewWindow href="https://example.com" classes="btn btn-cta-secondary margin-top-30">
                  More at EXAMPLE.COM <i className="fa fa-chevron-right"></i>
                </NewWindow>
              </div>

              <Work>
                <Job title="CTO" company="Google" year="2017 - Now">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue massa vel ipsum scelerisque ornare.
                  Sed id ipsum at massa fringilla auctor sed ac nunc. Quisque et mauris suscipit, laoreet mi quis, consequat
                  lacus.
                </Job>
                <Job title="Lead Director of Engineering" company="Apple" year="2013 - 2015">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue massa vel ipsum scelerisque ornare.
                  Sed id ipsum at massa fringilla auctor sed ac nunc. Quisque et mauris suscipit, laoreet mi quis, consequat
                  lacus.
                </Job>
                <Job title="Sr Full Stack Engineer" company="Microsoft" year="2012 - 2013">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue massa vel ipsum scelerisque ornare.
                  Sed id ipsum at massa fringilla auctor sed ac nunc. Quisque et mauris suscipit, laoreet mi quis, consequat
                  lacus.
                </Job>
              </Work>

            </div>
            <div className="col-md-4">

              <ContactInfo location="San Francisco, USA" email="you@example.com" website="https://example.com" />
              <Skills title="Skills">
                <p>
                  I worked with PHP &amp; MySQL for 10+ years, but my recent concentration
                  has been Node &amp; React with a focus in scalable real-time applications.
                </p>
                <ul className="skills">
                  <Skill skill="NodeJS + React" experience="Expert" ability="95" />
                  <Skill skill="PHP + MySQL" experience="Guru" ability="100" />
                  <Skill skill="JavaScript + jQuery" experience="Guru" ability="100" />
                  <Skill skill="Microcontrollers + Espruino" experience="Pro" ability="85" />
                </ul>
              </Skills>


              <div className="block">
                <h3 className="heading">Debugging playlist</h3>
                <ul className="playlist">
                  <li>
                    <i className="fa fa-headphones" />
                    <NewWindow href="https://www.youtube.com/watch?v=ph7oZnBH05s" text="Keeping the Faith - Billy Joel" inheritColor="true" />
                  </li>
                  <li>
                    <i className="fa fa-headphones" />
                    <NewWindow href="https://www.youtube.com/watch?v=5J7IrPVLc4U" text="Hey Nineteen - Steely Dan" inheritColor="true" />
                  </li>
                  <li>
                    <i className="fa fa-headphones" />
                    <NewWindow href="https://www.youtube.com/watch?v=lpdZvewjwJs" text="Doing it All for my Baby - Huey Lewis" inheritColor="true" />
                  </li>
                  <li>
                    <i className="fa fa-headphones" />
                    <NewWindow href="https://www.youtube.com/watch?v=6yYchgX1fMw" text="Matter of Trust - Billy Joel" inheritColor="true" />
                  </li>
                  <li>
                    <i className="fa fa-headphones" />
                    <NewWindow href="https://www.youtube.com/watch?v=bnVXIUyshng" text="She's Gone - Hall &amp; Oates" inheritColor="true" />
                  </li>
                  <li>
                    <i className="fa fa-headphones" />
                    <NewWindow href="https://www.youtube.com/watch?v=hSq4B_zHqPM" text="The River of Dreams - Billy Joel" inheritColor="true" />
                  </li>
                </ul>
              </div>

              <div className="block">
                <h3 className="heading">Word of mouth</h3>
                <Quote author="Carl Sagan" authorCompany="The Best Show Ever">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed congue massa vel ipsum scelerisque ornare.
                  Sed id ipsum at massa fringilla auctor sed ac nunc.
                </Quote>
                <NewWindow href="https://example.com">
                  <i className="fas fa-external-link-alt margin-right-5" />
                  More on LinkedIn
                </NewWindow>
              </div>

              <div className="block">
                <h3 className="heading">Education</h3>
                <div className="education">
                  <i className="fa fa-graduation-cap" />
                  <span>
                    <h4 className="sub-heading">PhD Neuroscience</h4>
                    <p>The University of Nowhere <small>(1989-1992)</small></p>
                  </span>
                </div>
              </div>


              <div className="block">
                <h3 className="heading">Credits</h3>
                <ul className="credits">
                  <li>
                    <i className="fas fa-external-link-alt" />
                    <NewWindow href="https://github.com/facebook/react" text="React" inheritColor="true" />
                  </li>
                  <li>
                    <i className="fas fa-external-link-alt" />
                    <NewWindow href="https://github.com/twbs" text="Bootstrap" inheritColor="true" />
                  </li>
                  <li>
                    <i className="fas fa-external-link-alt" />
                    <NewWindow href="http://themes.3rdwavemedia.com/" text="Xiaoying Riley" inheritColor="true" />
                  </li>
                </ul>
                <hr className="margin-top-30 margin-bottom-30" />
                <h4 className="sub-heading">Like this template?</h4>
                <p className="text-muted">
                  This is a React version of the popular
                  template by <NewWindow href="http://themes.3rdwavemedia.com/" text="Xiaoying Riley" />
                  rebuilt from scratch and optimized for react with no external
                  dependencies.
                </p>
                <p className="text-muted">
                  This bad boy is 100% React &amp; 100% Free under <NewWindow text="Creative Commons Attribution 3.0 Licensing" href="http://creativecommons.org/licenses/by/3.0/" />
                </p>
                <a href="#download" className="btn btn-cta-primary btn-download">
                  <i className="fa fa-download"></i>
                  Download now
                </a>
              </div>


            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Body;
