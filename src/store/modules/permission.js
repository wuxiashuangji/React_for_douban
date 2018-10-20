import { constantRouterMap } from '@/router'

const permission = {
  state: {
    routers: constantRouterMap,
    loaded: false,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    },
    SET_LOADED_FLAG: (state, flag) => {
      state.loaded = flag
      state.routers = constantRouterMap
    }
  },
  actions: {
    GenerateRoutes({ commit }, routes) {
      return new Promise(resolve => {
        commit('SET_ROUTERS', routes)
        resolve()
      })
    },
    setLoadedFlag({ commit }, flag) {
      return new Promise(resolve => {
        commit('SET_LOADED_FLAG', flag)
        resolve()
      })
    }
  }
}

export default permission
