import { useContext, useEffect } from "react";
import { postContext } from "../post.context";
import {
  getFeed,
  createPost,
  likePost,
  unLikePost,
  follow,
  unFollow,
} from "../services/post.api";

export const usePost = () => {
  const context = useContext(postContext);

  const {
    loading,
    setLoading,
    post,
    feed,
    setFeed,
    follow,
    setFollow,
    unfollow,
    setUnfollow,
  } = context;

  const handleGetFeed = async () => {
    setLoading(true);

    const response = await getFeed();

    setFeed(response.post);

    setLoading(false);
  };

  const handleCreatePost = async (imageUrl, caption) => {
    setLoading(true);

    const response = await createPost(imageUrl, caption);

    setFeed([response.post, ...feed]);

    setLoading(false);
  };

  const handleLikePost = async (post) => {
    const response = await likePost(post);
    await handleGetFeed();
  };

  const hanleUnlikePost = async (post) => {
    const response = await unLikePost(post);
    await handleGetFeed();
  };

  const handleFollow = async (followee) => {
    const response = await follow(followee);
    await handleGetFeed();
    
  };

  const handleUnfollow = async (followee) => {
    const response = await unFollow(followee);
    await handleGetFeed();
  };

  useEffect(() => {
    handleGetFeed();
  }, []);

  return {
    loading,
    post,
    feed,
    handleGetFeed,
    handleCreatePost,
    handleLikePost,
    hanleUnlikePost,
    handleFollow,
    handleUnfollow,
  };
};
