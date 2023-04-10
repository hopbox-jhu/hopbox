import React from "react";
import { Listing } from "../listing"

export function ListingList({ listings }) {
    return (
      <div>
        {listings.map((listing) => (
          <Listing
            key={listing.id}
            address={listing.address}
            type={listing.type}
            price={listing.pricing}
            description={listing.description}
            length={listing.length}
            width={listing.width}
            height={listing.height}
          />
        ))}
      </div>
    );
  }