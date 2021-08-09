import React, { useState, useEffect } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import {
  AccountBoxRounded,
  ChatBubbleOutline,
  ExpandMoreOutlined,
  NearMe,
  ThumbUp,
} from "@material-ui/icons";
import db from "../../firebase";
import { useStateValue } from "../../StateProvider";

function Post({ PostId, profilePic, username, image, timestamp, message, likedBefore }) {
  // get user data
  const [{ user }, dispatch] = useStateValue();
  const [likedPostBefore, setLikedPostBefore] = useState(false);
console.log(likedPostBefore)
  const handleLike = (e) => {
    db.collection("likes")
      .get()
      .then((document) => {
        let canlike = true;
        document.docs.map((documentEl) => {
          var likeContainer =
            documentEl._delegate._document.data.value.mapValue.fields;

          if (
            likeContainer.username.stringValue === user.displayName &&
            likeContainer.post.stringValue === PostId
          ) {
            // sil like elementini ve postlikedbefore == false et
            db.collection("likes")
              .doc(documentEl.id)
              .delete()
              .then(() => {
                console.log("deleted succesfuly");
              })
              .catch(() => {
                console.log("unsuccesful");
              });
            setLikedPostBefore(false);
            return (canlike = false);
          }
        });

        if (canlike) {
          // like the 
          db.collection("likes").add({
            post: PostId,
            profilePic: user.photoURL,
            username: user.displayName,
            // !!!!!!!!!!!
            likedBefore: true,
          });
          setLikedPostBefore(true)
        }
      });
  };

  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}.</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} />
      </div>
      <div className="post__options">
        <div
          className={
            likedBefore || likedPostBefore
              ? "post__option post__option__like--active"
              : "post__option"
          }
          onClick={handleLike}
        >
          <ThumbUp />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutline />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMe />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountBoxRounded />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
}

export default Post;
