import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        id: null,
        vehicleId: null,
        issueId: null,
        userName: null,
        isAuthenticated: false,
        issueName: null,
        issueUrgency: null
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
        },
        setUserName(state, userName) {
            state.userName = userName
        },
        setAuthenticated(state, isAuthenticated) {
            state.isAuthenticated = isAuthenticated
        },
        setIssueName(state, issueName) {
            state.issueName = issueName
        },
        setUrgency(state, urgency) {
            state.urgency = urgency
        }
    },
    getters: {
        id: state => state.id,
        vehicleId: state => state.vehicleId,
        issueId: state => state.issueId,
        userName: state => state.userName,
        isAuthenticated: state => state.isAuthenticated,
        issueName: state => state.issueName,
        urgency: state => state.urgency
      }
})