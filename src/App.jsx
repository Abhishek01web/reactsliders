// import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import axios from "axios";
import "./App.css";
import CarouselMul from "./components/carousel/CarouselMul";
import Multi from "./components/carousel/Multi";
// import { strapi_api_token } from "./url";

function App() {
  // const [count, setCount] = useState(0);
  // const [data, setData] = useState();

  // const fetchData = async () => {

  //   const options = {
  //     method: "GET",
  //     url: "http://localhost:1337/api/movies?populate=*",
  //     headers: {
  //       Authorization:
  //         "Bearer " + strapi_api_token,
  //     },
  //   };

  //   axios
  //     .request(options)
  //     .then((response) => {
  //       console.log(response.data);
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      <div className="home">
        <CarouselMul className="banner" />
        <Multi />
      </div>
    </>
  );
}

export default App;
