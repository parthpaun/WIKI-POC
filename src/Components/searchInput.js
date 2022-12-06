import { TextField } from "@mui/material";

const SearchInput = (props) => {
  const { value, onSearch } = props;
  return (
    <div>
      <TextField
        id="outlined-required"
        label="Search"
        onChange={(event) => onSearch(event.target.value)}
        name="Search"
        type="text"
        value={value}
      />
    </div>
  );
};

export default SearchInput;
