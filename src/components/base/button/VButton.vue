<template>
  <button :title="content">
    {{ content }}
  </button>
</template>

<script>
export default {
  name: "NormalButton",
  props: {
    content: {
      type: String,
      required: true,
    },
  },
  created() {},
  components: {},
  emits: [],
  methods: {},
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
$default: #1aa4c8;
$hover: #0582a2;
$active: #28b7dc;

button {
  background-color: $default;
  padding: 8px;
  border-radius: 4px;
  outline: none;
  border: none;
  cursor: pointer;
  color: #fff;
  height: 36px;
  line-height: 22px;

  &:hover {
    background-color: $hover;
  }

  &:active {
    background-color: $active;
  }
}
</style>