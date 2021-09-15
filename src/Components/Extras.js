import React, { Component } from 'react';
class Extras extends Component {
  render() {

    if(this.props.data){
      var Extras = this.props.data.Extras.map(function(Extras){
        return  <li key={Extras.user}>
            <blockquote>
               <p> <h4  style={{color : '#ffcd15'}}>{Extras.text}</h4>
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
                <h1  style={{color : '#ffcd15', fontSize : "40px"}}>Board Members</h1>
                   <h4  style={{color : '#ffcd15', paddingTop : '40px'}}> Rtn. Uraj Nakarmi </h4>
                   <h6 style={{color : "#ffffff"}}> President </h6>
                <div className="six columns">
                    <h4  style={{color : '#ffcd15', paddingTop: '25px'}}>Rtn. Suresh Man Maharjan</h4>
                   <h6 style={{color : "#ffffff"}}>Immediate Past President</h6>
                </div>
                 <div className="six columns">
                     <h4  style={{color : '#ffcd15', paddingTop: '25px'}}>Rtn. Prabin Amatya</h4>
                   <h6 style={{color : "#ffffff"}}>President Elect</h6>
                 </div>
                <div className="six columns">
                    <h4  style={{color : '#ffcd15', paddingTop: '25px'}}>Rtn. Ishwor Manandhar</h4>
                   <h6 style={{color : "#ffffff"}}>Vice President</h6>
                </div>
                 <div className="six columns">
                     <h4  style={{color : '#ffcd15', paddingTop: '25px'}}>Rtn. Sonu S. Bajracharya</h4>
                   <h6 style={{color : "#ffffff"}}>Secretary</h6>
                 </div>
                <div className="six columns">
                    <h4  style={{color : '#ffcd15', paddingTop: '25px'}}>Rtn. Sumedh Shakya</h4>
                   <h6 style={{color : "#ffffff"}}>Jt. Secretary</h6>
                </div>
                 <div className="six columns">
                     <h4  style={{color : '#ffcd15', paddingTop: '25px'}}>Immediate Past President</h4>
                   <h6 style={{color : "#ffffff"}}>Rtn. Prabin Amatya</h6>
                 </div>
                <div className="six columns">
                    <h4  style={{color : '#ffcd15', paddingTop: '25px'}}>Rtn. Kaskhi Burlakoti</h4>
                   <h6 style={{color : "#ffffff"}}>Treasurer</h6>
                </div>
                 <div className="six columns">
                     <h4  style={{color : '#ffcd15', paddingTop: '25px'}}>Rtn. Sanjeev Shakya</h4>
                   <h6 style={{color : "#ffffff"}}>Jt. Tresarer</h6>
                 </div>
                <div className="six columns">
                    <h4  style={{color : '#ffcd15', paddingTop: '25px'}}>Rtn. Shova Shakya Bajracharya</h4>
                   <h6 style={{color : "#ffffff"}}>Club Administration</h6>
                </div>
                 <div className="six columns">
                     <h4  style={{color : '#ffcd15', paddingTop: '25px'}}>Rtn. Raju Byanjankar</h4>
                   <h6 style={{color : "#ffffff"}}>Director: Club Membership</h6>
                 </div>
                <div className="six columns">
                    <h4  style={{color : '#ffcd15', paddingTop: '25px'}}>Rtn. Rakesh Lal Shingh</h4>
                   <h6 style={{color : "#ffffff"}}>Public Relation</h6>
                </div>
                 <div className="six columns">
                     <h4  style={{color : '#ffcd15', paddingTop: '25px'}}>Rtn. Dr. Grishma Bajracharya</h4>
                   <h6 style={{color : "#ffffff"}}>Director: Service Project</h6>
                 </div>
                <div className="six columns">
                    <h4  style={{color : '#ffcd15', paddingTop: '25px'}}>Rtn. Sanam Shakya</h4>
                   <h6 style={{color : "#ffffff"}}>Director-TRF</h6>
                </div>
                 <div className="six columns">
                     <h4  style={{color : '#ffcd15', paddingTop: '25px'}}>Rtn. Nabin Man Shrestha</h4>
                   <h6 style={{color : "#ffffff"}}>Sgt-at-arms</h6>
                 </div>
                <div className="six columns">
                    <h4  style={{color : '#ffcd15', paddingTop: '25px'}}>Rtn. Yogendra Chitrakar</h4>
                   <h6 style={{color : "#ffffff"}}>Club Trainer</h6>
                </div>
                 <div className="six columns">
                     <h4  style={{color : '#ffcd15', paddingTop: '25px'}}>Rtn. Rajendra Tandukar</h4>
                   <h6 style={{color : "#ffffff"}}>Club Mentor</h6>
                 </div>
                <div className="six columns">
                     <h4  style={{color : '#ffcd15', paddingTop: '25px'}}>Rtn. Govinda Singh</h4>
                   <h6 style={{color : "#ffffff"}}>Editor</h6>
                 </div>
                 <div className="six columns">
                     <h4  style={{color : '#ffcd15', paddingTop: '25px'}}></h4>
                   <h6 style={{color : "#ffffff"}}></h6>
                 </div>


            </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Extras;
