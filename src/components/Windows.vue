<script setup lang="ts">
import { ref } from 'vue';
import type { App } from '../apps';

const props = defineProps<{
    app: App
}>();
const { app: { icon, app } } = props;

const apps = ref<symbol[]>([]);

</script>
<template>
    <div class="windows">
        <icon @click="apps = [...apps, Symbol()]"/>
        <app v-for="_ in apps" @close="apps.splice(apps.indexOf(_))"/>
    </div>
</template>
<style scoped>
.windows{
    position: relative;
}
</style>