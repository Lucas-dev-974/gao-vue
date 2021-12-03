<template>
    <v-dialog v-model="dialog" max-width="500px" min-width='300px'>
        <template v-slot:activator="{on}">
            <v-icon>mdi-laptop</v-icon>
            <v-btn color="success" v-on="on" class="ml-1" icon>
                <v-icon color="green" >mdi-plus</v-icon>
            </v-btn>
        </template>
        <v-card elevation="14">
            <v-app-bar color="#09151E">
                <v-toolbar-title  class="text-h5 white--text">
                    Ajout d'un Ordinateur
                </v-toolbar-title>
            </v-app-bar>
            
            <v-container class="pa-6">
                <v-text-field  label="Nom du pc" @keyup.enter="AddComputer" v-model="computer_name" placeholder="Nom de l'ordinateur"/> 
                <v-btn color="success" outlined block @click="AddComputer">Ajouter</v-btn>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script src='./js/AddComputer.js'></script>
