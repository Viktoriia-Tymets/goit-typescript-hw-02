import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar: React.FC<SearchBarProps> = ({ onSearch }) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const input = form.elements.namedItem('input') as HTMLInputElement;
    const query = e.target.elements.input.value.trim();

    if (query === "") {
      toast("Будь ласка, введіть текст для пошуку зображень");
      return;
    }
    onSearch(query);
    e.target.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          className={css.search}
          type="text"
          name="input"
          autocomplete="off"
          autofocus
          placeholder="Search images.."
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
