import React, { useState } from "react";
import { Tree } from "./Tree";
import { Item } from "./Item";

export const TreeItem = ({ data }) => {
  const [user, setUser] = useState([]);

  return (
    <div>
      {data.map((item, index) => (
        <ul>
          <li key={index}>
            <Item list={item} />
          </li>
        </ul>
      ))}
    </div>
  );
};
