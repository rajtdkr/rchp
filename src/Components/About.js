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
            <h1 style={{color : '#ffffff'}}>Our Causes</h1>

            <p>{bio}</p>

             <p>
                 This is official page of Rotary Club of Himalaya Patan, Chartered on 17 September 2003 at Rotary International. Club No. # 63381 District 3292 Nepal/Bhutan.
             </p>

         </div>
          <div className="three columns">
            <img className="profile-pic"  src={profilepic}  alt="Raj Tandukar Pic" />
         </div>
      </div>

   </section>
    );
  }
}

export default About;
