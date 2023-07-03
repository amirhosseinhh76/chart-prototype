<template>
    <header :class="{ 'scrolled-nav': scrolledNav }">
        <nav>
            <div class="branding">
                <img src="../assets/img/logo300.png" alt="Logo">
            </div>
            <ul v-show='!mobile' class="navigation">
                <li><router-link class="link" :to="{ name: main }">Main</router-link></li>
                <li><router-link class="link" :to="{ name: '' }">About</router-link></li>
                <li><router-link class="link" :to="{ name: '' }">Contact</router-link></li>
                <li><router-link class="link" :to="{ name: '' }">Resume</router-link></li>
            </ul>

            <div class="icon">
                <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{ 'icon-active': mobileNav }"></i>
            </div>
            <Transition name="mobile-nav">
                <ul v-show='mobileNav' class="dropdown-nav">
                    <li><router-link class="link" :to="{ name: main }">Main</router-link></li>
                    <li><router-link class="link" :to="{ name: '' }">About</router-link></li>
                    <li><router-link class="link" :to="{ name: '' }">Contact</router-link></li>
                    <li><router-link class="link" :to="{ name: '' }">Resume</router-link></li>
                </ul>
            </Transition>
        </nav>
    </header>
</template>
  
<script>

export default {
    name: 'NavSlide',
    data() {
        return {
            scrolledNav: null,
            mobile: null,
            mobileNav: null,
            widowWidth: null
        }
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    },
    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav
        },
        updateScroll() {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 60) {
                // alert("check")
                this.scrolledNav = true;
                return;
            }
            this.scrolledNav = false;
        }
        ,
        checkScreen() {
            this.widowWidth = window.innerWidth;
            if (this.widowWidth <= 750) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
        }
    }
}

</script>

<style>
header {
    background-color: rgba(50, 83, 67, 0.6);
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: .5s ease all;
    color: white;
}

header nav {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: 5s ease all;
    width: 90%;
    margin: 0 auto;
}

@media (min-width: 1140px) {
    header nav {
        max-width: 1140px;
    }
}

header nav ul,
header nav .link {
    font-weight: 500;
    color: white;
    list-style: none;
    text-decoration: none;
}

header nav li {
    text-transform: uppercase;
    padding: 16px;
    margin-left: 16px;
}

header nav .link {
    font-size: 14px;
    transition: 0.5 ease all;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;
}

header nav .link:hover {
    color: aqua;
    border-color: aqua;
}

header nav .branding {
    display: flex;
    align-items: center;
}

header nav .branding img {
    width: 100px;
    transition: 0.5s ease all;
}

header nav .navigation {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
}

header nav .icon {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 24px;
    height: 100%;
}

header nav .icon i {
    cursor: pointer;
    font-size: 24px;
    transition: 0.8s ease all;
}

header nav .icon-active {
    transform: rotate(180deg);
}

header nav .dropdown-nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    max-width: 250px;
    height: 100%;
    background-color: white;
    top: 0;
    left: 0;
    color: black;
}

header nav .mobile-nav-enter-active,
header nav .mobile-nav-leave-active {
    transition: 1s ease all;
}

header nav .mobile-nav-enter-from {
    transform: translateX(-250px);
}

header nav .mobile-nav-leave-to {
    transform: translateX(-250px);
}

header nav .mobile-nav-enter-to {
    transform: translateX(0);
}

header nav .dropdown-nav li {
    margin-left: 0;
}

header nav .dropdown-nav li .link {
    color: black;
}

.scrolled-nav {
    background-color: rgb(26, 58, 47);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.scrolled-nav nav {
    padding: 8px 0;
}

.scrolled-nav nav .branding img {
    width: 95px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

}
</style>