import React from "react";
import { TreeItem } from "./TreeItem";

export const Tree = ({ data }) => {
  return (
    <div>
      <TreeItem data={data} />
    </div>
  );
};
