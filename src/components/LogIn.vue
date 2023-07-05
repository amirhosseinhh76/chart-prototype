<template>
    <div class="holding-cell">
        <div class="login">
            <img class="logo" alt="logo" src="../assets/img/logo.png">
            <div v-if="errorMessage" style="color: red;">{{ errorMessage }}</div>
            <input @keyup.enter="login" id="username_box" class="username" type="text" v-model="user"
                placeholder="Username" />
            <input @keyup.enter="login" id="password_box" class="password" type="password" v-model="pass"
                placeholder="Password" />
            <button id="login_btn" v-on:click="login">
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
            pass: '',
            errorMessage: ''
        }
    },
    methods: {
        async login() {
            try {
                await axios.post('http://localhost:3000/api/authenticate', {
                    user: this.user,
                    pass: this.pass
                }).then(response => {

                    if (response.status == 200) {
                        localStorage.setItem('token', response.data.token)
                        this.$router.push({ name: "main" });
                    }
                })

            } catch (e) {
                if (e.response) {
                    // The request was made, but the server responded with a non-2xx status code
                    console.log(e.response.data)
                    alert(`Server returned an error: ${e.response.data}`);

                } else if (e.request) {
                    // The request was made, but no response was received
                    alert('No response received from the server.');
                } else {
                    // Something happened in setting up the request that triggered an Error
                    alert(`An error occurred: ${e.message}`);
                }
            }
        }
    },
    mounted() {
        let user = JSON.parse(localStorage.getItem('user-info'));
        if (user) {
            // this.$router.push({ name: 'main' });
            // alert(user);
        }
    }
}
</script>
  
<style>
/* Styles unchanged */
</style>
  
<style>
.login i {
    margin-left: -30px;
    cursor: pointer;
}

.logo {
    display: block;
    position: relative;
    scale: 0.78;
    margin-top: -60px;
}


.login {
    color: #027074;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 430px;
    height: 520px;
    color: #027074;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 0;
    margin-bottom: 60px;
    padding: 60px 0px 10px 10px;
    border-radius: 10px;
    filter: blur(0.4px);
    box-shadow:
        0px 20px 20px rgba(0, 0, 0, 0.2),
        0px 5px 10px rgba(0, 0, 0, 0.2),
        0px 70px 50px rgba(0, 0, 0, 0.4),
        30px 50px 50px rgba(0, 0, 0, 0.2),
        -30px 50px 50px rgba(0, 0, 0, 0.2),
        inset 20px 0px 60px rgba(0, 0, 0, 0.1),
        inset -20px 0px 60px rgba(0, 0, 0, 0.1);
}

.login input:hover {
    box-shadow: rgba(10, 107, 54, 0.2) 0 -25px 18px -14px inset, rgba(12, 14, 15, 0.05) 0 1px 2px, rgba(44, 187, 99, .15) 0 2px 4px, rgba(44, 187, 99, .15) 0 4px 8px, rgba(44, 187, 99, .15) 0 8px 16px, rgba(44, 187, 99, .15) 0 16px 32px;
}

.login button {
    width: 260px;
    height: 35px;
    background-color: rgb(14, 75, 41);
    border-radius: 1px;
    color: rgb(255, 255, 255);
    cursor: pointer;
    display: inline-block;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 7px 20px;
    text-align: center;
    text-decoration: none;
    transition: all 250ms;
    border: 0;
    font-size: 16px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    margin-bottom: 20px;
    margin-top: 20px;
}

.login button:hover {
    box-shadow: rgba(3, 94, 59, 0.1) 0 -25px 18px -14px inset, rgba(16, 88, 44, 0.25) 0 1px 2px, rgba(44, 187, 99, .25) 0 2px 4px, rgba(44, 187, 99, .25) 0 4px 8px, rgba(22, 117, 59, 0.25) 0 8px 16px, rgba(8, 100, 43, 0.25) 0 16px 32px;
    /* transform: scale(1.05); */

}

.username,
.password {
    display: block;
    margin-bottom: 20px;
    width: 260px;
    height: 35px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 35px;
    margin-top: 25px;
    padding-left: 20px;
    background: none;
    border: none;
    border-bottom: 1px solid rgb(56, 121, 83);
    color: rgb(21, 59, 48);
    font-size: 18px;
}

.username::placeholder,
.password::placeholder {
    opacity: 1;
    color: rgb(56, 121, 83);
    font-size: 20px;
    font-weight: 300;

}

.username::-ms-input-placeholder,
.password::-ms-input-placeholder {
    color: rgb(56, 121, 83);
    font-size: 20px;
    font-weight: 300;
}

.login a {
    text-align: center;
    padding-top: 10px;
    color: white;
    font-size: 15px;
    margin-bottom: 20px;
}

label {
    position: relative;
}

.holding-cell {
    height: 100vh;
}
</style>

