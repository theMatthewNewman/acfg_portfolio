import classes from "./Home.module.css";
import {useState} from "react";
import BlueBox from "../ui/BlueBox.js";
import GrayBox from "../ui/GrayBox.js";
import YouTube from 'react-youtube';

const Home = props => {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
          autoplay: 1,
      },
    };
    const [quote, setQuote] = useState({
	author: "Mingyur Rinpoche",
	content: "Ultimately, happiness comes down to choosing between the discomfort of becoming aware of your mental afflictions and the discomfort of being ruled by them.",
	thoughts: <div><p>I used to work at a small grocery store. I would spend long hours not doing much besides staring at a wall and thinking about my day. I would meditate alot because I didn't have anything else to do. Whenever I noticed a thought I would make a mental note of it and move on. I noticed that in the mornings when I first got in to work I would be happy. I would be thinking about whatever I was doing before, or maybe a movie I watched last night.</p> <p> After a couple hours passed I would start feeling bored. I would think "This sucks I just want work to be over ". When I noticed these thoughts though I realized that their really wasn't any real difference between what I was doing now and what I was doing when I first got into work. I was staring at the same wall and standing in front of the same register. The only difference between when I was happy and when I was bored was what I was thinking about.</p><p> I could just have easily spent my entire shift thinking about that movie, or not thought about anything and aprecieted the paint on the wall. I will never think about boredom the same way again.</p></div>
    })
    return(
	<div className={classes.content}>
	  <div className={classes.welcome}>
	    <BlueBox>
	      <h1>Welcome:</h1>
	      <strong>
		<p>My name is Matthew Newman and I am a software developer living and working in the Philadelphia area.  I love making websites, games, and pretty much anything creative.  I know how to use React and Django.  Let me know what I can do for you or your buisness.</p>
		<p>I am also a big fan of meditation, reading, and meeting new people. Got something cool that you want to share? I'm all ears.</p>
	      </strong>
	    </BlueBox>
	  </div>
	  <div className={classes.quote}>
	    <h2>{quote.content}</h2>
	    <h2 className={classes.author}>-{quote.author}</h2>
	    <div className={classes.thoughts}><h3>My Thoughts:</h3>
	      {quote.thoughts}</div>
	  </div>
	  <div className={classes.video}>
	    <GrayBox>
	      <h1>How to make a cube in css:</h1>
	      <div className={classes.player}>
		<YouTube className={classes.vid} videoId="XayP7NJ4knU" opts={opts} onReady={(event) => event.target.pauseVideo()} />
	      </div>
	      <p>You can check out my Youtube channel <a href="https://www.youtube.com/channel/UCFJUVDv4A3FkvdntRgi5joA">here.</a> I make coding tutorial videos. Come check it out!</p>
	      <p>This video is about how to use the transform property in css to make a 3 dimensional cube that rotates in space.</p>
	    </GrayBox>
	  </div>
	</div>
    )
}

export default Home;
