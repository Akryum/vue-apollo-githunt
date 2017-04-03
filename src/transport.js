import { ApolloClient, createNetworkInterface } from 'apollo-client'
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws'

function createClient (options) {
  return new ApolloClient(Object.assign({}, {
    addTypename: true,
    dataIdFromObject: (result) => {
      if (result.id && result.__typename) { // eslint-disable-line no-underscore-dangle
        return result.__typename + result.id // eslint-disable-line no-underscore-dangle
      }
      return null
    },
    // shouldBatch: true,
  }, options))
}

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3010',
  transportBatching: true,
  opts: {
    credentials: 'same-origin',
  },
})

const subscriptionsURL = 'ws://localhost:3010/subscriptions'

const wsClient = new SubscriptionClient(subscriptionsURL, {
  reconnect: true,
})

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient,
)

const apolloClient = createClient({
  networkInterface: networkInterfaceWithSubscriptions,
  // initialState: window.__APOLLO_STATE__, // eslint-disable-line no-underscore-dangle
  ssrForceFetchDelay: 100,
  connectToDevTools: true,
})

export {
  apolloClient,
}
