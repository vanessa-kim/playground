<template>
  <div>
    {{ value }}
    <button @click="handleCreateTodo">CREATE</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import MUTATIONS from '../store/modules/todo/mutation';
const { mapGetters, mapMutations } = createNamespacedHelpers('todo');

export default {
  name: 'TodoCreate',
  computed: {
    ...mapGetters({
      value: 'currentTestValue',
    }),
  },
  methods: {
    ...mapMutations({
      createTodo: MUTATIONS.CREATE_TODO,
    }),

    handleCreateTodo() {
      this.createTodo(100);
    },
  },
}
</script>

<style>

</style>