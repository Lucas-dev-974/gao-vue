<template>
    <div>
        <v-alert v-model="alert" :color="color">
            <div class="d-flex justify-space-between">
                <div class=""></div>
                <div class="bg-dark">{{message}}</div>
                <div class="">
                    <v-btn color="black" icon @click="close">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    
                </div>
            </div>
        </v-alert>

    </div>
</template>

<script src="./js/alert.js"></script>

<style scoped>
#Notification{
    position: absolute;
    top: 10px;
    width: 90%;
    left: 5%;
}

#Notification > div{
    z-index: 99 !important;
}
</style>