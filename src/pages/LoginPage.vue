<template>

    <fieldset>
        <legend>Connexion</legend>
           <FormComponent />
           <!-- Affichage d'erreur -->
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

<!-- Indication de succès -->
<p v-if="isLoggedIn" class="success"> Vous êtes connecté en tant que {{ username }} !</p>
    </fieldset>

</template>

<script setup lang="ts">
import { ref, computed} from 'vue'
import FormComponent from '../components/FormComponent.vue'

// 1. Déclarations des variables réactives
const username = ref('')
const password = ref('')
const isLoggedIn = ref(false)
const errorMessage = ref('')

// 2. Propriété calculée pour savoir si le formulaire est valide
const isFormValid = computed(() => {
  return username.value.trim() !== '' && password.value.trim() !== ''
})

// 3. Fonction de connexion
function handleLogin() {
  errorMessage.value = ''
  
  if (!username.value || !password.value) {
    errorMessage.value = 'Veuillez remplir tous les champs.'
    return
  }

  // Simulation de la validation
  if (username.value === 'user' && password.value === '1234') {
    isLoggedIn.value = true
    errorMessage.value = ''
  } else {
    errorMessage.value = 'Identifiants invalides.'
    isLoggedIn.value = false
  }
}
</script>

<style >
.login-form {
  max-width: 300px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.login-form div {
  margin-bottom: 1rem;
}
.error {
  color: red;
  margin-top: 0.5rem;
}
.success {
  color: green;
  margin-top: 0.5rem;
  font-weight: bold;
}

fieldset {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem auto;
  max-width: 300px;
}
input {
  width: 100%;
  margin-bottom: 0.5rem;
}

.login-form {
  background-color: gray;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
}

#inscription {
  color: white;
  background-color: blue;
}

#reset {
  color: white;
  background-color: red;
  margin-top: 3px;
}

#actions {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>