<template>
  <div id="app">
    <todo-main></todo-main>

  </div>
</template>

<script>
import TodoMain from './components/TodoMain.vue'

export default {
  components:{TodoMain}
  }
  
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400&family=Ubuntu:wght@700&display=swap');
/* reset */
* {margin:0; padding:0}
html {font-size:16px}
body {font-family: 'Noto Sans KR', sans-serif;}
li {list-style:none;}
a {text-decoration-line: none; color:black}
input, button, a {outline: none;}


/* common */
.fas, .far {cursor: pointer; margin-right:10px; font-size:1.5rem; vertical-align:-2px; color:#2CA661}
.far {color:#abe0c2}
.btn {border: 1px solid #d9d9d9; line-height: 1.5; padding: 0.5em 1em; border-radius: 1.5em; background-color:white; color:#999; cursor: pointer; margin-right:4px}
.btn.point {background-color: #2CA661; border:none; color:white}

/* header */
h1 {font-family: 'Merriweather', serif;}

/* page */
.page {max-width: 1000; margin:40px auto; width:80%}
.todos {font-size:1.2rem; margin:20px 0 0; position: relative} /*edit할 때 화면 자연스럽게 */
.todos .write {
  position: absolute; /*edit할 때 화면 자연스럽게 */ 
  display:inline-block; background-color:#f3f2eb; padding:10px 15px; border-radius:30px; margin-left:-20px}
.todos .write > input {
    font-size:24px;
    border:none; 
    padding:5px 10px; 
    background-color: transparent;
    vertical-align: middle;
}
.todos .write.edit {border:3px solid #2CA661}
.todos .write > button {margin-right:-2px; vertical-align: middle;}
.todos ul {padding-top:70px;} /*edit할 때 화면 자연스럽게 */ 
.todos ul > li {margin:10px 0}
.todos ul > li > span {padding-right:60px; position: relative;}
.todos ul > li > span:hover b {visibility: visible; opacity:1;}
.todos ul > li > span b {margin-left: 20px; font-size:10px; position: absolute; bottom:5px; right:0; visibility: hidden; opacity:0;}
.todos ul > li > span b > a {margin:0 4px; color:#877457; text-decoration:underline;}
.todos ul > li.editing span {color:#abe0c2}


/* animation */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* pie */
.pie svg {
    overflow: hidden; 
    border-radius: 50%; 
    transform: rotate(-90deg); 
    vertical-align:-3px;
}
.pie {width:30px; display:inline-block; }
.pie circle.pie {
    fill: #fff0;
    stroke: #96d2b1;
}
.pie circle.slice {
    fill: #fff0;
    stroke: #2da562;
}


</style>
