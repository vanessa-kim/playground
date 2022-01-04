<template>
  <form class="new-todo-form">
    <h4>ADD New Todo</h4>

    <div class="form-row">
      <label>priority:</label>
      <input type="checkbox" v-model="newTodo.priority"/>
    </div>
    
    <div class="form-row">
      <label>category:</label>
      <select v-model="newTodo.category">
        <option v-for="option in categoryOptions" :key="option">
          {{ option }}
        </option>
      </select>
    </div>

    <div class="form-row">
      <label>content:</label>
      <input type="text" v-model="newTodo.content" />
    </div>
    
    <div class="form-row time">
      <label>Time:</label>
      <select v-model="newTodo.time.hour">
        <option v-for="option in hourOptions" :key="option">
          {{ option }}
        </option>
      </select>
      <select v-model="newTodo.time.minute">
        <option v-for="option in minuteOptions" :key="option">
          {{ option }}
        </option>
      </select>
      <label>All day:</label>
      <input type="checkbox" v-model="newTodo.allDay" />
    </div>
    <div class="form-row">
      <label>link:</label>
      <input type="text" v-model="newTodo.link" />
    </div>
    <div class="form-row">
      <label>memo:</label>
      <input type="text" v-model="newTodo.memo" />
    </div>
    <div class="form-footer">
      <button class="add-btn" @click="addNewTodo">
        add
      </button>
      <button class="init-btn" @click="initNewTodo">
        Init
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'TodoCreate',
  data() {
    return {
      initTodo: {
        category: '',
        priority: false,
        content: '', 
        time: {
          hour: '00',
          minute: '00',
        },
        allDay: false,
        link: '',
        memo: '',
      },

      // sample data
      newTodo: {
        category: 'shopping',
        priority: false,
        content: 'Buying diet coke', 
        time: {
          hour: 11,
          minute: 30,
        },
        allDay: false,
        link: 'http://www.11st.co.kr/products/2495001990?trTypeCd=PW24&trCtgrNo=585021',
        memo: '',
      },

      // select options
      categoryOptions: [
        'appointment',
        'homework',
        'exercise',
        'shopping',
        'cleaning',
        'working',
      ],
      hourOptions: this.generateTimeOption(24),
      minuteOptions: this.generateTimeOption(60),
    }
  },
  methods: {
    generateTimeOption(maxTime) {
      const TimeList = [];
      for(let i=0; i < maxTime; i++) {
        if(i < 10) {
          TimeList.push(`0${i}`); 
        } else {
          TimeList.push(i);
        }
      }
      return TimeList;
    },

    addNewTodo() {
      this.$emit('add', this.newTodo);
    },

    initNewTodo() {
      this.newTodo = this.initTodo;
    }
  },
}
</script>

<style lang="scss" scopped>
.new-todo-form {
  border: 1px solid #ddd;
  padding: 20px;

  h4 {
    font-weight: bold;
    font-size: 15px;
    line-height: 30px;
  }
}

.form-row {
  display: flex;
  align-items: center;
  padding: 2px 10px;
  font-size: 13px;
  
  label {
    display: inline-block;
    width: 60px;
    line-height: 24px;
  }

  input[type='text'] {
    width: calc(100% - 60px);
    height:20px;
  }

  input[type='checkbox'] {
    width: 15px;
    height: 15px;
  }

  select {
    margin-right: 10px;
  }

  &.time {
    select {
      margin-right: 5px;
    }
    select + label {
      padding-left:10px;
      width: 45px; 
    }
  }
}

.form-footer {
  display: flex;
  justify-content: flex-end;
  padding: 10px 10px 0;

  button {
    height: 26px;
    min-width: 50px;
  }
  
  .add-btn {
    margin-right: 5px;
  }
}
</style>