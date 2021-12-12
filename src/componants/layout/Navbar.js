import classes from "./Navbar.module.css";
import React, {useContext} from "react";
import {Context} from "../../Store.js";
import bell from "../../images/bell.png";

const Navbar = props => {
    const [page, setPage] = useContext(Context);
    return(
	<div className={classes.navbar}>
	  <div className={classes.pages}>
	    <button onClick={() => {setPage("Home")}} className={page==="Home" ? classes.buttonSel : classes.buttonNoSel}>Home</button>
	    <button onClick={() => {setPage("Blog")}} className={page==="Blog" ? classes.buttonSel : classes.buttonNoSel}>Blog</button>
	    <button onClick={() => {setPage("About")}} className={page==="About" ? classes.buttonSel : classes.buttonNoSel}>About</button>
	    <button onClick={() => {setPage("Projects")}} className={page==="Projects" ? classes.buttonSel : classes.buttonNoSel}>Projects</button>
	    <button onClick={() => {setPage("Resume")}} className={page==="Resume" ? classes.buttonSel : classes.buttonNoSel}>Resume</button>
	    <button onClick={() => {setPage("Contact")}} className={page==="Contact" ? classes.buttonSel : classes.buttonNoSel}>Contact</button>
	  </div>
	  <img alt="Liberty bell" src={bell} className={classes.bell} />
	</div>
    )
}

export default Navbar;
