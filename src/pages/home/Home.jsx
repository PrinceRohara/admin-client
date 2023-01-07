import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="m-8  p-4 ">
          <h1 className="text-3xl font-extrabold text-gray-700 tracking-wider">
            Hello there, arman kamra
          </h1>
          <p className="">
            Here is some information we gathered about your salon
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
