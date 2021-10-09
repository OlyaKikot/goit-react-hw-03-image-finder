import s from "./SearchBar.module.css";
import PropTypes from "prop-types";

export default function SearchBar({ onSubmit }) {
  return (
    <>
      <header className={s.SearchBar}>
        <form
          className={s.SearchForm}
          onSubmit={(e) => {
            e.preventDefault();
            if (e.target.lastChild.value.trim() === "") {
              return;
            }
            onSubmit(e.target.lastChild.value.toLowerCase());
          }}
        >
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
