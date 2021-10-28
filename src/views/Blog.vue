<template>
  <div>
    <h1>Blog</h1>
    <h4>{{ counter }}</h4>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  methods: {
    increment() {
      counter++;
    }
  },
  data: function () {
    return {
      counter: 0,
    }
  }
}
</script>