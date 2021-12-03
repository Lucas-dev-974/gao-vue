<template>
    <v-dialog v-model="dialog" max-width="600">
        <template v-slot:activator="{on}">
            <v-btn color="success" v-on="on" icon class="ml-3">
                <v-icon color="green" >mdi-plus</v-icon>
            </v-btn>
        </template>

        <v-card>
            <v-card-title primary-title>
                Ajout d'une attribution pour {{ computer.name }}
            </v-card-title>
            
            <v-card-text v-if="!addingClient">
                <v-autocomplete :loading="loading" :items="clients" :search-input.sync="search" v-model="client" 
                item-text="name" filled return-object cache-items hide-no-data hide-details label="Sélection le client">
                </v-autocomplete>                
            </v-card-text>

            <v-card-text v-else>
                <v-text-field label="Nom du client" v-model="clientName" @keyup.enter="AddClient"></v-text-field>
                <v-text-field label="Email du client" v-model="clientEmail" @keyup.enter="AddClient"></v-text-field>
            </v-card-text>

            <v-card-actions class="d-flex justify-space-around">
                <div class="" v-if="!addingClient">  
                    <v-btn color="orange"  @click="addingClient = true">Ajouter un client</v-btn>
                    <v-btn color="success" @click="Attribuer">Attribuer</v-btn>
                </div>
                <v-btn color="success" v-else @click="AddClient">Ajouter un client</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script src="./js/AddAttribution.js"></script>
