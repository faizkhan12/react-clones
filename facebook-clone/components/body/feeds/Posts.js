import React from "react"
import { useCollection } from "react-firebase-hooks/firestore"
import { db } from "../../../firebase"
import Post from "./Post"

const Posts = () => {
  const [realtimePosts, loading, error] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  )
  return (
    <div>
      {realtimePosts?.docs.map((post) => (
        <Post
          key={post.id}
          email={post.data().email}
          name={post.data().name}
          image={post.data().image}
          message={post.data().message}
          postImage={post.data().postImage}
          timestamp={post.data().timestamp}
        />
      ))}
    </div>
  )
}

export default Posts
