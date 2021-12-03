<template>
    <v-navigation-drawer width="400" class="pt-10" permanent expand-on-hover app color="#09151E">
        <v-divider></v-divider>
        <v-icon color="white" class="ml-3">mdi-laptop</v-icon>
        <AddComputer />
        <v-divider></v-divider>

        <v-list dense nav  v-if="update">
            <v-list-item>
                <v-icon></v-icon>
                <v-text-field
                    :label="'Nouveau nom pour ' + updateComputer.name"
                    color="white" dark v-model="updateComputer.name" @keyup.enter="UpdateName"
                ></v-text-field>
            </v-list-item>
        </v-list>


        <v-list nav dense>
            <v-list-item v-for="computer in $store.state.Computers" :key="computer.id"> 
                <v-icon>mdi-plu</v-icon>
                <v-list-item-title class="white--text">{{computer.name}}</v-list-item-title>
                <v-btn color="success" icon> <v-icon color="orange" @click="UpdateName(computer)">mdi-pencil</v-icon></v-btn>
                <v-btn color="success" icon><v-icon color="red" @click="RemoveComputer(computer)">mdi-close</v-icon></v-btn>
            </v-list-item>
        </v-list>   
    </v-navigation-drawer>
</template>

<script src="./js/ComputerList.js"></script>
