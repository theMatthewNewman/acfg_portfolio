import classes from "./Projects.module.css";
import postitscreenshot from "../../images/post-it-screen-shot.png";
import {useState} from "react";
import ProjectPost from "../layout/ProjectPost.js";

const Projects = props => {
    const [projects, setProjects] = useState([
	{
	    name: "Post-It:",
	    image: postitscreenshot,
	    description: "Post-It is a platform for sharing short notes and stories. It uses the Giphy api to allow users to search for giphs which can the posted and commented on.",
	    github: "https://github.com",
	    live: "https://my-post-it.herokuapp.com/"
	}
    ]);

    return(
	<div className={classes.projectPage}>
	  {projects.map((project) => {
	      return(
		    <ProjectPost title={project.name}
				 image={project.image}
				 live={project.live}
				 github={project.github}
				 description={project.description}/>
	      )
	  })}
	</div>
    )
}

export default Projects;
