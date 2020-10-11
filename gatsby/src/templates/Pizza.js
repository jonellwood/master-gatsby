import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import PizzaList from '../components/PizzaList';

export default function SinglePizzaPage({ data: { pizza } }) {
  return (
    <>
      <h2>{pizza.name}</h2>
      <Img fluid={pizza.image.asset.fluid} />
      <p>{pizza.toppings.name}</p>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    pizza: sanityPizza(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      toppings {
        name
        id
        vegetarian
      }
    }
  }
`;
