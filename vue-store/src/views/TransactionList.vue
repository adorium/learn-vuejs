<template>
    <div class="page-container">
        <page-sidebar></page-sidebar>
        <div class="page-content-wrapper">
            <top-nav :pTitle="pageTitle"></top-nav>
            <!-- <div class="container data-list"> -->
                <!-- <router-view @viewMode='setViewMode' @openDet='setCurrent' :tra="curItem"/> -->
                <router-view @viewMode='setViewMode'/>
            <!-- </div> -->
            <page-footer></page-footer>
        </div>
    </div>
</template>

<script>
import PageSidebar from '@/components/Sidebar.vue';
import TopNav from '@/components/TopNav.vue';
import PageFooter from '@/components/Footer.vue';

export default {
    name:'TransactionList',
    data() {
        return {
            pageTitle: '거래내역 조회',
            viewMode:'search',
        }
    },
    components: {
        PageSidebar,
        TopNav,
        PageFooter,
    },
    methods: {
        // 네비게이션 가드로 처리하는 방법도?
        setViewMode(type){
            this.viewMode = type;
        },
    },
    watch:{
        viewMode(newVal) {
            this.pageTitle = newVal=='search' ? '거래내역 조회' : '거래 상세내역';
        }
    }
}
</script>
<style scoped>
.navbar.top { box-shadow:0 0.15rem 1.75rem 0 rgba(58,59,69,0.15);}
</style>