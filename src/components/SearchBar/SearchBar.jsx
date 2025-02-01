import s from './SearchBar.module.css'

const SearchBar = ({ onSubmit }) => {
    return (
        <section>
            <form>
                <input
                    type="text"
                    autocomplete="off"
                    autofocus
                    placeholder="Search images and photos"
                />
                <button type="submit" onSubmit={onSubmit}>Search</button>
            </form>
        </section>
    );
}
export default SearchBar