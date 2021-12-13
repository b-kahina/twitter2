
import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import db from "./firebase";
import "./TweetBox.css";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.firestore().collection("posts").add({
      username: "MohYounsi",
      displayName: "YOUNSI Mohand",
      avatar:
        "https://lh3.googleusercontent.com/ogw/ADea4I5jOGG784RBMKHBQsbJw0baq178D5WFh7IH_MRN=s32-c-mo",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://lh3.googleusercontent.com/ogw/ADea4I5jOGG784RBMKHBQsbJw0baq178D5WFh7IH_MRN=s32-c-mo" />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="Ce qui se passe?"
            type="text"
          />
        </div>
        <input
          placeholder="Optionel: Collez le lien de l'image"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          type="text"
          className="tweetBox__imageInput"
        />
        <Button onClick={sendTweet} type="submit" className="tweetBox__button">
          Noctua
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;