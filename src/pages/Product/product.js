import React from "react";
import { useRouteMatch } from "react-router-dom";

function Product(props) {
  const match = useRouteMatch();
  console.log({ match });
  return <div>hi</div>;
}

export default Product;
