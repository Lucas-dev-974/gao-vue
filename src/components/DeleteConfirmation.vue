<template>
    <v-dialog v-model="dialog" max-width="500px" min-width='300px'>
        <template v-slot:activator="{on}">
            <v-btn color="success" v-on="on" class="ml-1" icon>
                <v-icon color="red" >mdi-close</v-icon>
            </v-btn>
        </template>
        <v-card elevation="14">
            <v-app-bar color="#09151E">
                <v-toolbar-title  class="text-h5 white--text">
                    Confirmer la supression
                </v-toolbar-title>
            </v-app-bar>
            
           <v-card-actions class="d-flex justify-space-around">
               <v-btn color="red" @click="Delete">Supprimer</v-btn>
               <v-btn color="orange">Annuler</v-btn>
           </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script src='./js/DeleteConfirmation.js'></script>
