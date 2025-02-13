<template>

    <button :id="data.id" :type="data.type ?? 'text'">{{ data.text }}</button>
    
    </template>
    
    <script setup lang="ts">
    
    interface ButtonComponentProperties {
        data: {
            text: string,
            id: string,
            type: 'button' | 'submit' | 'reset',
        }
    }
    
    defineProps<ButtonComponentProperties>()
    
    </script>