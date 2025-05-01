<script setup lang="ts">
import { useTemplateRef } from 'vue';

const emit = defineEmits<{
    (name: "click"): void;
}>();

const icon = useTemplateRef("icon");
const it = useTemplateRef("it");
function click(){
    it.value?.animate([
        { offset: 0,   opacity: "1" },
        { offset: 0.5, opacity: "0" },
        { offset: 1, opacity: "0" },
    ],{
        easing: "ease-in",
        duration: 300
    });
    icon.value?.animate([
        { offset: 0, width: "50px", height: "50px" },
        { offset: 1, width: "150px", height: "100px" },
    ],{
        easing: "ease-in",
        duration: 300
    }).addEventListener("finish", ()=>{
        emit("click");
    });
}
</script>

<template>
    <div ref="icon" class="icon" @click="click">
        <span ref="it">?</span>
    </div>
</template>

<style scoped>
.icon{
    font-size: 30px;
}
.icon:hover{
    background: #ddd;
}
</style>