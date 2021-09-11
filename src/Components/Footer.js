import React, { Component } from 'react';
import { CaretUpOutlined  } from '@ant-design/icons'

class Footer extends Component {
  render() {

    if(this.props.data){

      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer >

     <div className="row"  style = {{paddingRight : '350px'}}>
        <div className="twelve columns" >
           <ul className="social-links">
              {networks}
           </ul>

           <ul className="copyright" >
                  <h1 style={{color : '#95A3A3'}}>Contact Details</h1>
                  <p className="address">
						   <span>Patan Dhoka, Lalitpur</span>
                           <br />
						         State 3. Nepal
                           <br />

                     <span>Email: rchpnepal@gmail.com</span>
					   </p>

              <li>&copy; Copyright</li>
              {/*<li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>*/}
               <li>Rotaract Club of Himalaya Patan</li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"><CaretUpOutlined /></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
