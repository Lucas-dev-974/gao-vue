import ApiClient from "../../Services/ApiClient"

export default{
    props:{
        url: {required: true},
        id:  {required: true}
    },

    data(){
        return {
            dialog: false
        }
    },

    mounted(){
    },

    methods: {
        Delete: function(){
            ApiClient.delete(this.url + this.id)
            .then(({data}) => {
                console.log(data);
                console.log('deleted');
                if(this.url.includes('computers')) this.$store.commit('RemoveComputer', this.id)
            })
        }
    }
}