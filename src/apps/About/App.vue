<script setup lang="ts">
import { computed, reactive } from 'vue';
import TabBar from '../../components/TabBar.vue';

const emit = defineEmits<{
    (name: "close"): void
}>();

const pos = reactive({
    x: 100,
    y: 100
});

const x = computed(()=>`${pos.x}px`);
const y = computed(()=>`${pos.y}px`);

</script>
<template>
    <div class="app-about">
        <TabBar name="About" v-model="pos" @close="emit('close')"/>
        animeOSとは
        <abbr title="要するにブラウザ">
            ハイパーテキストマークアップ言語レンダリングエンジンと
            JavaScriptインタプリタ(JIT)エンジンとWeb API</abbr>上で動作するOSもどきです。
        <abbr title="要するに馬鹿">TNTSuperMan</abbr>が開発しました。
        アニメーションつよつよです。<br>
        驚くほど何も進んでいません。
    </div>
</template>
<style scoped>
@keyframes about{
    0%{
        left: 0;
        top: 0;
        width: 150px;
        height: 100px;
    }
    100%{
        left: v-bind(x);
        top: v-bind(y);
        width: 450px;
        height: 250px;
    }
}
.app-about{
    position: absolute;
    background: #fff;
    animation: about 0.4s ease-out;
    border-radius: 20px;
    width: 450px;
    height: 250px;
    left: v-bind(x);
    top: v-bind(y);
    outline: solid 1px #000;
}
</style>
