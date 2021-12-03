import ApiClient from "../../Services/ApiClient"
import _ from "lodash"

export default{
    props: {
        computer:{ required: true },
        date:    { required: true },
        hourre:  { required: true },
    },

    data(){
        return{
            dialog: false,
            title: '',

            loading: false,
            clients: [],
            client:  {},
            search:  '',

            addingClient:  false,
            clientName: '',
            clientEmail: ''
        }
    },

    watch: {
        search: function(val){
            if(val && val.length > 1){
                ApiClient.patch('/api/client/' + val)
                .then(({data}) => {
                    this.loading = true
                    data.clients.forEach(client => {
                        this.clients.push(this.formattedClient(client))
                    });
                }).catch(error => {
                    this.$store.commit('Alert', {alert: true, message: error.message, color: 'error'})
                })
            }
        }
    },

    methods: {
        formattedClient(client){
            return {
                id:   client.id,
                name: client.name,
            }
        },

        Attribuer(){
            if( _.isNumber(this.client.id)){
                ApiClient.post('/api/attributions/', this.Client())
                .then(({data}) => {
                    let _data = {
                        id:   this.computer.id,
                        data: data.attribution,
                        type: 'add-attribution'
                    }
                    this.$store.commit('UpdateComputer', _data)
                    this.$emit('updateHorraire', {index: this.hourre, attribution: data.attribution})
                    this.dialog = false
                }).catch(error => {
                    console.log(error);
                })
            }else this.$store.commit('Alert', {alert: true, color: 'red', message: 'Veuillez sélectionner un client'})
        },

        Client(){
            return {
                computerID: this.computer.id,
                userID:     this.client.id,
                horraire:   this.hourre,
                date:       this.date
            }
        },

        AddClient(){
            if(this.clientName.length > 0){
                console.log('okok');
                ApiClient.post('/api/client/', {name: this.clientName, email: this.clientEmail  })
                .then(({data}) => {
                    this.clients.push(this.formattedClient(data.client))
                    this.client = this.formattedClient(data.client)
                    this.addingClient = false
                }).catch(error => {
                    this.$store.commit('Alert', {alert: true, message: error.message, color: 'error'})
                })
            }
        }
    }
}