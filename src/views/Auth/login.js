import ApiClient from '../../Services/ApiClient';

export default{

    
    data(){
        return {
            email: "",
            emailRules: [
                v => !!v || 'L\'email est requis',
                v => /.+@.+/.test(v) || 'l\'email est requis',
              ],
            password: "",
            passwordRules: [
                v => !!v || 'Le mot de passe est requis',
                v => v.length >= 6 || 'Le mot de passe doit comporter au moin 6 charactère',
              ],
        }
    },
    methods: {
        login(){
            if(this.email != "" && this.password!= ""){
                ApiClient.post('/api/auth', {email: this.email, password: this.password})
                    .then(({data}) => {
                        this.$store.commit('UpdateToken', data.access_token)
                        // console.log(this.$store.state.AccessToken);
                        window.location.href = '/'
                    }).catch(({response}) => {
                        this.$store.commit('Alert', {alert: true, color: 'red', message: response.data.message})
                    })
            }
        }
    }
}