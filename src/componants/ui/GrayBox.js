import classes from "./GrayBox.module.css";


const GrayBox = ({children}) => {
    return(<div className={classes.GrayBox}>{children}</div>)
}

export default GrayBox
