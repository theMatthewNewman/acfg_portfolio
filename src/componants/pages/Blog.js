import firebase from "firebase/app";
import {useCollectionData} from "react-firebase-hooks/firestore";
import classes from "./Blog.module.css";
import 'firebase/firestore';
import GrayBox from "../ui/GrayBox.js";

const Blog = props => {
    const firestore = firebase.firestore();
    const blogRef = firestore.collection('blog');
    const query = blogRef.orderBy('createdAt');
    const [posts] = useCollectionData(query, {idField:'id'});
    return(
	<div className={classes.blogPosts}>
	  {posts && posts.map(post => (
	      <GrayBox>
		<div className={classes.post}>
		  <h1>{post.title}</h1>
		  <div className={classes.titleImage}>
		    <img alt={post.title} src={post.image} />
		  </div>
		  <p>{post.content}</p>
		</div>
	      </GrayBox>
	  ))}
	</div>
    )
}

export default Blog

