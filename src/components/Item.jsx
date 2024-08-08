import React, { useState } from "react";
import { TreeItem } from "./TreeItem";

export const Item = ({ list }) => {
  const [show, setShow] = useState(false);

  const [item, setItem] = useState(null);

  const handliClick = (label) => {
    setShow(!show);
    setItem(label);
  };

  console.log(list);
  return (
    <div>
      <ul>{<li onClick={() => handliClick(list.label)}>{list.label}</li>}</ul>
      {list.label === item && show
        ? list.children &&
          list.children.length > 0 && <TreeItem data={list.children} />
        : null}
    </div>
  );
};
