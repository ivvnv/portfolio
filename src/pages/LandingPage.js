import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../landing.css'

class Landing extends Component {
  render() {
    return(
<div className="container-fluid background-lp">
<section className="intro">
  
    <div className="container vertical-center letters-container">
    <p className="first-type"><span>I'</span><span>m</span></p>
    <p className="second-type"><span>I</span><span>v</span><span>a</span><span>n</span><span>a</span></p>
    <p className="first-type">
        <span>D</span><span>e</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>e</span><span>r</span>
    </p>
    <p className="first-type">
      
        <span>&amp;</span><span>d</span><span>e</span><span>s</span><span>i</span><span>g</span><span>n</span><span>e</span><span>r</span>
    </p>

    <p><Link to="/home">
      <i class="fas fa-arrow-right"></i></Link></p>
</div>
</section>
</div>




//     <div className="container-fluid background-lp">
      
//  {/* <p className="line anim-typewriter">Typewriter effect using css()</p> */}

//  <div class="row text-lp">
//    <p className="line1">I'M</p>
//    <p className="line2">IVANA</p>
//    <p className="line3">DEVELOPER</p>
//    <p className="line4">& DESIGNER</p>


//   </div>

// </div>
    )

  }
}

export default Landing;