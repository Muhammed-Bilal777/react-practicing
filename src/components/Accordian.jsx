import React, { useEffect, useState } from "react";

export const Accordian = () => {
  const [product, setProduct] = useState([]);

  const [single, setSingle] = useState(null);
  const [multi, setMulti] = useState([]);
  const [button, setButton] = useState(false);

  const handleSingle = (id) => {
    setSingle(id === single ? null : id);
  };

  const handleMulti = (id) => {
    const cpyMulti = [...multi];
    const index = cpyMulti.indexOf(id);
    if (index === -1) {
      cpyMulti.push(id);
      setMulti(cpyMulti);
    } else {
      cpyMulti.splice(index, 1);
      setMulti(cpyMulti);
    }
  };
  const fetchData = async () => {
    try {
      let res = await fetch("https://dummyjson.com/users?limit=5");
      let data = await res.json();
      setProduct(data.users);
      console.log(data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        height: "100vh",
      }}
    >
      <button onClick={() => setButton(!button)}>change</button>

      <ul>
        {product.map((item) => {
          return (
            <li
              onClick={() =>
                button ? handleMulti(item.id) : handleSingle(item.id)
              }
              key={item.id}
            >
              {item.firstName}

              <div>
                {button
                  ? multi.indexOf(item.id) !== -1 && <div>{item.lastName}</div>
                  : item.id === single && <div>{item.lastName}</div>}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
