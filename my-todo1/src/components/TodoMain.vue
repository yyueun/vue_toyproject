<template>
    <div class="page">
    <header><h1>Vue Fire todo1</h1></header>
    <main>
    <div class="todos">
        <!-- 등록 -->
        <div class="write" v-if="writeState ==='add'">
          <input
          ref="writeArea"  
          type="text"   
          v-model="addItemText" 
          @keyup.enter="addItem"/>
          <button class="btn add" @click="addItem()" >Add</button>
        </div>
        <!-- 수정 -->
        <div class="write" v-else>
          <input
          ref="writeArea"  
          type="text"   
          v-model="editItemText" 
          @keyup.enter="editSave"/>
          <button class="btn add" @click="editSave" >Save</button>
        </div>
        <ul class="list">
          <li v-for ="(todo, i) in todos" :key="i">
            <i
            @click ="checkItem(i)"  
            :class="[todo.state ==='yet' ? 'far':'fas', 'fa-check-square']"></i>  <!---삼항연산자 사용,class앞 바인딩!! -->
            <!-- done일때 fas, yet일 때 far -->
            <span>
              {{ todo.text }}
              <b>
                <a  href=""  @click.prevent="editShow(i)">Edit</a>
                <a href="" @click.prevent="delitem(i)">Del</a>
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
        writeState:'add',
        addItemText:'',//인풋태그와 연결
        ediItemText:'',
        crrEditItem:'', //몇번째꺼를 수정하는지 글의 인덱스 저장

        todos:[
        {text: '공부하기', state: 'yet'},
        {text: '운동하기', state: 'done'},
        {text: '글쓰기', state: 'done'},
      ]}

    },
    methods: {
        addItem(){
            if (this.addItemText ==='') return; 
            this.todos.push({text:this.addItemText, state:'yet'}) //input태그로 받아온 값을 todos에 push
            //생길땐 yet으로 해야함 --글쓴내용이랑 같이 엔터나 add를 하면 등록하게 됨 
            this.addItemText='';
            
            },

            //체크박스 선택,취소 
        checkItem(i){
            if(this.todos[i].state === 'yet'){
                this.todos[i].state = 'done'
            }else{
                this.todos[i].state ='yet'
            }

        },
        editShow(index){
            this.crrEditItem = index
            this.writeState = 'edit'
            this.editItemText = this.todos[index].text  //수정할 글 내용 인풋창에 보여주기
        },
        editSave(){
            this.todos[this.crrEditItem].text = this.editItemText
            this.writeState ="add"
            //add로 변경


        },
        delitem(i){
            this.todos.splice(i,1)


        }
        },
        mounted(){
            
            this.$refs.writeArea.focus() //인풋창 깜빡이게 하기 
        }
    }


</script>

<style>

</style>