import React, { useEffect, useState } from "react";
import { Accordian } from "./components/Accordian";
import { Color } from "./components/Color";
import { Tree } from "./components/Tree";
import data from "../src/components/data";
import { fetchProductsItems } from "./redux/ProductSlice";
import ProductList from "./components/Product";
import { Provider } from "react-redux";
import store from "../redux/store";
export const App = () => {
  return (
    <Provider>
      {" "}
      store={store}
      <div>
        {/* {<Accordian />} */}
        {/* <Color /> */}
        {/* <Tree data={data} /> */}
        <h1>Hey</h1>
        <ProductList />
      </div>
    </Provider>
  );
};
