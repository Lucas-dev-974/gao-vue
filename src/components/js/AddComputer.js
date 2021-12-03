import ApiClient from "../../Services/ApiClient";

export default{
    data(){
        return {
            computer_name: '',
            dialog: false,
        }
    },

    methods: {
        AddComputer(){
            ApiClient.post('/api/computers/', {name: this.computer_name})
            .then(({data}) => {
                this.$store.commit('AddComputer', data.computer)
            }).catch(error => {
                this.$store.commit('Alert', {alert: true, message: error.message, color: 'error'})
            })
        }
    }
}