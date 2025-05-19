import s from "./LoadMoreBtn.module.css";

type LoadMoreBtnProps = {
  onClick: () => void;
};

const LoadMoreBtn = ({ onClick }: LoadMoreBtnProps) => {
  return (
    <div>
      <button className={s.button} type="button" onClick={() => onClick()}>
        Load more
      </button>
    </div>
  );
};
export default LoadMoreBtn;
