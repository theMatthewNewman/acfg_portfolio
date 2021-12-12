
import classes from "./Content.module.css";
import {Context} from "../../Store.js";
import {useContext} from 'react';
import Home from "../pages/Home.js";
import Resume from "../pages/Resume.js";
import Contact from "../pages/Contact.js";
import Projects from "../pages/Projects.js";
import Blog from "../pages/Blog.js";
import About from "../pages/About.js";

const Content = props => {
    const[page, setPage] = useContext(Context)
    return(
	<div className={classes.content}>
	  {page==="Home" ? <Home /> : null}
	  {page==="Resume" ? <Resume /> : null}
	  {page==="Contact" ? <Contact /> : null}
	  {page==="Projects" ? <Projects /> : null}
	  {page==="Blog" ? <Blog /> : null}
	  {page==="About" ? <About /> : null}
	  
	  
	</div>
    )
}

export default Content;
