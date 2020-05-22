<template>
<div>
<h1>Hello World</h1>
<introduction></introduction>
</div>
</template>

<script>
import introduction from './introduction.vue'
// Using introduction as a nested asset for this component.
export default {
  name: 'HelloWorld',
  components: { introduction },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
