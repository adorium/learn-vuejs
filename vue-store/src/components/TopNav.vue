<template>
    <nav class="navbar top">
        <div class="navbar-brand">
            <a href="/" class="navbar-item">{{pTitle}}</a>
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbar" class="navbar-menu">
            <div class="navbar-start">
                {{ dispId }}
            </div>
            <div class="navbar-end">
                <a href="" @click="signOut" class="navbar-item">SignOut</a>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name: 'TopNav',
    data: function() {
        return {
            dispId:'not logined',
        }
    },
    props: ['pTitle'],
    methods: {
        signOut: function() {
            localStorage.removeItem('token');
            localStorage.removeItem('userid');
            this.$router.push('/logIn');
        }
    },
    mounted() {
        this.dispId = localStorage.getItem('userid');
    }
}
</script>
<style>
nav.navbar { display:flex; justify-content:space-between; align-items:center; color:var(--text-grey);}
.navbar-menu { display:flex; justify-content:space-between; align-items:center;}
.navbar-menu .navbar-item { margin-right:10px; padding:0 5px; }
.navbar-menu .nav-item a { padding:0.5rem 1rem; position:relative; }
</style>