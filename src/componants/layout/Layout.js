import Head from "./Head"
import Navbar from "./Navbar"
import Content from "./Content"

import classes from "./Layout.module.css";

const Layout = props => {
    return(

	<div className={classes.background}>
	  <Head />
	  <Navbar />
	  <Content />
	</div>
    )
}

export default Layout;
