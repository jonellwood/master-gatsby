var plugins = [{
      plugin: require('/home/jon/Documents/GitHub/master-gatsby/gatsby/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/jon/Documents/GitHub/master-gatsby/gatsby/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/jon/Documents/GitHub/master-gatsby/gatsby/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"projectId":"eeu5nfk3","dataset":"production","watchmode":true,"token":"sk0FmIlRlXUkWJfcixcznUZvdiL3yuVlATDuL2bWibWUJ5snzcvu0IyyZBEpkF2W2WpOOeT9QRw5m6PSe1T4GDeIj2qwcoWbPlSXCwU9BBtmHHtXorcnIBTnRzMLYXdeopbS5Ve87DDsAq8VJ1TxF6Ykmz8YZIRezGoaEHvuUnzgQQ4hhvVP"},
    },{
      plugin: require('/home/jon/Documents/GitHub/master-gatsby/gatsby/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
