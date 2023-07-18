import React, { useState } from "react";
import { Input } from '@mantine/core';
import SearchIcon from '@mui/icons-material/Search';
import Warehouse from '@mui/icons-material/Warehouse';
import { useNavigate, useLocation } from "react-router-dom";
import { AddressAutofill } from '@mapbox/search-js-react';

export function ListingSearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState();
  const [showSearchIcon, setShowSearchIcon] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    setShowSearchIcon(newSearchTerm.length > 0);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    if (location.pathname !== "/homepage") {
      navigate("/homepage");
    }

    // Call onSearch function with searchTerm
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <AddressAutofill onRetrieve={handleSearchSubmit} accessToken='pk.eyJ1Ijoia2l3aXRoZXBvb2RsZSIsImEiOiJjbGZ6dWNvZWQwb2lrM2x0YXM0MGJ1NHd0In0.muab2DZu9_51AY7dvrJwAw'>
        <Input
          style={{ width: '31vw', marginLeft: '20px' }}
          radius='md'
          size='xl'
          className='inputfield'
          icon={<Warehouse />}
          type="text"
          placeholder="Insert address to look for nearby storage"
          value={searchTerm}
          autoComplete="street-address"
          name="no-autofill"
          onChange={handleSearchChange}
          rightSection={
            showSearchIcon && (
              <SearchIcon onClick={handleSearchSubmit} />
            )
          }
        />
      </AddressAutofill>
    </form>
  );
}
