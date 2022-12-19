import React, {useEffect, useState} from 'react';
import './index.css';
import Catlist from './Catlist.js';





const App = () => {
  const [cats, setCat] = useState([]);
 

  const Requestcat = async()=>{
    
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    console.log(data);
      setCat(data);
    }

    useEffect(() =>{
      Requestcat();
    },[]);


return(
  <>
  <div id="navbar">
    <img src='logo.svg' width="150px" height="50px" alt='logo'/>
    <nav id="navigation">
      <a>Adopt A Cat</a>&nbsp;&nbsp;&nbsp;&nbsp;
      <a>Find Locations Near You</a>&nbsp;&nbsp;&nbsp;&nbsp;
      <a>Pet Resources</a>&nbsp;&nbsp;&nbsp;&nbsp;
      <a>Get Involved</a>&nbsp;&nbsp;&nbsp;&nbsp;
      <a>|</a>&nbsp;&nbsp;&nbsp;&nbsp;
      <a>Favorite Pets</a>&nbsp;&nbsp;&nbsp;&nbsp;
      <a>Sign In</a>
    </nav>
    <img id="emptyprofileimage" src='Default_pfp.svg.png' alt='default pfp'></img>
  </div>

  <div id="background-border">
    <h1 id="title">Find their <br></br>
      forever home.</h1>
    <img id="catimage" src="reachingcat.png" width="350px" height="200px" alt='reaching cat'/>
  </div>

  <h1 id="featuredcatstext">Featured Cats</h1>
    <div id="featuredcatsimage">
        <Catlist cats={cats}/>
    </div>
    <div id="featuredcatsnames">
        <h2 id="catname">Charlie</h2>
        <h2 id="catname2">Carol</h2>
        <h2 id="catname3">Claus</h2>
    </div>

    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

    <footer>
        <div className="grid">
            <div className="item">
              <div className="content">
                <h2>Adopt A Cat</h2><br></br>
                <a>Spay and Neuter</a><br></br><br></br>
                <a>Rehome a cat</a><br></br><br></br>
                <a>Find a cat</a>
              </div>
            </div>
            <div className="item">
              <div className="content">
                <h2>Find locations near you</h2><br></br>
                <a>Nearby Locations</a>
              </div>
            </div>
            <div className="item">
              <div className="content">
                <h2>Pet Resources</h2><br></br>
                <a>Total cat manual</a><br></br><br></br>
                <a>Cat food sources</a><br></br><br></br>
                <a>Cat toys</a>
              </div>
            </div>
            <div className="item">
              <div className="content">
                <h2>Get involved</h2><br></br>
                <a>How to help</a>
              </div>
            </div>
            <div className="item">
                <div className="content">
                    <h2>Information</h2><br></br>
                    <a className="ahref">Site Map</a><br></br><br></br>
                    <a>Privacy Policy</a><br></br><br></br>
                    <a>Terms of Service</a><br></br><br></br>
                    <a>Cookies</a><br></br><br></br>
                    <a>Accessibility</a>
                </div>
            </div>
              <div className="item">
                <div className="content">
                  <h2>Shelters/Rescue</h2><br></br>
                  <a className="ahref">Sign Up</a><br></br><br></br>
                  <a className="ahref">Log In</a>
                </div>
            </div>
            <div className="item">
                <div className="content">
                  <h2>Our Organization</h2><br></br>
                  <a>About Us</a><br></br><br></br>
                  <a>Blog</a><br></br><br></br>
                  <a>Press Room</a><br></br><br></br>
                  <a>Contact</a>
                </div>
            </div>
          </div>

        <div id="newsletter">
            <h2>Subcribe to our newsletter!</h2><br></br>
            <form>
                <input class="form2input" id="mail" name="mail" type="email" placeholder="Enter Email"></input>
                <button type="submit">Submit</button>
            </form><br></br>
        </div>
        
        <a>
          <img id="logo" src="meta.png" width="25px" height="25px"/>
        </a>
        <a>
          <img id="logo2" src="instagram.png" width="25px" height="25px"/>
        </a>
        <a>
          <img id="logo3" src="twitter.png" width="25px" height="25px"/>
        </a>
        <a>
          <img id="logo4" src="youtube.png" width="25px" height="25px"/>
        </a>
    </footer>
    
  </>
)

}
      
  export default App;
