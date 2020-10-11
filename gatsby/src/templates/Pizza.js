import { graphql } from 'gatsby';
import React from 'react';

export default function SinglePizzaPage() {
  return <p>Singed Pizza</p>;
}

export const query = graphql`
  query($slug: String!) {
    pizza: sanityPizza(slug: { current: { eq: $slug } }) {
      name
      id
    }
  }
`;
