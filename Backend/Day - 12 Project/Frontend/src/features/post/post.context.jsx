import { createContext, useState } from "react";

export const postContext = createContext();

export const PostProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(null);
  const [feed, setFeed] = useState(null);
  const [follow, setFollow] = useState(null);
  const [unfollow, setUnfollow] = useState(null);

  return (
    <postContext.Provider
      value={{
        loading,
        setLoading,
        post,
        setPost,
        feed,
        setFeed,
        follow,setFollow, unfollow, setUnfollow
      }}
    >
      {children}
    </postContext.Provider>
  );
};
