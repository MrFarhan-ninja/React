import  {useState,useEffect } from "react";

const Post = () => {
  const [post, setPost] = useState([]);
  const [status, setStatus] = useState("idle");

  const controller = new AbortController();

  useEffect(() => {
    const getPost = async () => {
      try {
        setStatus("Loading");
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5",{signal:controller.signal},
        );
        const data = await response.json();
        setPost(data);
        setStatus("completed");
      } catch (err) {
        setStatus("Error");
        console.error(err);
      }
    };
    getPost();

    return ()=>{
      controller.abort()
    }
  }, []);

  return (
    <div>
        {
            post.map((val)=>{
                return <h1>{val.title}</h1>
            })
        }
    </div>
  )
};

export default Post;
