import React, { Component } from 'react';
import {Icon, InlineIcon} from '@iconify/react';
import speedometerIcon from '@iconify/react/mdi/speedometer';
import cellphoneLink from '@iconify/react/mdi/cellphone-link';
import liightBulbOutline from '@iconify/react/mdi/lightbulb-outline'
import rocketIcon from '@iconify/react/mdi/rocket'
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="container flex">
            <div className="title waypoint animated slide-in-left" data-animation="slide-in-left">
               <h3> ABOUT</h3>
            </div>
            <div className="title-bar waypoint animated slide-in-left" data-animation="slide-in-left" data-delay=".5s"></div>
         </div>
         <div className="row">
            <div className="six columns">
               <div className="six columns center">
                  <div className="hex-wrap">
                     <div className="hexagon">
                        <Icon className="hex-icon" icon={speedometerIcon} color="white"></Icon>
                     </div>
                  </div>
                  
                  <div className="hex-text" data-animation="fade-in">
                     <div className="hex-text-title">Fast</div>
                     <div>Fast load times and lag free interaction, my highest priority.</div>
                  </div>
                  
               </div>
               <div className="six columns center">
                  <div className="hex-wrap">
                     <div className="hexagon">
                        <Icon className="hex-icon" icon={cellphoneLink} color="white"></Icon>
                     </div>
                  </div>

                  <div className="hex-text" data-animation="fade-in">
                     <div className="hex-text-title">Responsive</div>
                     <div>My layouts will work on any device, big or small.</div>
                  </div>
               </div>
            </div>

            <div className="six columns">
            <div className="six columns center">
                  <div className="hex-wrap">
                     <div className="hexagon">
                        <Icon className="hex-icon" icon={liightBulbOutline} color="white"></Icon>
                     </div>
                  </div>
                  
                  <div className="hex-text" data-animation="fade-in">
                     <div className="hex-text-title">Intuitive</div>
                     <div>Strong preference for easy to use, intuitive UX/UI.</div>
                  </div>
                  
               </div>
               <div className="six columns center">
                  <div className="hex-wrap">
                     <div className="hexagon">
                        <Icon className="hex-icon" icon={rocketIcon} color="white"></Icon>
                     </div>
                  </div>

                  <div className="hex-text" data-animation="fade-in">
                     <div className="hex-text-title">Dynamic</div>
                     <div>Websites don't have to be static, I love making pages come to life.</div>
                  </div>
               </div>
            </div>
         </div>
         <div className="row">
            
            <div className="six columns">
               <div className="profile-image">
                  <img className="profile-pic"  src="images/profilepic1.png" alt="" />
               </div>

            </div>

            <div className="six columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}