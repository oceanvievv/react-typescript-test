import React, { useEffect, useState } from "react";

export function UseEffect() {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  const mouseMoveHandler = (event: MouseEvent) => {
    setPos({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    console.log("Component did mount");

    window.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [type]);

  return (
    <div className="flex flex-col items-center mb-10">
      <h1 className="text-lg font-bold">
        Ресурс: <span className="font-normal underline">{type}</span>
      </h1>

      <button
        className="text-white py-2 px-4 bg-blue-400 hover:bg-blue-500 rounded mt-3"
        onClick={() => setType("users")}
      >
        Пользователи
      </button>
      <button
        className="text-white py-2 px-4 bg-blue-400 hover:bg-blue-500 rounded mt-3"
        onClick={() => setType("todos")}
      >
        Todos
      </button>
      <button
        className="text-white py-2 px-4 bg-blue-400 hover:bg-blue-500 rounded mt-3"
        onClick={() => setType("posts")}
      >
        Посты
      </button>

      {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
      <pre className="mt-4">{JSON.stringify(pos, null, 2)}</pre>
    </div>
  );
}
