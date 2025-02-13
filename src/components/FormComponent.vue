<script setup lang="ts">
import ButtonComponent from './ButtonComponent.vue';
import FieldComponent from './FieldComponent.vue';

</script>


<template>
<form class="login-form">
    
    <section>
        <FieldComponent :data="{id: 'username', placeholder: 'Nom d\'utilisateur'}" />
        <FieldComponent :data="{id: 'password', placeholder: 'Mot de passe', type: 'password'}" />
    </section>
    <section id="actions">
        <ButtonComponent :data="{text: 'Connexion', type: 'submit',id:'inscription'}" />
        <ButtonComponent :data="{text: 'Annuler', type: 'reset', id:'reset'}" />
    </section>
</form>
</template>