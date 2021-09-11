import React, { Component } from 'react';
class Extras extends Component {
  render() {

    if(this.props.data){
      var Extras = this.props.data.Extras.map(function(Extras){
        return  <li key={Extras.user}>
            <blockquote>
               <p>{Extras.text}
                   <h6 style={{color : "#ffffff"}}>{Extras.user}</h6></p>

            </blockquote>
         </li>
      })
    }

    return (
      <section id="Extras">

      <div className="text-container">
         <div className="row">

            <div className="twelve columns">
                <h1  style={{color : '#95A3A3', fontSize : "40px"}}>Board Members</h1>
                      {Extras}

               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Extras;
