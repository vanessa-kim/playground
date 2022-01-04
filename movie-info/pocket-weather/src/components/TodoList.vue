<template>
  <div>
    <draggable
      class="dragArea list-group"
      :list="list1"
      :clone="clone"
      :group="{ name: 'people', pull: pullFunction }"
      @start="start"
      item-key="id"
    >
      <template #header>      
        <todo-create @add="addNewTodo" />
      </template>
      <template #item="{ element }">
        <div class="list-group-item">
          <div>
            <span>{{ element.priority ? '★' : '☆' }}</span>
            <span>{{ element.id }}</span>
            <span>{{ element.category }}</span>
            <strong>{{ element.content }}</strong>
            <span>{{ element.time ? `${element.time.hour}:${element.time.minute}` : 'All day' }}</span>
          </div>
          <a :href="element.link" target="_blank">
            <i>link</i>
          </a>
          <span v-if="memo">{{ element.memo }}</span>
          <i class="fa fa-times close" @click="removeTodo(index)" />
        </div>
      </template>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import TodoCreate from '@/components/TodoCreate';

let idGlobal = 8;
export default {
  name: 'TodoList',
  components: {
    draggable,
    TodoCreate,
  },
  data() {
    return {
      list1: [
        {
          id: 1, 
          category: 'shopping',
          priority: true,
          content: 'Buying diet coke', 
          time: '',
          allDay: true,
          link: 'http://www.11st.co.kr/products/2495001990?trTypeCd=PW24&trCtgrNo=585021',
          memo: '',
        },
      ],
    }
  },
  methods: {
    clone({ name }) {
      return { name, id: idGlobal++ };
    },
    pullFunction() {
      return this.controlOnStart ? "clone" : true;
    },
    start({ originalEvent }) {
      this.controlOnStart = originalEvent.ctrlKey;
    },
    
    addNewTodo(todoObj) {
      const id = this.list1.length + 1;
      const newTodo = {...todoObj, id};
      this.list1.push(newTodo);
    },
    removeTodo(idx) {
      this.list1.splice(idx, 1);
    },
  },
}
</script>

<style>
</style>