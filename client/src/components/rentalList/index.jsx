import React from "react";
import { Rental } from "../rental"
import { Wrapper } from './rentalListElements'

export function RentalList({ listings }) {
  return (
    <Wrapper>
      {listings.map((listing, index) => (
        <Rental
          listingId={listing._id}
          name={listing.name}
          address={listing.address}
          type={listing.type}
          price={listing.pricing}
          images={listing.images}
          description={listing.description}
          length={listing.length}
          width={listing.width}
          height={listing.height}
          isRented={listing.isRented}
          rentalStart={new Date(listing.rentalStart).toLocaleDateString('en-US')}
          rentalEnd={new Date(listing.rentalEnd).toLocaleDateString('en-US')}
        />
      ))}
    </Wrapper>
  );
}