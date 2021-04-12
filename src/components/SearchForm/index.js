const SearchForm = (props) => {
    const { searchText, handleFilteredData} = props
    return (
        <div>
          <div className="relative rounded-md">
            <input type="text" name="searc" id="search" className="shadow focus:shadow-lg outline-none block w-full py-2 px-6 sm:text-sm border-gray-300 rounded-md" placeholder="Search" value={searchText}  onChange={handleFilteredData} />
          </div>
        </div>
    )
}

export default SearchForm