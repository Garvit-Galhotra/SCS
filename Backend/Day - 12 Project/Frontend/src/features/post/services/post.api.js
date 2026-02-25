import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export async function getFeed() {
  const response = await api.get("/api/posts/feed");
  return response.data;
}

export async function createPost(imageFile, caption) {
  const formData = new FormData();

  formData.append("chacha", imageFile);
  formData.append("caption", caption);

  const response = await api.post("/api/posts", formData);

  return response.data;
}

export async function likePost(postid) {
  const response = await api.post("/api/posts/like/" + postid._id);
  return response.data;

  // console.log(postid);
}

export async function unLikePost(postid) {
  const response = await api.post("/api/posts/unlike/" + postid);
  return response.data;
}

export async function follow(username) {
  const response = await api.post("/follow/" + username);
  return response.data;
}

export async function unFollow(username) {
  const response = await api.post("/unfollow/" + username);
  return response.data;
}
