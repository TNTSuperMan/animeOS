import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const { mount } = createApp(App);

function mountApp(){
    mount(document.body);
}
function main(){
    document.readyState === "loading" ?
        addEventListener("DOMContentLoaded", mountApp) :
        mountApp();
}

main();
