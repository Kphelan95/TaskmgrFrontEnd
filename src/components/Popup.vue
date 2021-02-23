<template>
    <v-dialog max-width="600px" v-model="dialog">
        <template v-slot:activator="{ on, attrs }">
            <v-btn slot="activator" class="ml-4" v-bind="attrs" v-on="on"> add new project </v-btn>
        </template>
        <!--inside the popup -->
        <v-card>
            <v-card-title>
                <span> add new project </span>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                    
                    <v-text-field label="title" v-model="title" :rules="inputRules"></v-text-field>
                    <v-select :items="team" label="Please select a team" solo ></v-select>
                    <v-select :items="team" label="assign to a person" solo ></v-select>
                    <v-textarea label="information" v-model="info"></v-textarea>


                    <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="auto" > <!-- look what a menu is -->
                        <template v-slot:activator="{ on, attrs }">
                            <!-- <v-text-field v-model="date" label="Picker in menu" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on" ></v-text-field> -->
                            <v-text-field v-model="date" label="due date" readonly v-bind="attrs" v-on="on" ></v-text-field>
                        </template>
                        <v-date-picker v-model="date" no-title scrollable >
                            <v-spacer></v-spacer>
                            <v-btn text color="primary" @click="menu = false" >Cancel</v-btn>
                            <v-btn text color="primary" @click="$refs.menu.save(date)" >OK</v-btn>
                        </v-date-picker>
                    </v-menu>
                    <v-row>
                        <v-btn text class="success mx-0 mt-3" @click="test">submit</v-btn>
                        <v-btn text class="error mx-0 mt-3" @click="close">cancel</v-btn>
                    </v-row>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>






</template>
<script>
export default {
    data () {
        return {
            dialog: false,
            title:'',
            info:'',
            date: new Date().toISOString().substr(0, 10),
            menu: false,
            inputRules:[
                v=> v.length >=3 || 'Minimum length is 3 chars'
            ],
            team:['Foo', 'Bar', 'Fizz', 'Buzz'],
            people:['Foo', 'Bar', 'Fizz', 'Buzz']
            
        }
    },
    methods:{
        test(){
            if(this.$refs.form.validate()){
                console.log(this.title, this.info);
                this.dialog=false;
            }
        },
        close(){
            this.dialog=false;
        }

    }
}
</script>