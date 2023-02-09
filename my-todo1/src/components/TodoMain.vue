<template>
    <div class="page">
    <header><h1>Vue Fire todo1</h1></header>
    <main>
      <div class="todos">
        <div class="write">
          <input type="text"   v-model="addItemText"/>
          <button class="btn add" @click="addItem()" >Add</button>
        </div>
        <ul class="list">
          <li v-for ="(todo, i) in todos" :key="todo.text">
            <i  :class="[todo.state ==='yet' ? 'far':'fas', 'fa-check-square']"></i>  <!---삼항연산자 사용,class앞 바인딩!! -->
            <!-- done일때 fas, yet일 때 far -->
            <span>
              {{ todo.text }}
              <b>
                <a href="">Edit</a>
                <a href="">Del</a>
              </b>
            </span>
          </li>
        </ul>
      </div>
    </main>
    </div>
</template>

<script>
export default {
    data(){
       return{
        addItemText:'',//인풋태그와 연결

        todos:[
        {text: '공부하기', state: 'yet'},
        {text: '운동하기', state: 'done'},
        {text: '글쓰기', state: 'done'},
      ]}

    },
    methods: {
        addItem(){
            this.todos.push({text:this.addItemText, state:'yet'}) //input태그로 받아온 값을 todos에 push
            //생길땐 yet으로 해야함 --글쓴내용이랑 같이 엔터나 add를 하면 등록하게 됨 
            
        }
    }
    }


</script>

<style>

</style>