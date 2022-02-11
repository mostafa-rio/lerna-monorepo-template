<template>
  <label class="fc-check">
    label test
    <span v-if="labelBefore" class="label">{{ labelBefore }}</span>
    <input v-model="localValue" type="checkbox" @change="onChange" />
    <span :style="style" class="checkbox">
       <svg
    viewBox="0 0 19 15"
    xmlns="http://www.w3.org/2000/svg"
    width="15px"
    height="15px"
  >
    <g fill="#fff">
      <path
        d="M6.205 11.186L1.864 6.744 0 8.651 6.205 15 19 1.907 17.136 0 6.205 11.186z"
      />
    </g></svg
>
    </span>
    <span v-if="label" class="label">{{ label }}</span>
  </label>
</template>

<script>  
export default { 
  props: {
    // eslint-disable-next-line vue/require-default-prop
    value: null,
    label: {
      type: String,
      default: ''
    },
    labelBefore: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#267bcf',
    },
    size: {
      type: Number,
      default: 16
    }
  },
  computed: {
    localValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    style() {
      return {
        width: this.size + 'px',
        height: this.size + 'px'
      }
    }
  },
  methods: {
    onChange(e) {
      this.$emit('change', e)
    }
  }
}
</script>

<style scoped> 

.fc-check {
  white-space: nowrap;
  margin-bottom: 0;
  user-select: none;
}
  .checkbox {
    display: inline-block;
    border: 4px solid #fff;
    box-shadow: 0 0 0 1px #bdbdbd;
    background-color: #fff;
    border-radius: 3px;
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: content-box;
    vertical-align: middle;
    cursor: pointer;
  }

  .icon {
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }

  .label {
    cursor: pointer;
    vertical-align: middle;
    margin: 0 rem-calc(2px);
    font-weight: 300;
  }
  input[type='checkbox']:checked + .checkbox > .icon {
    visibility: visible;
  }
  input[type='checkbox']:checked + .checkbox {
    background-color: #267bcf;
    border: 4px solid #267bcf;
    box-shadow: 0 0 0 1px #267bcf;
  }
  input[type='checkbox'] {
    display: none;
    visibility: hidden;
  } 
</style>
