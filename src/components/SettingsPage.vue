<template>
  <div class="settings">
      <div class="settings-title">
          Settings
      </div>
      <div class="settings-body">
          <div class="settings-body-tabs">
              <div 
                    v-for="(tab, index) in tabs" 
                    :key="index" 
                    :class="['settings-body-tabs__item', { 'settings-body-tabs__item-active': currentTab === tab.title }]" 
                    @click="currentTab = tab.title" >
                  {{ tab.title }}
              </div>
          </div>
          <div class="settings-body-page">
              <keep-alive>
                <component v-bind:is="currentTabComponent"></component>
              </keep-alive>
          </div>
          <div class="settings-body-footer">
                <button class="standart-button settings-body-footer-accept-button">
                    Save changes
                </button>
                <div class="settings-body-footer-cancel">
                    Cancel
                </div>
                <div class="settings-body-footer-info">
                    to reset changes
                </div>                
          </div>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import WorkingHours from '@/components/WorkingHours.vue';
import EmptyTab from '@/components/EmptyTab.vue';

interface TabComponent {
    title: string,
    component: string
}

@Component({
  components: {
    EmptyTab,
    WorkingHours
  },
})
export default class SidebarPanel extends Vue {
    private currentTab: string = 'Working hours'
    private tabs: Array<TabComponent> = [
        { title: 'Profile', component: 'EmptyTab'},
        { title: 'Notifications', component: 'EmptyTab'},
        { title: 'Password', component: 'EmptyTab'},
        { title: 'Working hours', component: 'WorkingHours'},
        { title: 'Call settings', component: 'EmptyTab'},
    ]
    get currentTabComponent(): string {
        return this.tabs.filter( tab => tab.title === this.currentTab )[0].component;
    }
}
</script>

<style scoped lang="less">
.settings {
    margin-left: 200px;
    padding-left: 100px;
    padding-top: 25px;
    &-title {
        font-family: 'heebo_lightregular';
        font-size: 25px;
        line-height: 37px;
    }
    &-body {
        margin-top: 25px;
        margin-right: 53px;
        background: #FFFFFF;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.0434783);
        border-radius: 3px;        
        &-tabs {
            line-height: 50px;
            padding-left: 10px;
            border-bottom: 1px solid rgba(151,151,151,.22);
            &__item {
                display: inline-block;
                padding-left: 30px;
                padding-right: 30px;
                text-align: center;
                font-size: 15px;
                color: #97040C;
                font-family: 'heeboregular';
                &-active {
                    color: #4A4A4A;
                    border-bottom: 2px solid #9F0008;
                }
                &:hover {
                    cursor: pointer;
                }
            }
        }
        &-page {
            min-height: 150px;
        }
        &-footer {
            background: rgba(216,216,216,.48);
            box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.0602638);
            height: 59px;
            line-height: 59px;
            bottom: 0;
            width: 100%;
            & > * {
                display: inline-block;
            }
            &-accept-button {
                margin-left: 14px;
                font-family: 'heebo_mediumregular';
            }
            &-cancel {
                font-family: 'heeboregular';
                margin-left: 14px;
                color: #97040C;
                font-size: 13px;
                &:hover {
                    cursor: pointer;
                }
            }
            &-info {
                font-family: 'heeboregular';  
                margin-left: 12px;
                color: #4A4A4A;
                font-size: 13px;                
            }
        }
    }
}
</style>
