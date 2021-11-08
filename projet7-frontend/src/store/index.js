import Vuex from 'vuex'
import Vue from 'vue';
Vue.use(Vuex);

const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://localhost:3000/api'
})


export default new Vuex.Store({
    state: {
        status: '',
        user: {
            userId: -1,
            token: null,
            role : '',
        },
    },
    mutations: {
        setStatus: function (state, status) {
            state.status = status;
        },
        logUser: function (state, user) {
            state.user = user;
            localStorage.setItem('token', user.token);
            localStorage.setItem('userId', JSON.stringify(user.userId));
            localStorage.setItem('role', JSON.stringify(user.role));
        }
    },
    actions: {
        login: ({commit}, userInfos) => {
            commit('setStatus', 'loading');
            return new Promise((resolve, reject) => {
                instance.post('/auth/login', userInfos)
                .then(function (response) {
                    commit('setStatus', '');
                    commit('logUser', response.data);
                    resolve(response);
                })
                .catch( function (error) {
                    commit('setStatus', 'error_login')
                    reject(error);
                })
            })
            
        },
        createAccount: ({commit}, userInfos) => {
            commit;
            return new Promise((resolve, reject) => {
                instance.post('/auth/signup', userInfos)
                .then(function (response) {
                    commit('setStatus', '')
                    resolve(response);
                })
                .catch( function (error) {
                    commit('setStatus', 'error_created')
                    reject(error);
                })
            })
            
        },
        
    }
})
