import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        id: null,
        vehicleId: null,
        issueId: null
    },
    mutations: {
        change(state, id) {
          state.id = id
        },
        vehicleSet(state, vehicleId) {
            state.vehicleId = vehicleId
        },
        setIssue(state, issueId) {
            state.issueId = issueId
        }

    },
    getters: {
        id: state => state.id,
        vehicleId: state => state.vehicleId,
        issueId: state => state.issueId
      }
})