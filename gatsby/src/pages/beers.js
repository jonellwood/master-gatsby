import React from 'react';
import { graphql } from 'gatsby';
import BeerList from '../components/BeerList';

export default function BeersPage({ data }) {
  const beers = data.beers.nodes;
  return (
    <>
      <h2 className="center">
        We have {data.beers.nodes.length} Beers available Dine in Only!
      </h2>
      <BeerList beers={beers} />
    </>
  );
}

export const query = graphql`
  query BeerQuery {
    beers: allBeer {
      nodes {
        name
        id
        price
        rating {
          reviews
          average
        }
        image
      }
    }
  }
`;
