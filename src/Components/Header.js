import React, { Component } from 'react';
import {CaretUpOutlined} from "@ant-design/icons";
import { FacebookOutlined  } from '@ant-design/icons'

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#projects">RCHP Projects</a></li>
            <li><a className="smoothscroll" href="#Extras">Meet the Board</a></li>
            <li><a className="smoothscroll" href="#contactus">Contact Us</a></li>

         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text"><div className="three columns">
            <img className="profile-pic"  src="images/rotaryinternationallogo.png"  alt="Raj Tandukar Pic" />
         </div>
            <h1 style={{paddingBottom : '10%', fontSize: '70px', color : '#1b234a'}}>{name}</h1>


            <div style={{paddingBottom : '30%', color : '#000000' , fontWeight: "bold", fontSize: '25px' , fontFamily : 'monospace'}}><span>{occupation}</span></div>
            <hr />

              <div  ><a  style={{color : '#f06000', fontSize : '20px', fontFamily: 'monospace'}} href="https://www.facebook.com/rotaryclubofhimalayapatan">Connect to us on facebook <FacebookOutlined /></a></div>

         </div>
      </div>


     <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
