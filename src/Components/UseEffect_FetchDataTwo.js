import React, { useState, useEffect } from "react";
import axios from "axios";

function EseEffect_FetchDataTwo() {
  const [posts, setPosts] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <h1>{posts.body}</h1>
    </div>
  );
}

export default EseEffect_FetchDataTwo;
