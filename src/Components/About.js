import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){

      var profilepic= "images/" + this.props.data.image;
      var bio = this.props.data.bio;

    }

    return (
      <section id="about">

      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src="images/rotaryinternationallogo.png"  alt="Raj Tandukar Pic" />
         </div>
         <div className="six columns main-col">
             <h1 style={{color : '#ffffff'}}>About us</h1>
              <p>
                 This is official website of Rotary Club of Himalaya Patan chartered  on 17 September 2003, with Biso Raj Bajracharya as the president of Rotary club of Himalaya patan, Club No. #63381 District 3290 Nepal/Bhutan at Rotary International.
             </p>

            <h1 style={{color : '#ffffff'}}>Our Causes</h1>

            <p>{bio}</p>



         </div>
          <div className="three columns">
            <img className="profile-pic"  src={profilepic}    alt="Raj Tandukar Pic" />
         </div>
      </div>

   </section>
    );
  }
}

export default About;
