import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Homecontent() {
  return (
    <div className="container">
      
      <h1>Introducing Our Features</h1>
      
        <p>We understand the importance of innovation and professionlism and work with the
          best people to achive this.
        </p>
      <div className="box">
      <i className="bi bi-people-fill"></i>
        <h2>Professional Team</h2>
        <p>Dynamic construction team leveraging expertise and innovation to build excellence from foundation to completion.</p>
      </div>
      <div className="box">
      <i className="bi bi-telephone "></i>
      <h2>24/7 Support</h2>
        <p>Round-the-clock support ensuring uninterrupted construction progress with responsive solutions and expertise.</p>
        </div>
      <div className="box">
      <i className="bi bi-minecart-loaded"></i>
      <h2>Construction</h2>
        <p>Pioneering construction solutions, seamlessly transforming blueprints into reality with precision and expertise.</p>
      </div>
      <div className="box">
      <i className="bi bi-building"></i>
      <h2>Buildibg</h2>
        <p>Elevating visions into structures, our expert builders craft enduring spaces with precision and innovation.</p>
      </div>
      <div className="box">
      <i className="bi bi-piggy-bank-fill"></i>
      <h2>Affordable Price</h2>
        <p>Quality construction at budget-friendly rates, delivering affordability without compromising excellence."</p>
      </div>
      <div className="box">
      <i className="bi bi-gear-fill"></i>
      <h2>Engineering</h2>
        <p>Engineered excellence, where innovation meets precision, driving construction projects to new heights.</p>
      </div>
      <div className="about ">
        <h2>About</h2>
      <p>"With a rich legacy spanning over 8 to 10 years, our construction company stands as a testament to expertise, reliability, and unwavering commitment to delivering exceptional projects. We bring a wealth of experience to every endeavor, ensuring quality, precision, and client satisfaction in every construction milestone.</p>
      <p>Backed by a decade of expertise, our construction endeavors epitomize unparalleled quality, blending innovative solutions with meticulous craftsmanship. From groundbreaking designs to flawless execution, we pride ourselves on the finesse embedded in every facet of our work. Our commitment to excellence drives us to set new benchmarks, creating spaces that harmonize innovation, functionality, and aesthetic appeal.</p>
      </div>
    </div>
  );
}

export default Homecontent
