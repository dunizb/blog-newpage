<template>
  <div class="tab-switch-btn">
    <span class="point" :class="{'actived': actived}"></span>
    <span class="label"><slot></slot></span>
  </div>
</template>
<script>
export default {
  name: 'tabSwitchBtn',
  props: {
    actived: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
.tab-switch-btn {
  display: inline-block;
  border: 1px solid #ccc;
  padding: 5px 15px;
  font-size: 14px;
  position: relative;
  top: -2px;
  cursor: pointer;
  &:hover {
    border-color: red;
  }
  .point {
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: #ccc;
    border-radius: 50%;
    &.actived {
      background-color: red;
    }
  }
}
</style>
