<template>
  <div class="about">
    <h1>Here is the copied message: {{ value }}</h1>
    <input type="text" v-model="message" />
    <button @click="saveMessage(message)" type="button" class="btn btn-info">Save</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'AboutView',
  components: {
  },
  data() {
    return {
      message: '',
    }
  },
  methods: {
    saveMessage(message) {
      console.log(message)
      this.$store.dispatch('saveMessage', message)
    },
  },
  computed: {
    value() {
      return this.$store.state.message
    },
  }
}
</script>
