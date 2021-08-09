import React from "react";
import "./StoryReel.css";
import Story from "../StoryComponent/Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://static.politico.com/dims4/default/af81090/2147483647/resize/1160x%3E/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F36%2F98%2F5ceb5cf3473c91620bb5bea1254d%2Flede1-200331-blesener-politico-009.jpg"
        profileSrc="https://cdn.lifehack.org/wp-content/uploads/2014/03/shutterstock_97566446.jpg"
        title="Life Hack"
      />
      <Story
        image="https://q-xx.bstatic.com/images/hotel/max1024x768/241/241074105.jpg"
        profileSrc="https://www.healthshots.com/wp-content/uploads/2020/11/toxic-person-quiz.jpg"
        title="Bob Hair"
      />
      <Story
        image="https://pix10.agoda.net/hotelImages/361/3612581/3612581_18010316150060733791.jpg?s=1024x768"
        profileSrc="https://cdn.lifehack.org/wp-content/uploads/2014/03/shutterstock_97566446.jpg"
        title="Life Hack"
      />
      <Story
        image="https://pix10.agoda.net/hotelImages/301315/-1/f37a109db517a20aacc78177b0c9687e.jpg?s=1024x768"
        profileSrc="https://image.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?size=626&ext=jpg"
        title="Glasses Girl"
      />
    </div>
  );
}

export default StoryReel;
