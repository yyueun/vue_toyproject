<template>
    <div class="page">
    <header><h1>Vue Fire todo1</h1></header>
    <main>
    <div class="todos">
    <transition name="fade">
        <!-- 등록 -->
        <div class="write add" v-if="writeState ==='add'" key="add">
          <input
          ref="writeArea"  
          type="text"   
          v-model="addItemText" 
          @keyup.enter="addItem"/>
          <button class="btn add" @click="addItem()">Add</button>
        </div>
        <!-- 수정 -->
        <div class="write edit" v-else key="edit">
          <input
          ref="writeArea"  
          type="text"   
          v-model="editItemText" 
          @keyup.enter="editSave"/>
          <button class="btn add" @click="editSave" >Save</button>
        </div>
    </transition>
        <ul class="list" ref="list">
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
import {db} from '../firebase/db';
console.log(db)

export default {
    data(){
       return{
        writeState:'add',
        addItemText:'',//인풋태그와 연결
        ediItemText:'',
        crrEditItem:'', //몇번째꺼를 수정하는지 글의 인덱스 저장
        todos:[]
    }

    },
    methods: {
        addItem(){
            if (this.addItemText ==='') return;
            //지우기 위한 준비 
            db.collection('todos').add({
                text:this.addItemText, 
                state:'yet'
            }).then(sn=> {
                db.collection('todos').doc(sn.id).update({
                    id: sn.id 
                })
            });

            // this.todos.push({text:this.addItemText, state:'yet'}) //input태그로 받아온 값을 todos에 push
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
            this.$refs.list.children[index].classList.add('editing') ///수정할 글 선택할 때, editing이라는 class를 줌 
        },
        editSave(){
            
            // this.todos[this.crrEditItem].text = this.editItemText
            db.collection('todos')
                .doc(this.todos[this.crrEditItem].id)
                    .update({
                        text:this.editItemText
                     })
            this.writeState='add';
            this.$refs.list.children[this.crrEditItem].classList = ''; //수정할 글 save하면 초록색 테두리 지우기 
            //add로 변경


        },
        //지우기 
        delitem(i){
            // this.todos.splice(i,1)
            db.collection('todos').doc(this.todos[i].id).delete()


        }
        },
        mounted(){
            db.collection('todos').get().then((result) => {
                 result.forEach((doc)=>{
                    console.log(doc.data())
                    this.todos.push(doc.data());
    })
});
            
            this.$refs.writeArea.focus() //인풋창 깜빡이게 하기 
        },
        firestore:{
            todos: db.collection('todos') //db에서 쓰는 이름과 같아야함.
            
        }
    }


</script>

<style>

</style>