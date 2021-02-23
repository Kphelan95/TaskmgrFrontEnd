<template>
    <nav> 
        <v-toolbar flat>
            <v-app-bar-nav-icon class="grey--text" @click="drawer=!drawer"></v-app-bar-nav-icon>
            
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>misfit</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn text color="grey" v-bind="attrs" v-on="on">
                        <span>Menu dropdown</span>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-item-title>{{ link.text }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>


            <v-btn text color="grey">
                <span>Sign out</span>
                <v-icon right>mdi-account</v-icon>
            </v-btn>
        </v-toolbar>


         <v-navigation-drawer absolute v-model="drawer" app class='indigo' temporary>
            <v-list dense>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon class='white--text' v-text="link.icon" />
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class='white--text' v-text="link.text" />
                    </v-list-item-content>
                    <br>
                </v-list-item>
            </v-list>

            <popup/>

        </v-navigation-drawer>
        

    </nav>
</template>

<script>
import popup from '@/components/Popup'
export default {
    components:{ popup},
    data(){
        return{
            drawer: false,
            links:[
                {icon: 'mdi-view-dashboard', text:'Dashboard', route:'/'},
                {icon: 'mdi-folder', text:'My Projects', route:'/projects'},
                {icon: 'mdi-account-multiple', text:'Team', route:'/team'},
                {icon: 'mdi-account-multiple', text:'Admin', route:'/Admin'},
                {icon: 'mdi-account-multiple', text:'LogIn', route:'/LogIn'},
            ]
        }
    }
}
</script>