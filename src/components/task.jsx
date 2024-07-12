import { useEffect, useState } from "react";

import "./task.css";

const Task = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("https://www.reddit.com/r/reactjs.json");

      if (!response.ok) {
        alert("data could not come ");
      }

      const resData = await response.json();
      setData(resData.data.children);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        {data?.map((item, idx) => {
          return (
            <div key={idx} className="card">
              <h2>{item.data.title}</h2>

              {/* <body>{item.data.selftext_html || "nodata"}</body> */}

              <div
                dangerouslySetInnerHTML={{
                  __html: item.data.selftext_html,
                }}
              />

              <a href={item.data.url}>Read More</a>
              <p>Score: {item.data.score}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Task;
