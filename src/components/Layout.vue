<template>
  <v-app>
    <v-main>
      <AlertService v-if="$store.state.OnAlert" id="Notification"/>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>


<script>
import AlertService from '../Services/Alert.vue'

export default{
    components:{
        AlertService
    },
}
</script>
