<template>
    <header :class="{ 'scroll-nav': scrollPosition }">
        <div class="branding">
            <p>Logo</p>
        </div>
        <nav>
            <ul v-show="!mobile" class="hidden md:block">
                <li v-for="item in navigationItems" :key="item.id" class=''>
                    <router-link :to="item.link">{{ item.title }}</router-link>
                </li>
            </ul>
            <button class="hamburger" @click="toggleMobileNav" v-show="mobile" :class="{ 'icon-acitvate': mobileNav }">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <transition name="mobile-nav">
                <ul v-show="!mobile" class="dropdown-nav">
                    <li v-for="item in navigationItems" :key="item.id" class=''>
                        <router-link :to="item.link">{{ item.title }}</router-link>
                    </li>
                </ul>
            </transition>
        </nav>


    </header>
</template>

<style></style>

<script>
export default {
    name: 'navigation',
    data() {
        return {
            mobile: false, // toggle mobile view
            navigationItems: [
                {
                    id: 1,
                    title: 'Home',
                    link: '/'
                },
                {
                    id: 2,
                    title: 'About',
                    link: '/about'
                },
                {
                    id: 4,
                    title: 'Contact',
                    link: '/contact'
                },
                {
                    id: 5,
                    title: 'Gallery',
                    link: '/gallery'
                }
            ],
            scrollPosition: null,
            mobile: false,
            mobileNav: null,
            window: null,

        };
    },
    methods: {
        toggleMobileNav() {
            this.mobile = !this.mobile;
            this.mobileNav = !this.mobileNav;
        },
        handleScroll() {
            this.scrollPosition = window.scrollY;
        }
    }
};
</script>
<style>
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    background-color: rgb(0, 0, 0 0.8);
    transition: 0.5s ease all;
    color: #fff;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    margin: 0 auto;
    flex-direction: row;
    transition: 0.5s ease all;

    @media (min-width: 1140px) {
        max-width: 1140px;
    }

    .hamburger {
        cursor: pointer;
        transition: 0.5s ease all;
    }

    .icon-acitvate {}
}
</style>