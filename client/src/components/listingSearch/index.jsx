import React, { useState } from "react";
import { AddressAutofill } from '@mapbox/search-js-react';

export function ListingSearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <label>
        Search:
      </label>
      <AddressAutofill onRetrieve={handleSearchSubmit} accessToken='pk.eyJ1Ijoia2l3aXRoZXBvb2RsZSIsImEiOiJjbGZ6dWNvZWQwb2lrM2x0YXM0MGJ1NHd0In0.muab2DZu9_51AY7dvrJwAw'>
        <input type="text" placeholder="Address" value={searchTerm} onChange={handleSearchChange} autocomplete="street-address" />
      </AddressAutofill>
      <button type="submit">Submit</button>
    </form>
  );
}