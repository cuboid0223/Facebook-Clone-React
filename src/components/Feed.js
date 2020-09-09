import React from 'react'
import StoryReel from './StoryReel';
import MessageSender from "./MessageSender";
import Post from './Post';


const Feed = () => {
    return (
      <div className="feed">
        <StoryReel />
        <MessageSender />
        <Post
          profilePic="https://scontent.ftpe1-1.fna.fbcdn.net/v/t1.0-9/27750654_196100737654050_83083625155525200_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=poAjNp430jkAX_yBG3g&_nc_ht=scontent.ftpe1-1.fna&oh=fbcc0254c3c9da4e51aebc3a1015a1cf&oe=5F7B6505"
          message="facebook clone!!!!"
          timestamp="time"
          username="陳泓棣"
          image="https://reactjsexample.com/content/images/2017/08/20170826220634.jpg"
        />
      </div>
    );
}

export default Feed
