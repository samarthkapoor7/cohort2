import React, { useEffect, useState } from 'react';


function useDebounce(value, timeout) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    let timeoutNumber = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);
    
    return () => {
      clearTimeout(timeoutNumber);
    }
  }, [value]);

  return debouncedValue;
}

const SearchBar = () => {
  const [value, setValue] = useState(0);
  const debouncedValue = useDebounce(value, 500); // 500 milliseconds debounce delay

  return (
    <>
    Debounced value is {debouncedValue}
    <input
      type="text"
      onChange={(e) => setValue(e.target.value)}
      placeholder="Search..."/>
    </>
  );
};

export default SearchBar;