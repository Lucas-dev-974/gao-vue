import Axios from 'axios'

// Axios.defaults.headers.common = {'Authorization': `bearer ${this.$store.state.UserInfos.access_token}`}
let token = ''
if(window.localStorage.getItem('vuex')){
    token = JSON.parse(window.localStorage.getItem('vuex')).AccessToken
}
console.log('AccessToken: ', token);

Axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
export default Axios.create({
    baseURL: 'http://127.0.0.1:8000/',
})