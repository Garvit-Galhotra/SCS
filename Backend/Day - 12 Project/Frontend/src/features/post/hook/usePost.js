import { useContext } from "react";
import { postContext } from "../post.context";
import {
  getFeed,
  createPost,
  likePost,
  unLikePost,
} from "../services/post.api";

export const usePost = () => {
  const context = useContext(postContext);

  const { loading, setLoading, post, setPost, feed, setFeed } = context;

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

  return {
    loading,
    post,
    feed,
    handleGetFeed,
    handleCreatePost,
    handleLikePost,
    hanleUnlikePost,
  };
};
