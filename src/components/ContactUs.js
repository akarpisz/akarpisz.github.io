import React, { Component } from "react";

export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">Feel free to contact me:</p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>
                <a href="https://drive.google.com/file/d/12w55Lj0ZgLhV2KkakDVLMNsygbMeF5hx/view?usp=sharing">
                  Resume{" "}<i className="fa fa-info-circle" />
                </a>
              </h4>
              <br />
              <h4>
                
                <a href={resumeData.socialLinks[0].url} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </h4>
              <br />
              <h4>
                <a href={resumeData.socialLinks[3].url} target="_blank" rel="noopener noreferrer">
                  {" "}
                  {resumeData.socialLinks[3].name}{" "}
                  <i className="fa fa-envelope-o" />
                </a>
              </h4>
              <br />
              <h4>Quick Peek At My Resume:</h4>
              <iframe src={process.env.PUBLIC_URL + "/AK-resume.pdf"} title="andrew karpisz resume" width="200%" height="500px">
    </iframe>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
