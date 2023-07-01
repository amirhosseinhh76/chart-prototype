<template>
    <div class="holding-cell">
        <div class="login">
            <img class="logo" alt="logo" src="../assets/img/logo.png">
            <input class="username" type="text" v-model="user" placeholder="Username" />
            <input class="password" type="password" v-model="pass" placeholder="Password" />
            <button v-on:click="login">
                Log in
            </button>

        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'LogIn',
    data() {
        return {
            user: '',
            pass: ''
        }
    },
    methods: {
        async login() {

            // let res = await axios.get(
            //     `http://192.168.15.43:3000/user?name=${this.user}&pass=${this.pass}`
            // )
            let res = await axios.get(
                `http://localhost:3000/user?name=${this.user}&pass=${this.pass}`
            )
            // console.log(res.data)
            if (res.status == 200 && res.data.length > 0) {
                // console.warn(this.email, this.pass)
                localStorage.setItem("user-info", JSON.stringify(res.data[0].name));
                // console.log(res.data[0].name)
                this.$router.push({ name: "test" })
            }
            else {
                alert("User name or Password Invalid!")
            }
        }
    },
    mounted() {
        let user = JSON.parse(localStorage.getItem('user-info'))
        if (user) {
            this.$router.push({ name: "test" })
        }
    }
}
</script>
