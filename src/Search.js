import React from "react";

const Search = props => {
  const { value, onChange, onSubmit, children } = props;
  return (
    <form onSubmit={onSubmit}>
      {children}
      <input type="text" value={value} onChange={onChange} />
    </form>
  );
};

export default Search;
