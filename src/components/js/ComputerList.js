import axios from 'axios';
import AddComputer from '../AddComputer.vue'
import ApiClient from '../../Services/ApiClient';

export default{

    data(){
        return {
            clickNumber: {},
            update: false,
            updateComputer: null, 
        }
    },
    
    components: {
        AddComputer
    },

    methods: {
        RemoveComputer(computer){
            if(Object.keys(this.clickNumber).length == 0){
                this.clickNumber = { id: computer.id, click: 1}
                this.$store.commit('Alert', {alert: true, color: 'orange', message: 'Clicker une 2eme fois pour supprimer l\'ordinateur'})
            }else{
                if(this.clickNumber.id !== computer.id){// Si click sur supp un autre ordi alors on reset
                    this.clickNumber = {}                // reset
                }else{                                  // Si double click sur supp le meme ordi alors on supprime
                    ApiClient.delete('/api/computers/delete/' + computer.id)     // Suppression request
                    .then(({data}) => {
                        if(data.success){
                            this.$store.commit('RemoveComputer', computer.id) // Suppression local
                        }else{
                            this.$store.commit('Alert', {alert: true, color: 'orange', message: 'Une erreur est survenue'})
                        }
                    })
                    this.clickNumber = {}
                    this.$store.commit('Alert', {alert: false})
                }
            }
        },

        UpdateName(computer){
            if(computer instanceof KeyboardEvent){
                let data = {
                    id:    this.updateComputer.id,
                    name:  this.updateComputer.name,
                    // type: 'update-name'
                }
                axios.post('/api/computers/update', data)
                .then(({data}) => {
                    if(data.success){
                        this.$store.commit('UpdateComputer', {
                            type: 'update-name',
                            id:   computer.id,
                            data: this.updateComputer.name
                        })
                        this.update = false
                        this.$store.commit('Alert', {alert: true, color: 'success', message: 'L\ordinateur a bien été mis à jour'})
                    }
                })
                
            }else{
                this.updateComputer = computer
                this.update = true
            }

        }
    }
}