import DiaryItem from "./DiaryItem";

const DiaryList = ({ diaryList }) => {
  return (
    <div className="DiaryList">
      <h2>후기 리스트</h2>
      <h4>{diaryList.length}개의 후기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={`diaryitem_${it.id}`} {...it} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
