<template>
    <div class="page-container">
        <page-sidebar></page-sidebar>
        <div class="content-wrapper">
            <top-nav :pTitle="pageTitle"></top-nav>
            <div class="container data-list">
                <search-trans></search-trans>
            </div>
            <page-footer></page-footer>
        </div>
    </div>
</template>

<script>
import PageSidebar from '@/components/Sidebar.vue';
import TopNav from '@/components/TopNav.vue';
import SearchTrans from '@/components/SearchTrans.vue';
import PageFooter from '@/components/Footer.vue';

export default {
    name:'TransactionList',
    data:function() {
        return {
            pageTitle: '거래내역 조회'
        }
    },
    components: {
        PageSidebar,
        TopNav,
        SearchTrans,
        PageFooter,
    }
}
</script>
<style scoped>
.navbar.top { box-shadow:0 0.15rem 1.75rem 0 rgba(58,59,69,0.15);}
</style>