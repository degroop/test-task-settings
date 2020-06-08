<template>
    <div class="sidebar">
        <div class="sidebar-menu">
            <div v-for="(item, index) in elements" :key="index" class="sidebar-menu-item">
                <div class="icon-wrapper">
                    <font-awesome-icon 
                            :icon="item.icon" 
                            size="2x" />
                </div>
                <div class="sidebar-menu-item__title">{{ item.title }}</div>
            </div>
        </div>
        <div class="sidebar-footer">
            <img 
                    :src="userAvatar" 
                    class="sidebar-footer-icon" >
            <div class="sidebar-footer-title">{{ currentPage }}</div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { mapState } from 'vuex';

    interface SidebarMenuInterface {
        title: string,
        icon: string
    }    

    @Component({
        computed: mapState([
            'currentPage',
            'userAvatar'
        ])
    })
    export default class TheSidebarPanel extends Vue {
        private elements: Array<SidebarMenuInterface> = [
            { title: 'Dashboard', icon: 'tachometer-alt' },
            { title: 'Customers', icon: 'address-card' },
            { title: 'Calendar', icon: 'calendar-alt' },
            { title: 'Chats', icon: 'comments' },
            { title: 'Tasks', icon: 'list-alt' },
            { title: 'Inbox', icon: 'inbox' },
            { title: 'Calls', icon: 'phone-square-alt' },
            { title: 'Leads', icon: 'folder-open' },
            { title: 'Team', icon: 'user-friends' }
        ]
    }
</script>

<style scoped lang="less">
    .icon-wrapper {
        vertical-align: middle;
        & svg {
            display: block;
            margin: auto;
        } 
        & .fa-2x {
            font-size: 1.6em;
        }   
    }
    .sidebar {
        font-family: 'heebo_lightregular';
        font-weight: bold;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        height: 100%;
        width: 200px;
        overflow-x: hidden;
        background: linear-gradient(0deg, #DC3F43 0%, #E8191F 100%);
        &-footer {
            position: absolute;
            bottom: 0px;
            width: 100%;
            height: 50px;
            background: rgba(0,0,0,.16);
            line-height: 50px;
            &-icon {
                display: inline-block;
                margin-left: 14px;
                width: 32px;
                height: 32px;
                vertical-align: middle;
                border-radius: 50%;
            }
            &-title {
                display: inline-block;
                margin-left: 14px;
                font-size: 16px;
                line-height: 50px;
                color: white;
            }
        }
        &-menu {
            padding-left: 13px;
            padding-top: 74px;
            &-item {
                font-size: 16px;
                line-height: 50px;    
                color: #FFFFFF; 
                & > * {
                    display: inline-block;
                    width: 53px;
                }       
                &__title {
                    margin-left: 12px;
                }
            }
        }
    }
</style>
