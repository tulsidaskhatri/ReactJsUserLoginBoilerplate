import React, { useEffect, useState } from "react";
import api from "../../api";

const Welcome = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    api.welcome((response: any) => {
      setUsername(response.user.email);
    });
  });
  return <div>Welcome {username}</div>;
};

export default Welcome;
