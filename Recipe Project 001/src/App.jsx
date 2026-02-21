import Navbar from "./component/Navbar";
import Mainroutes from "./routes/Mainroutes";

const App = () => {
  return (
    <div className="bg-gray-700 h-screen w-screen text-white font-thin py-10 px-[10%]">
      <Navbar />
      <Mainroutes />
    </div>
  );
};

export default App;
