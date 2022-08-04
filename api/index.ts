import { Plugin } from '@nuxt/types'

interface IApiClient {
  stock: {
    getUsers: () => Promise<any>
  };
}

declare module 'vue/types/vue' {
  // this.$api inside Vue components
  interface Vue {
    $api: IApiClient;
  }
}

declare module '@nuxt/types' {
  // nuxtContext.app.$api inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    $api: IApiClient;
  }

  // nuxtContext.$api
  interface Context {
    $api: IApiClient;
  }
}

declare module 'vuex/types/index' {
  // this.$api inside Vuex stores
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $api: IApiClient;
  }
}

const apiClientPlugin: Plugin = ({ $axios }, inject) => {
  const headers = {}
  // if (store.token !== undefined) headers.authorization = `Bearer ${store.token}`;

  const _client = $axios.create({ headers })
  _client.setBaseURL('/api/')

  const api = {
    stock: {
      getUsers: () => _client.$get('/users')
    }
  }

  inject('api', api)
}

export default apiClientPlugin
