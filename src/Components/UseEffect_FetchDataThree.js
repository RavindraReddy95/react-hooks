import React, { useState, useEffect } from "react";
import axios from "axios";

function UseEffect_FetchDataThree() {
  const [posts, setPosts] = useState({});
  const [id, setId] = useState(1);
  const [idFetch, setIdFetch] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFetch}`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFetch]);

  const fetchPost = () => {
    setIdFetch(id);
  };

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={fetchPost}>Click Here</button>
      <h1>{posts.body}</h1>
    </div>
  );
}

export default UseEffect_FetchDataThree;
