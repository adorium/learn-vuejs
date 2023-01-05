<template>    
    <div class="page-content">
        <div class="noticebar bg-lightgrey mb-20">주문번호: {{tid}}</div>
        <div class="card light order-info">
            <div class="card-header">
                <div class="card-title">주문정보</div>
            </div>
            <div class="card-body">
                <div class="container-fluid">
                    <!-- Bootstarp 방식의 form 구성 -->
                    <div class="row table-row">
                        <div class="t-header col-2">가맹점명</div>
                        <div class="t-data col-4">{{tra.sname}}</div>
                        <div class="t-header col-2">주문번호</div>
                        <div class="t-data col-4">{{tra.orderNo}}</div>
                    </div>
                    <div class="row table-row">
                        <div class="t-header col-2">주문자명</div>
                        <div class="t-data col-4">{{tra.payerName}}</div>
                        <div class="t-header col-2">상품명</div>
                        <div class="t-data col-4">{{tra.productName}}</div>
                    </div>
                    <div class="row table-row">
                        <div class="t-header col-2">주소</div>
                        <div class="t-data col-10">{{tra.payerAddress}}</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="card light order-info">
            <div class="card-header">
                <div class="card-title">결제정보</div>
            </div>
            <div class="card-body">
                <div class="container-fluid">
                    <!-- Bootstarp 방식의 form 구성 -->
                    <div class="row table-row">
                        <div class="t-header col-2">결제상태</div>
                        <div class="t-data col-4">{{tra.tstatus}}</div>
                        <div class="t-header col-2">결제수단</div>
                        <div class="t-data col-4">{{tra.paymentMethods}}</div>
                    </div>
                    <div class="row table-row">
                        <div class="t-header col-2">결제기관</div>
                        <div class="t-data col-4">{{tra.bankName}}</div>
                        <div class="t-header col-2">결제자명</div>
                        <div class="t-data col-4">{{tra.uname}}</div>
                    </div>
                    <div class="row table-row">
                        <div class="t-header col-2">전화번호</div>
                        <div class="t-data col-4">{{tra.payerName.slice(-12,-1).replace('(','')}}</div>
                        <div class="t-header col-2">이메일</div>
                        <div class="t-data col-4">{{tra.email}}</div>
                    </div>
                    <!--<div class="row table-row">
                        <div class="t-header col-2">카드승인번호</div>
                        <div class="t-data col-4">{{tra.approvalNo}}</div>
                        <div class="t-header col-2">할부개월수</div>
                        <div class="t-data col-4">{{tra.installment}}</div>
                    </div>-->
                    <div class="row table-row">
                        <div class="t-header col-2">결제일시</div>
                        <div class="t-data col-4">{{tra.adate}}</div>
                        <div class="t-header col-2">결제금액</div>
                        <div class="t-data col-4">{{tra.paymentAmount}}</div>
                    </div>
                    <div class="row table-row">
                        <div class="t-header col-2">결제취소일시</div>
                        <div class="t-data col-4">{{tra.cancleedTimestamp}}</div>
                        <div class="t-header col-2">취소(환불)금액</div>
                        <div class="t-data col-4"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'TraDetail',
    data() {
        return {
            tid:'',
        }
    },
    props:['tra'],
    created() {
        const tid = this.$route.params.tid;
        //console.log('detail', tid);
        this.tid = tid;
        this.$emit('viewTras',true);
        console.log(this.tra);
    }
}
</script>
<style scoped>
.noticebar { padding:1rem 1rem; font-size:13px; border-left:6px solid #c0bec0!important; }
.table-row { padding:0.5rem 0; border-bottom:1px solid #f1eff1; }
.table-row .t-header { font-weight:600; color:var(--text-grey); }
</style>