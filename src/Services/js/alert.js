export default{
    data(){
        return{
            message: this.$store.state.AlertMessage,
            alert:   this.$store.state.OnAlert,
            color:   this.$store.state.AlertColor
        }
    },


    methods: {
        close(){
            this.$store.commit('Alert', {
                alert: false
            })
        }
    }
}