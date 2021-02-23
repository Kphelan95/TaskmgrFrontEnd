<template>
  <div class="Team">
    <h1>Team </h1>

    <v-container class="my-5"> 
        <v-layout row wrap>
          <v-flex sm6 md4 lg3 v-for="person in team" :key="person.name">
            <v-card flat class="text-center ma-3">
                <p class='pt-4'> image here </p>
                <v-card-text class="subheading">
                  <div>{{person.name}}</div>
                  <div class="gray--text">{{person.role}}</div>
                </v-card-text>
                <v-card-actions>
                  <v-btn text color='grey'>
                    <v-icon small left>mdi-message</v-icon>
                    <span>message</span>
                  </v-btn>
                </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
    </v-container>
    
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data(){
    return{
      team:[]
    }
  },
  mounted(){
    this.getTeamData();
  },
  computed: {
     ...mapState(['Teams'])
  },
  methods:{
    getTeamData(){
      this.team=this.$store.state.Teams;
    }
  }
}
</script>