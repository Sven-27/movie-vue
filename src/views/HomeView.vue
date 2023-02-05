<template>
  <div class="home">
    <input type="text" v-model="message" />
    <button @click="saveMessage(message)" type="button" class="btn btn-info">Save</button>
    <button @click="resetMessage()" type="button" class="btn btn-warning">Reset</button>
    <p>{{value}}</p>
    <input type="number" v-model="number" />
    <button @click="incrementCounter()" type="button" class="btn btn-success">Increment</button>
    <button @click="decrementCounter()" type="button" class="btn btn-danger">Decrement</button>
    <h2>{{counter}}</h2>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      message: '',
      number: null
    }
  },
  methods: {
    saveMessage(message) {
      console.log(message)
      this.$store.dispatch('saveMessage', message)
    },
    resetMessage() {
      this.$store.dispatch('resetMessage')
    },
    incrementCounter() {
      this.$store.dispatch('incrementCounter', this.number)
    },
    decrementCounter() {
      this.$store.dispatch('decrementCounter', this.number)
    },
  },
  computed: {
    value() {
      return this.$store.state.message
    },
    counter() {
      return this.$store.state.counter
    }
  }
}
</script>
