import classes from "./ProjectPost.module.css";

const ProjectPost = props => {
    return(
	<div className={classes.total}>
	  <div className={classes.title}>
	    <h1>{props.title}</h1>
	    <div className={classes.image}>
	      <img alt={props.title} src={props.image}/>
	    </div>
	  </div>
	  <div className={classes.description}>
	    <h3>{props.description}</h3>
	    <div className={classes.links}>
	      <a className={classes.live} href={props.live}>Live Code</a>
	      <a className={classes.hub} href={props.github}>Github</a>
	    </div>
	  </div>
	</div>
    )
}

export default ProjectPost;
