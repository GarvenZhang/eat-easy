<template>
  <div class="circle-wrap" @click="clickHandle">
    {{name}}
  </div>
</template>

<script>
export default {
  props: {
    name: String,
  },
  methods: {
    clickHandle () {
      this.$emit('onClick');
    }
  }
}
</script>

<style scoped>
.circle-wrap {
  width: 80px;
  height: 80px;
  font: 400 14px/80px 'serif';
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 50%;
}
.active {
  background-color: #5b7d7d6b;
}
</style>


