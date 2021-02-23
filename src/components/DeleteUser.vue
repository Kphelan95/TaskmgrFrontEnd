<template>
    <v-row justify="center">
        <v-col cols="12" sm="10" md="8" lg="6">
            <v-autocomplete ref="person" v-model="name" :items="Users" item-text="person" return-object label="Person's name" placeholder="Select..." required></v-autocomplete> 
            <v-text-field v-model="name.ID" label="ID" outlined readonly></v-text-field>
            <v-text-field v-model="name.state" label="State" outlined readonly></v-text-field>
            <v-text-field v-model="name.team" label="Team" outlined readonly></v-text-field>      
            <v-divider class="mt-12"></v-divider>
            <v-card-actions>
            <v-btn text> Cancel </v-btn>
            <v-spacer></v-spacer>
            <v-slide-x-reverse-transition>
              <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon class="my-0" v-bind="attrs" @click="resetForm()" v-on="on">
                    <v-icon>mdi-refresh</v-icon>
                  </v-btn>
                </template>
                <span>Refresh form</span>
              </v-tooltip>
            </v-slide-x-reverse-transition>
            <v-btn color="primary" text @click="submit()">Submit</v-btn>
          </v-card-actions>
        </v-col>
    </v-row>
</template>


<script>
//when i selecte somthing from the autocomplete, then populate the below feilds
// i need to import the store to populate the feilds

//team gets the value of the current selected user, 


//add a confern and a check that the person is real

import { mapState } from 'vuex';
  export default {
    data: () => ({
        name: { person:"", state:'',adress:'', city:'', zipCode:'',team:'', ID:''},
        usersTeam:'',
        teams: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        Users:[]
    }),  mounted(){
      this.getUserData();
      //this.$store.dispatch('loadQuotes');
  },
  computed: {
     ...mapState(['Users'])
  },
    methods: {
        submit(){
            //this.name, this.usersTeam check to make sure this is a thing
            console.log("submit")
        },
        resetForm(){
            this.name=''
            this.address=''
            this.city=''
            this.state=''
            this.zip=''
            this.team=''
        },
        getUserData(){
          this.Users=this.$store.state.Users;
        }

    }
  };

</script>