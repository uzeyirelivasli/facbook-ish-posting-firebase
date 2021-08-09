import React, { useEffect, useState } from "react";
import "./Feed.css";
import StoryReel from "../StoryReel/StoryReel";
import MessageSender from "../MessageSender/MessageSender";
import Post from "../Post/Post";
import db from "../../firebase";
import { useStateValue } from "../../StateProvider";

function Feed() {
  const [{ user }, dispatch] = useStateValue();
  const [posts, setPosts] = useState([]);
  // const [checkLikedPostBefore, setCheckLikedPostBefore] = useState(false)

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
      console.log(posts)

    var checkLikedPostBefore = false;
    posts.map((post) => {
      console.log(post);

      db.collection("likes")
        .get()
        .then((document) => document.docs)
        .then((innerDocument) => {
          innerDocument.map((soInner) => {
            let likeContainer =
              soInner._delegate._document.data.value.mapValue.fields;

            // console.log(likeContainer.username.stringValue,post.data.username,likeContainer.post.stringValue,post.id);

            if (
              likeContainer.username.stringValue === user.displayName &&
              likeContainer.post.stringValue === post.id
            ) {
              // setCheckLikedPostBefore(true)
              // checkLikedPostBefore = true
            }
          });
        });
    });
  }, []);

  // })

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {/* {console.log(posts)}     */}
      {posts.map((post) => (
        <Post
          key={post.id}
          PostId={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
}

export default Feed;
