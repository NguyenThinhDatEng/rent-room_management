<template>
  <button :title="content" :style="{ 'min-width': minWidth + 'px' }">
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
    }, // the content of button
    minWidth: {
      type: Number,
      default: 80,
    }, // style min-width for button
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
$border: #afafaf;

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
  cursor: pointer;

  &:hover {
    background-color: $hover;
  }

  &:active {
    background-color: $active;
  }

  &.button--outline {
    background-color: #fff;
    border: 1px solid $border;
    color: black;

    &:hover {
      background-color: $default;
      color: #fff;
    }

    &:active {
      background-color: $default;
    }

    &:focus {
      background-color: $default;
    }
  }
}
</style>