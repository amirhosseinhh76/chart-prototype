<template>
    {{ this.mess }} Hello Welcome to test Page for Testing tests on this test page!!!
</template>


<script>

export default {
    name: 'main',
    data() {
        return {
            mess: ''
        }
    },
    mounted() {
        let dat = JSON.parse(localStorage.getItem('user-info'))
        this.mess = dat
    }
}
</script>