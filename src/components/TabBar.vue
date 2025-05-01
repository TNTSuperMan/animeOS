<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const emit = defineEmits<{
    (name: "close"): void;
}>();
const model = defineModel<{x: number, y: number}>();
const props = defineProps<{
    name: string
}>();
const clicked = ref(false);
function mousedown(){
    clicked.value = true;
}
function mouseup(){
    clicked.value = false;
}
function mousemove(e: MouseEvent){
    if(!model.value) return;
    if(!clicked.value) return;
    model.value.x += e.movementX;
    model.value.y += e.movementY;
}
onMounted(()=>{
    addEventListener("mousemove",mousemove);
    addEventListener("mouseup", mouseup);
});
onUnmounted(()=>{
    removeEventListener("mousemove",mousemove)
    removeEventListener("mouseup", mouseup);
})
</script>
<template>
    <div class="tabbar center" @mousedown="mousedown">
        {{ props.name }}
        <div class="close" @click="emit('close')">
            ✕
        </div>
    </div>
</template>
<style scoped>
@keyframes tabbar{
    0%{
        color: none;
        height: 0;
    }
}
.tabbar{
    animation: tabbar 0.4s ease-out;
    width: calc(100% - 2px);
    height: 30px;
    background: #eee;
    border: 1px #ddd solid;
    border-radius: 20px 20px 0 0;
    cursor: move;
    user-select: none;
}
.close{
    position: absolute;
    right: 0;
    background: #fff;
    margin: 10px;
    padding: 0 5px;
    border: 1px #ccc solid;
    cursor: default;
    transition: all 0.4s ease;
}
.close:hover{
    background: #f66;
    color: #fff;
}
</style>