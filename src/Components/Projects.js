import React, { Component } from 'react';
import { Card } from 'antd';
import { Divider } from '@material-ui/core';


class Projects extends Component {


  render() {
      const mystyle = {
          Width: 500,
          padding:30,
          background: '#ffffff',
          textAlign : 'left'
      }
      const gridStyle = {
          width: '25%',
        };
      const mystyle_cards={width : 200,
        }

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+ projects.image;

        return <div style={{width : '100%'}}>

           <Card  style={mystyle} bordered={true}>
        <div style={{width: '100%', overflow: 'hidden'}}>
               <h4 style={{lineHeight:"30px" , fontSize: 'x-large', fontWeight: 'bold'}}>{projects.title}</h4><br/>
               <a href={projects.url} title={projects.title} >
                   <div style={{width: '300px', float: 'left'}}>
               <img alt={projects.title} src={projectImage} style={mystyle_cards}/>
                   </div>


                   <div style={{marginLeft: '20px', textColor : '#ffffff'}}>
                       
                       <h6>{projects.description}</h6></div>
                </a>
            </div>
        </Card>
            <br/>
        </div>
      })
    }
    return (
      <section id="projects" style={{background : '#14394e'}}>
      <div className="row" style={{width : '100%'}}>
         <div className="twelve columns collapsed">
            <h1 style={{color : '#ffffff', paddingTop : '8%', paddingBottom: '3%'}}>Rotary Club of Himalaya Patan Projects</h1>
            <div >
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}
export default Projects;
