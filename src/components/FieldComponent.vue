<template>
    <article>
        <label :for="data.id"></label>
        <input 
        :type="data.type ? data.type : 'text'" 
        :placeholder="data.placeholder" 
        :class="data.class ? data.class : ''" 
        />

    </article>
</template>

<script setup lang="ts">

interface FieldComponentProperties {
    data: {
        id: string,
        type?: string,
        placeholder: string,
        class?: string
    }
}

defineProps<FieldComponentProperties>()

</script>