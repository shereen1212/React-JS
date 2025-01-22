import React from "react";
function UserInfo({ username, email, age }) {
  return (
    <div>
      <h3>{username}</h3>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
    </div>
  );
}
export default UserInfo;