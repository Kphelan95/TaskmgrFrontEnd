<template>
<v-row align="center" justify="center">
    <v-card width=600px class='mt-6'>
                <v-form class="px-3" ref="form" >             
                    <v-text-field label="User Name" ></v-text-field>
                    <v-text-field autocomplete="current-password" :value="userPassword" label="Enter password" :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="() => (value = !value)" :type="value ? 'password' : 'text'" :rules="[rules.password]" @input="_=>userPassword=_"></v-text-field>

                    <v-row>
                        <v-btn text class="success mx-0 mt-3" >submit</v-btn>
                        <v-btn text class="error mx-0 mt-3">cancel</v-btn>
                    </v-row>
                </v-form>
    </v-card>
</v-row>
</template>


<script>
  export default {
    data: () => ({
      userPassword: "",
      valid: true,
      value: true,
      rules: {
        required: value => !!value || "Required.",
        password: value => {
          const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.{8,})/;
          return (
            pattern.test(value) ||
            "Min. 8 characters with at least one capital letter"
          );
        }
      }
    })
  };
</script>