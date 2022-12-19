import React from "react";

function Home() {
    return(
    <div>
    <div id="navbar">
        <img src="logo.svg" width="150px" height="50px"/>
        <nav id="navigation">
            <a>Adopt a Cat</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a>Find locations near you</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a>Pet Resources</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a>Get Involved</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a>|</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a>Favorite Pets</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a>Sign In</a>
        </nav>
        <img id="emptyprofileimage" src="Default_pfp.svg.png" width="40px" height="40px"/>
    </div>

    <div id="background-border">
        <h1 id="title">Find their <br></br>
            forever home.</h1>
        <img id="catimage" src="reachingcat.png" width="350px" height="200px"/>
    </div>

    <h1 id="featuredcatstext">Featured Cats</h1>
    <div id="featuredcatsimage">
        <img src="cat1.jpg" width="300px" height="300px"/>
        <img src="cat2.jpg" width="300px" height="300px"/>
        <img src="cat3.jpg" width="300px" height="300px"/>
    </div>
    <div id="featuredcatsnames">
        <h2 id="catname" style="position:absolute; top:-20px; left:152px;">Charlie</h2>
        <h2 id="catname2" style="position:absolute; top:-20px; left:608px;">Carol</h2>
        <h2 id="catname3" style="position:absolute; top:-20px; left:1062px;">Claus</h2>
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
                    <a className="ahref" href="">Site Map</a><br></br><br></br>
                    <a>Privacy Policy</a><br></br><br></br>
                    <a>Terms of Service</a><br></br><br></br>
                    <a>Cookies</a><br></br><br></br>
                    <a>Accessibility</a>
                </div>
            </div>
              <div className="item">
                <div className="content">
                  <h2>Shelters/Rescue</h2><br></br>
                  <a className="ahref" href="">Sign Up</a><br></br><br></br>
                  <a className="ahref" href="">Log In</a>
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
                <input style="height:25px;" id="mail" name="mail" type="email" placeholder="Enter Email"></input>
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
    </div>
    
    );
}

export default Home;