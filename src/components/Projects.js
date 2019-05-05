import React, { Component } from 'react';
export default class Projects extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="projects">
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item, index)=>{
                return(
                  <li key={index}>
                    <a href={item.url}>
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
          
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
    </section>
    );
  }
}