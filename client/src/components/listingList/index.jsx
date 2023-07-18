import React from "react";
import { Listing } from "../listing"
import {Wrapper} from './listingListElements'

export function ListingList({ listings, distances }) {
    return (
      <Wrapper>
        {listings.map((listing, index) => (
          <Listing
            listingId={listing._id}
            address={listing.address}
            type={listing.type}
            price={listing.pricing}
            images={listing.images}
            description={listing.description}
            length={listing.length}
            width={listing.width}
            height={listing.height}
            isRented={listing.isRented}
            distance={distances[index]}
          />
        ))}
      </Wrapper>
    );
  }