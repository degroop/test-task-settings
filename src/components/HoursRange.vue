<template>
  <div class="hours-range">
      <div class="hours-range-input">
          <input type="text" v-model.lazy="firstHour">
          <div class="hours-range-seperator">-</div>
          <input type="text" v-model.lazy="secondHour">
      </div>
      <vue-slider 
        v-model="value" 
        v-bind="options" 
        :process-style="{ backgroundColor: '#990000' }"
        :rail-style="{ backgroundColor: '#D8D8D8' }"
        :tooltip="'none'" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

@Component({
    components: {
        VueSlider
    }
})
export default class HoursRange extends Vue {
    private value: Array<number> = [8, 17]
    private options: object = {
        min: 0,
        max: 24,
        interval: 1,
        width: 'auto',
        height: 8,
        dotSize: 20
    }
    get firstHour(): string {
        return `${('0' + this.value[0]).substr(-2)}:00`
    }
    get secondHour(): string {
        return `${('0' + this.value[1]).substr(-2)}:00`
    }
    set firstHour(newValue) {
        const time = newValue.split(':');
        this.value.splice(0, 1, +time[0].replace(/[^0-9]/g, ""));
    }
    set secondHour(newValue) {
        const time = newValue.split(':');
        this.value.splice(1, 1, +time[0].replace(/[^0-9]/g, ""));
    }
}
</script>

<style scoped lang="less">
.hours-range {
    width: 100%;
    &-seperator {
        padding: 0 4px;
    }
    &-input {
        text-align: center;
        line-height: 22px;
        & > * {
            display: inline-block;
        }
        & input {
            width: 48px;
            background: #FFFFFF;
            border: 1px solid rgba(155, 155, 155, 0.5);
            box-sizing: border-box;
            border-radius: 3px;   
            text-align: center;   
            font-size: 13px;
            font-family: 'heeboregular';
        }
    }
}
</style>
