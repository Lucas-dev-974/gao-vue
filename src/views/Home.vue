<template>
    <v-app> 
        <div style='height: 33px !important; background: red;' class="bg-primary">
            <v-app-bar elevation="4" color="#09151E" class="d-flex justify-center">
                <h3 class="white--text">GAO - Gestion D'ordinateur</h3>
            </v-app-bar>
        </div>

        <!-- <ComputersList /> -->

        <v-row  style="position: relative; top: 5%">
            <v-col cols="1" md="3" sm="8" class="px-12">
                <v-menu offset-y v-model="dateMenu" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field v-model="date" label="Saisir une date" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                    </template>
                    <v-date-picker v-model="date" @change="initialize" @input="menuDate = false" locale="fr-fr"></v-date-picker>
                </v-menu>                
            </v-col>
            
            <v-col cols="1" class="mt-5">
                <AddComputer />
            </v-col>

        </v-row>
        <v-row class="pa-12 d-flex justify-center" :key="reload">
            <v-col cols="auto" v-for="computer in $store.state.Computers" :key="computer.id">
               <ComputerCard :computer='computer' :date="date"/>
            </v-col>  
        </v-row>        
    </v-app>

</template>

<script src='./js/Home.js' />
