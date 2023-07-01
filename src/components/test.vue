<template>
    {{ this.mess }} Hello Welcome to test Page for Testing tests on this test page!!!
</template>


<script>

export default {
    name: 'test',
    data() {
        return {
            mess: ''
        }
    },
    mounted() {
        let dat = JSON.parse(localStorage.getItem('user-info'))
        console.log(dat)
        this.mess = dat
    }
}

</script>