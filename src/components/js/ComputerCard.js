import ApiClient from '../../Services/ApiClient'
import AddAttribution from '../AddAttribution.vue'
import DeleteConfirmation from '../DeleteConfirmation.vue'

export default{

    components: {
        AddAttribution, DeleteConfirmation
    },

    props:{
        computer: {required:true}, 
        date:     {required: true}
    },

    data(){
        return {
            attributions: [],
            horraires:    [],
            clickNumber:  0,

            alert: false
        }
    },

    mounted() {
        this.Init()
    },

    methods: {
        Init(){
            this.computer.attributions.forEach(attribution => {
                if(!isNaN(attribution.horraire)){
                    let horraire = parseInt(attribution.horraire)
                    this.attributions[horraire] = {
                        id:     attribution.id,
                        client: attribution.users.name
                    }
                }
            })
            this.buildHorraire();
        },

        buildHorraire(){   
            this.horraires = [] 
            for (let i = 0; i < 11; i++) {
                this.horraires.push({
                    index: i + 8,
                    attribution: (typeof this.attributions[i + 8] !== 'undefined') ? this.attributions[i + 8] : false
                })
            }
        },

        DeleteAttribution(horraireData){
            ApiClient.delete('/api/attributions/' + horraireData.attribution.id)
            .then(({data}) => {
                console.log('delete attr: ', data);
                this.$store.commit('UpdateComputer', {
                    id:   this.computer.id,
                    data: data,
                    type: 'delete-attribution'
                })
                console.log('this.attributions:', this.attributions);
                let attributions = this.attributions.filter(attribution => {
                    if(attribution.id != data.id) return attribution
                })
                this.attributions = attributions
                console.log(attributions);
                this.Init()
            }).catch(error => {
                this.$store.commit('Alert', {alert: true, message: error.message, color: 'error'})
            })
        },

        RemoveComputer(computer){
            switch(this.clickNumber){
                case 0:
                    this.alert = true
                    this.$store.commit('Alert', {alert: this.alert, color: 'orange', message: 'Clicker une 2eme fois pour supprimer l\'ordinateur'})
                    ++this.clickNumber
                    break
                case 1:
                    this.alert = false
                    ApiClient.delete('/api/computers/' + computer.id)     // Suppression request
                    .then(({data}) => {
                        
                        this.$store.commit('RemoveComputer', computer.id) // Suppression local
                    }).catch(error => {
                        this.$store.commit('Alert', {alert: true, message: error.message, color: 'error'})
                    })
                    this.clickNumber = 0
                    break
            }
        },

        updateHorraire(dataHorraire){
            this.horraires.map(horraire =>{
                if(horraire.index == dataHorraire.index){
                    horraire.attribution = {
                        id: dataHorraire.attribution.id,
                        client: dataHorraire.attribution.users.name
                    }
                }
            })
        }
    }
}