<template>
  <!-- This component will remember user name after writing user name -->
  <div class="user-name-group">
    <div 
      v-if="!currentUserName" 
      :class="['get-user-name-style', { 'error': nameError }]"
    >
      <input
        v-model="inputUserName"
        type="inputUserName" 
        placeholder="Please write down your name :-)"
        @input="validateInput"
        @keyup.enter="handleSubmitName"
      />
      <button @click="handleSubmitName">submit</button>
      <p v-if="nameError">You must enter at least one letter.</p>
    </div>

    <div class="show-user-name" v-else>
      <h4>Hello, {{ currentUserName }}</h4>
    </div>
  </div>
</template>

<script>
const CURRENT_USER = "currentUser";

export default {
  name: 'UserName',

  data() {
    return {
      currentUserName: null,
      inputUserName: '',
      nameError: false,
    }
  },

  mounted() {
    this.initName();
  },

  methods: {
    initName() {
      this.inputUserName = '';
      this.loadName();
    },

    loadName() {
      const currentUser = localStorage.getItem(CURRENT_USER);

      if(currentUser !== null) {
        this.getName();
      }
    },

    setName(name) {
      localStorage.setItem(CURRENT_USER, name);
    },

    getName() {
      this.currentUserName = localStorage.getItem(CURRENT_USER);
    },

    validateInput() {
       if(!this.inputUserName || this.inputUserName.trim().length === 0) {
        this.nameError = true;
        return;
      }
      
      this.nameError = false;
    },

    handleSubmitName() {
      if(!this.inputUserName || this.inputUserName.trim().length === 0) {
        this.nameError = true;
        return;
      }

      this.setName(this.inputUserName);
      this.loadName();
    }
  },
}
</script>

<style lang="scss" scoped>
// basic style
.user-name-group {
  min-height: 36px;
}

// name input style
.get-user-name-style {
  position: relative;

  input {
    width: 100%;
    height: 36px;
    padding: 0 10px;
    border: 3px solid #ddd;
    border-radius: 8px;
    box-sizing: border-box;
    font-size: 13px;
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    display: inline-block;
    height: 35px;
    padding: 0 15px;
    border: 0;
    background-color: #ddd;
    border-radius: 0 6px 6px 0;
  }
}

// name input error style
.get-user-name-style.error{
  input{
    border-color: #f00;

    &::placeholder {
      color: #f00;
    }
  }

  button {
    background-color: #f00;
    color: #fff;
  }
}

// name show style
.show-user-name {
  line-height: 36px;
}
</style>
