import { fetchPhotos, fetchVideos } from "./api/MediaApi";

const App = () => {
  return (
    <div className="h-screen w-full bg-gray-950 text-white">
      <button
        onClick={async () => {
          const data = await fetchPhotos("cats");

          console.log(data.results);
        }}
      >
        Get Photos
      </button>

      <button
        onClick={async () => {
          const data = await fetchVideos("cats");

          console.log(data.videos);
        }}
      >
        Get Videos
      </button>
    </div>
  );
};

export default App;
