import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  handleClick: () => void;
}

export default function LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handleClick }) {
  return (
    <button className={css.button} onClick={handleClick}>
      Load more...
    </button>
  );
}