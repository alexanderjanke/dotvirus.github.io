<template>
  <div class="swatch pointer" @click="copyToClipboard(value.hex)">
    <div class="circle" :style="`background: ${value.hex}`"></div>
    <div class="name">
      {{ value.name }}
    </div>
    <div class="hex">
      <div class="text">
        {{ value.hex }}
      </div>

      <transition name="fade">
        <div class="confirm" v-if="showCopiedMessage">
          Copied!
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { copyToClipboard } from "../util/clipboard";

export default {
  name: "Swatch",
  data() {
    return {
      showCopiedMessage: false,
    };
  },
  props: ["value"],
  methods: {
    async copyToClipboard(str) {
      try {
        await copyToClipboard(str);
        this.showCopiedMessage = true;
        setTimeout(() => {
          this.showCopiedMessage = false;
        }, 1500);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.175s ease-in-out, margin-top 0.125s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  margin-top: 0px !important;
}

.swatch {
  text-align: center;
  padding: 15px;
  transition: transform 0.1s ease-in-out;

  &:hover {
    .circle {
      width: 60px;
      height: 60px;
    }
  }

  .circle {
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.25);
    transition: width 0.075s ease-in-out, height 0.075s ease-in-out;
  }

  .name {
    margin-top: 4px;
    font-size: 16px;
    font-weight: 600;
  }

  .hex {
    position: relative;
    margin-top: 4px;

    .text {
      opacity: 0.66;
      font-size: 16px;
    }

    .confirm {
      background: #222;
      color: #fafafa;
      border-radius: 5px;
      padding: 5px 10px 5px 10px;
      position: absolute;
      left: 50%;
      top: 125%;
      transform: translateX(-50%);
      box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
      margin-top: 8px;
    }
  }
}
</style>
