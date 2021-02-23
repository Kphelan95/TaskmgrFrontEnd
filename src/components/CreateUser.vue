<template>
     <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card ref="form">
          <v-card-text>
            <v-text-field ref="name" v-model="name" :rules="[rules.required]"  label="Full Name" placeholder="John Doe" required ></v-text-field>
            <v-text-field ref="address" v-model="address" label="Address Line" placeholder="Snowy Rock Pl" counter="25" required :rules="[rules.required, rules.addressLen]" ></v-text-field>
            <v-text-field ref="city" v-model="city" :rules="[rules.required]" label="City" placeholder="El Paso" required></v-text-field>
            <v-text-field ref="state" v-model="state" :rules="[rules.required]" label="State/Province/Region" required placeholder="TX"></v-text-field>
            <v-text-field ref="zip" v-model="zip" :rules="[rules.required]" label="ZIP / Postal Code" required placeholder="79938"></v-text-field>
            <v-autocomplete ref="team" v-model="team" :rules="[rules.required]" :items="teams" label="Team" placeholder="Select..." required></v-autocomplete>
          </v-card-text>
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
        </v-card>
      </v-col>
    </v-row>
</template>


<script>
  export default {
    data: () => ({
        name :'',
        address:'',
        city:'',
        state:'',
        zip:'',
        team:'',
        teams: ['Afghanistan', 'Albania', 'Algeria'],
        rules: {
            addressLen: address => (address || '').length <= 25 || 'Max 25 characters',
            required: v => !!v || 'This field is required',
        }
    }),
    methods: {
        submit(){
            console.log("submit")
        },
        resetForm(){
            this.name=''
            this.address=''
            this.city=''
            this.state=''
            this.zip=''
            this.team=''
        }

    }
  };

</script> 