import "../assets/styles/searchBar.css"

const SearchBar = ({ value, onChange }) => {
    return (
        <div className="search-container">
            <input
                type="text"
                className="search-bar"
                placeholder="Search City"
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default SearchBar;