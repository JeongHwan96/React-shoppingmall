import { useRef, useState } from "react";
import "../App.css";
import DiaryEditor from "../components/DiaryEditor";
import DiaryList from "../components/DiaryList";

const Review = () => {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  return (
    <div
      className="App"
      style={{ position: "absolute", width: "50%", margin: "10% 0 0 25%" }}
    >
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} />
    </div>
  );
};
export default Review;
