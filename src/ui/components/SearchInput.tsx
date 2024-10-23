import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchInput: React.FC = () => {
  return (
    <div className=" relative">
      <input
        className=" bg-neutral-100 placeholder:text-xs py-1 px-4 rounded-md h-8"
        type="search"
        name="looking-for"
        id="searchInput"
        placeholder="What are you looking for?"
      />
      <span className="absolute inset-y-0 right-0 flex items-center pr-4">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </span>
    </div>
  );
};

export default SearchInput;
