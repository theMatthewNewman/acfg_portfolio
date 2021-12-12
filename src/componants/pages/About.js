import bitSelf from "../../images/bitSelf.gif";
import classes from "./About.module.css";
import BlueBox from "../ui/BlueBox.js";

const About = props =>{
    return(
	<BlueBox>
	  <div className={classes.box}>
	    <img alt="8-bit of the website creator" src={bitSelf} className={classes.image} />
	    <div className={classes.sidebar}>
	      <p>this is going in the side bar</p>
	      <a href="https://twitter.com/theMatNewman" target="_blank" rel="noopener noreferrer">Twitter</a>
	    </div>
	    <div className={classes.content}>
	      <h1>Education:</h1>
	      <hr/>
	      <ul>
		<li>Conestoga High School: Class of 2014</li>
		<li>Associates in Mechanical Engineering: Deleware County Communite Collage: 2016-2018</li>
		<li>Bachelors in Engineering Fundementals: Temple University: 2018-Present</li>
	      </ul>
	      <h1>Work History:</h1>
	      <hr/>
	      <h1>Coding:</h1>
	      <hr/>
	      <h1>Hobbies:</h1>
	      <hr/>
	    </div>
	  </div>
	</BlueBox>
    );
};

export default About;

