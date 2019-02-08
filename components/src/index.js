import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Kevin Ziegler"
          timeAgo="Yesterday at 6:00PM"
          content="Nice react app. Drinks all around!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Andrew Zures"
          timeAgo="Yesterday at 9:30PM"
          content="I'm proud, but don't get cocky, kid!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Aaron Humerickhouse"
          timeAgo="Today at 7:15AM"
          content="Thanks for remembering me this time..."
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
