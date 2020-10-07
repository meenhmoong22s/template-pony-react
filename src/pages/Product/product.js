import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import axios from "../../axios/axios";

// const data = {
//   indexOutdoor: 7,
//   indexIndoor: 100,
//   indexTemp: 2,
//   indexRH: 2,
// };

function Product(props) {
  const match = useRouteMatch();
  console.log({ match });

  const getRequest = async () => {
    try {
      const response = await axios.get("/blue.json");
      console.log(response.data);
      // console.log(response.data["-MJ0tqK0MmmHaUaTrMpd"]);
      // const response = await axios.post("/blue.json", data);
      // const response = await axios.put("/blue.json", data);
      // const response = await axios.delete("/blue/-MJ0xbsIQB5zWZtoJc98.json");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRequest();
  }, []);
  return <div>hi</div>;
}

export default Product;
