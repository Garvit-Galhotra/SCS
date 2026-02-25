import { useEffect } from "react";
import "../style/feed.scss";
import Post from "../component/Post";
import { usePost } from "../hook/usePost";
import Nav from "../../../shared/component/Nav";
import Following from "../component/Following";
import Follower from "../component/Follower";
import OtherUser from "../component/OtherUser";

// import Nav from "../../shared/components/Nav";

const Feed = () => {
  const {
    feed,
    handleGetFeed,
    loading,
    handleLikePost,
    hanleUnlikePost,
    handleFollow,
    handleUnfollow,
  } = usePost();

  useEffect(() => {
    handleGetFeed();
  }, []);

  if (loading || !feed) {
    return (
      <main>
        <h1>Feed is loading...</h1>
      </main>
    );
  }

  console.log(feed);

  return (
    <>
      <main>
        <Nav />
        <div className="feed-container">
          <div className="followList">
            <div className="following">
              <h2>Following</h2>
              <Following />
            </div>
            <div className="followers">
              <h2>Followers</h2>
              <Follower />
            </div>
            <div className="other-users">
              <h2>More Users</h2>
              <OtherUser />
            </div>
          </div>
          <div className="feed-page">
            <div className="feed">
              <div className="posts">
                {feed.map((post) => {
                  return (
                    <Post
                      user={post.user}
                      post={post}
                      key={post._id}
                      loading={loading}
                      handleLike={handleLikePost}
                      handleUnLike={hanleUnlikePost}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Feed;
