<template>    
    <div class="page-content">
        <div class="noticebar bg-lightgrey mb-20">주문번호: {{tid}}</div>
        <div v-if="tid!=''" class="card light order-info">
            <div class="card-header">
                <div class="card-title">주문정보</div>
            </div>
            <div class="card-body">
                <div class="container-fluid">
                    <!-- Bootstarp 방식의 form 구성 -->
                    <div class="row table-row">
                        <div class="t-header col-2">가맹점명</div>
                        <div class="t-data col-4">{{traDet.sname}}</div>
                        <div class="t-header col-2">주문번호</div>
                        <div class="t-data col-4">{{traDet.orderNo}}</div>
                    </div>
                    <div class="row table-row">
                        <div class="t-header col-2">주문자명</div>
                        <div class="t-data col-4">{{traDet.payerName}}</div>
                        <div class="t-header col-2">상품명</div>
                        <div class="t-data col-4">{{traDet.productName}}</div>
                    </div>
                    <div class="row table-row">
                        <div class="t-header col-2">주소</div>
                        <div class="t-data col-10">{{traDet.payerAddress}}</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div v-if="tid!=''" class="card light order-info">
            <div class="card-header">
                <div class="card-title">결제정보</div>
            </div>
            <div class="card-body">
                <div class="container-fluid">
                    <!-- Bootstarp 방식의 form 구성 -->
                    <div class="row table-row">
                        <div class="t-header col-2">결제상태</div>
                        <div class="t-data col-4">{{traDet.tstatus}}</div>
                        <div class="t-header col-2">결제수단</div>
                        <div class="t-data col-4">{{traDet.paymentMethods}}</div>
                    </div>
                    <div class="row table-row">
                        <div class="t-header col-2">결제기관</div>
                        <div class="t-data col-4">{{traDet.bankName}}</div>
                        <div class="t-header col-2">결제자명</div>
                        <div class="t-data col-4">{{traDet.uname}}</div>
                    </div>
                    <div class="row table-row">
                        <div class="t-header col-2">전화번호</div>
                        <div class="t-data col-4">{{traDet.payerName.slice(-12,-1).replace('(','')}}</div>
                        <div class="t-header col-2">이메일</div>
                        <div class="t-data col-4">{{traDet.email}}</div>
                    </div>
                    <!--<div class="row table-row">
                        <div class="t-header col-2">카드승인번호</div>
                        <div class="t-data col-4">{{tra.approvalNo}}</div>
                        <div class="t-header col-2">할부개월수</div>
                        <div class="t-data col-4">{{tra.installment}}</div>
                    </div>-->
                    <div class="row table-row">
                        <div class="t-header col-2">결제일시</div>
                        <div class="t-data col-4">{{traDet.adate}}</div>
                        <div class="t-header col-2">결제금액</div>
                        <div class="t-data col-4">{{traDet.paymentAmount}}</div>
                    </div>
                    <div class="row table-row">
                        <div class="t-header col-2">결제취소일시</div>
                        <div class="t-data col-4">{{traDet.canceledTimestamp}}</div>
                        <div class="t-header col-2">취소(환불)금액</div>
                        <div class="t-data col-4"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name:'TraDetail',
    data() {
        return {
            //tid:'',
        }
    },
    //props:['tra'],
    computed:{
        /*tid() {
            return this.$store.getters.curTid;
            //return sessionStorage.getItem('curTid');
        },
        traDet() {
            //return this.$store.state.res.tras.find(tra=>tra.tid==this.tid);
            return this.$store.getters.curTra;
        },*/
        // mapGetters로 축약
        ...mapGetters({
            tid:'curTid',
            traDet:'curTra'
        }),
    },   
    created() {
    /* path의 패러미터에서 tid를 얻는 방식(router-link로 이동) 
        const tid = this.$route.params.tid;
        this.tid = tid;
        this.$emit('viewTras',true); 
        //props로 현재 아이템 데이터를 내려받음
        console.log(this.tra);
    */
        console.log('created', this.tid);
        if(this.tid=='') {
            alert('데이터를 조회할 수 없습니다.');
            this.$router.push('/tras');
        }
        // 상세 페이지가 열림을 알림
        this.$emit('viewMode','detail');   
    }
}
</script>
<style scoped>
.noticebar { padding:1rem 1rem; font-size:13px; border-left:6px solid #c0bec0!important; }
.table-row { padding:0.5rem 0; border-bottom:1px solid #f1eff1; }
.table-row .t-header { font-weight:600; color:var(--text-grey); }
</style>