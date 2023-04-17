import React, { useState } from "react";
import { Input } from '@mantine/core';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate, useLocation } from "react-router-dom";

export function ListingSearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showClearIcon, setShowClearIcon] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    setShowClearIcon(newSearchTerm.length > 0);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    
    // Check if current URL is not "/homepage" and navigate to it
    console.log(location.pathname);
    if (location.pathname !== "/homepage") {
      navigate("/homepage");
    }

    // Call onSearch function with searchTerm
    onSearch(searchTerm);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setShowClearIcon(false);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <Input
        style={{ width: '31vw'  }}
        radius='md'
        size='xl'
        className='inputfield'
        icon={<SearchIcon />}
        placeholder="Insert location to look for nearby storage"
        value={searchTerm}
        onChange={handleSearchChange}
        rightSection={
          showClearIcon && (
              <ClearIcon onClick={handleClearSearch} />
          )
        }
      />
    </form>
  );
}
