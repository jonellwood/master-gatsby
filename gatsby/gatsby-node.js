import path from 'path';

async function turnPizzasIntoPages({ graphql, actions }) {
  const pizzaTeplate = path.resolve('./src/templates/Pizza.js');
  const { data } = await graphql(`
    query {
      pizzas: allSanityPizza {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  console.log(data);

  data.pizzas.nodes.forEach((pizza) => {
    actions.createPage({
      path: `pizza/${pizza.slug.current}`,
      component: pizzaTeplate,
      context: {
        slug: pizza.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  await turnPizzasIntoPages(params);
}
