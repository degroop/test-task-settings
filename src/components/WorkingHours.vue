<template>
  <div class="working-hours">
      <div class="working-hours-header">
          <div class="first-column">
              Schedule
          </div>
          <div class="second-column">
            <input type="radio" id="fixed" name="radio-group" v-model="fixed" :value="true">
            <label class="working-hours-info" for="fixed">Fixed</label>
            <input type="radio" id="flexible" name="radio-group" v-model="fixed" :value="false">
            <label class="working-hours-info" for="flexible">Flexible</label>            
          </div>
      </div>
      <div class="working-hours-body">
          <div class="working-hours-summury working-hours-day">
              <div class="first-column">Working hours</div>
              <div class="second-column">
                  <hours-range />
              </div>
          </div>
          <div class="working-hours-day" v-for="(day, index) in days" :key="index">
              <div class="first-column">
                    <input type="checkbox" class="custom-checkbox" :id="`day-${index}`" v-model="day.status">
                    <label :for="`day-${index}`">{{ day.title }}</label>
              </div>
              <div :class="['second-column', { hidden: !day.status }]">
                  <hours-range />
              </div>
          </div>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import HoursRange from '@/components/HoursRange.vue';

@Component({
    components: {
        HoursRange
    }
})
export default class WorkingHours extends Vue {
    private days: Array<Object> = [
        { title: 'Monday', status: true },
        { title: 'Tuesday', status: true },
        { title: 'Wednesday', status: true },
        { title: 'Thursday', status: true },
        { title: 'Friday', status: true },
        { title: 'Saturday', status: false },
        { title: 'Sunday', status: false },
    ]
    private fixed: boolean = false;
}
</script>

<style scoped lang="less">
.working-hours {
    font-family: 'heeboregular';
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    &-header {
        height: 48px;
        line-height: 48px;
        padding-left: 6px;
        border-bottom: 1px solid rgba(151,151,151,.3);
    }
    &-body {
        padding-left: 6px;
        padding-bottom: 48px;
    }
    &-info {
        font-family: 'heebo_lightregular';
        font-size: 15px;
        margin-right: 19px;
        color: #4A4A4A !important;
    }
    &-summury .first-column {
        line-height: 28px;
    }
    &-radio {
        margin-left: 14px;
    }
    &-day {
        height: 48px;
        margin-top: 16px;
        &-title {
            margin-left: 7px;
        }
    }
}
.first-column {
    font-size: 15px;
    color: #9B9B9B;
    width: 190px;
    display: inline-block;
    vertical-align: bottom;

}
.second-column {
    display: inline-block;
    width: calc(100% - 190px);
    & > * {
        display: inline-block;
    }
}
</style>