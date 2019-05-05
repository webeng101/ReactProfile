import React, { Component } from 'react';
import {Icon, InlineIcon} from '@iconify/react';
import speedometerIcon from '@iconify/react/mdi/speedometer';
import cellphoneLink from '@iconify/react/mdi/cellphone-link';
import liightBulbOutline from '@iconify/react/mdi/lightbulb-outline'
import rocketIcon from '@iconify/react/mdi/rocket'
import {CanvasJS, CanvasJSChart} from '../assets/canvasjs.react';
//var CanvasJSReact = require('../assets/canvasjs.react');
//var CanvasJS = CanvasJSReact.CanvasJS;

//var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default class About extends Component {
   addSymbols(e){
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
   }
  render() {
    let resumeData = this.props.resumeData;

    const options = {
      animationEnabled: true,
      theme: "light2",
      height:500,
      dataPointWidth: 25,
      title:{
         text: ""
      },
      axisX: {
         title: "",
         reversed: true,
         gridThickness:0,
         labelWrap:false,
         labelMaxWidth:200,
         labelAutoFit:true,
         interval: 1,
         tickLength:0,
         lineThickness:0

      },
      axisY: {
         title: "",
         gridThickness:0,
         tickLength:0,
         lineThickness:0,
         labelFormatter: function ( e ) {
            return " ";  
         }  
      },
      toolTip:{
         content:"{label}: {y}" ,
         contentFormatter: function (e) {
            var content = e.entries[0].dataPoint.label+ " : " + e.entries[0].dataPoint.y;
            if(e.entries[0].dataSeries.name=="DataSeries 2"){
               content = e.entries[0].dataPoint.label+ " : " + (100-e.entries[0].dataPoint.y);
            }
            return content;
         }
       },
      data: [{
         type: "stackedBar100",
         color: "#00A1A7",
         dataPoints: [
            { label: "CSS",  y: 85 },
            { label: "HTML",   y: 90 },
            { label: "React",   y: 80 },
            { label: "Javascript",   y: 90 },
            { label: "Angular",   y: 75 },
            { label: "Node.js",   y: 80 },
            { label: "Python",   y: 60 },
            { label: "PHP",   y: 70 },
            { label: "React Native",   y: 80 },
            { label: "iOS",   y: 70 },
            { label: "Android",   y: 60 },
            { label: "Asp.net",   y: 50 },
            { label: "JSP",   y: 40 },
         ]
      },{
         type: "stackedBar100",
         color: "#eee",
         indexLabel: "{y}%",
         indexLabelFontColor:"#666",
         yValueFormatString: "#,###.##",
         indexLabelPlacement:"right",
         dataPoints: [
            { label: "CSS",   y: 15  },
            { label: "HTML",   y: 10 },
            { label: "React",   y: 20 },
            { label: "Javascript",   y: 10 },
            { label: "Angular",   y: 25 },
            { label: "Node.js",   y: 20 },
            { label: "Python",   y: 40 },
            { label: "PHP",   y: 30 },
            { label: "React Native",   y: 20 },
            { label: "iOS",   y: 30 },
            { label: "Android",   y: 40 },
            { label: "Asp.net",   y: 50 },
            { label: "JSP",   y: 60 },
         ]
      }]
   }

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
            
            <div className="five columns">
               <div className="profile-image">
                  <img className="profile-pic"  src="images/profilepic1.png" alt="" />
               </div>
               <div className="hex-text-title center">Who's this guy?</div>
               <div className="hex-text">
               {
                 resumeData.aboutme
               }
               </div>

               <div className="row ">

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

            <div className="seven columns main-col chart-col">
                  <CanvasJSChart options = {options}/>
               
            </div>
         </div>
      </section>
    );
  }
}