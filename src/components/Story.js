import React from 'react'
import { Avatar } from "@material-ui/core";

const Story = ({title, profileSrc, image}) => {
    return (
      <div className="story" style={{ backgroundImage: `url(${image})` }}>
        <Avatar className="story__avatar" src={profileSrc} />
        <h4 className="story__title">{title}</h4>
      </div>
    );
}

export default Story
