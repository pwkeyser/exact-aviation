<template>
  <div>
    <nav-bar />
    <overview />
    <services />
    <projects />
    <gallery />
    <why />
    <customers />
    <contact />
    <back-to-top class="BackToTop" text="Back to top"></back-to-top>
  </div>
</template>

<script>
import BackToTop from 'vue-backtotop'
import Services from '~/components/Services'
import Why from '~/components/Why'
import Overview from '~/components/Overview'
import Gallery from '~/components/Gallery'
import Customers from '~/components/Customers'
import Contact from '~/components/Contact'
import Projects from '~/components/Projects'
import NavBar from '~/components/NavBar'

export default {
  components: {
    services: Services,
    why: Why,
    overview: Overview,
    gallery: Gallery,
    customers: Customers,
    contact: Contact,
    projects: Projects,
    'nav-bar': NavBar,
    'back-to-top': BackToTop,
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.NavBar {
  min-width: 350px;
  padding: 15px;
  background-color: #c1c9d8;
  background-color: #e9ecef;
  border-radius: 5px;
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  text-align: center;
  align-items: center;
  color: black;
}

.NavBar:hover {
  padding: 20px;
  box-shadow: 0 2px 5px #ccc;
  box-shadow: 0 2px 5px #99fe00;
}

.NavItems {
  text-align: center;
  width: 100px;
}

.NavBarGap {
  height: 100px;
}

.GreyColour {
  background-color: #e9ecef;
}

.vue-back-to-top .default {
  background-color: var(--success);
  border-radius: 5px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  width: 130px;
}

.BackToTop {
  background-color: var(--success);
  border-radius: 5px;
}
</style>
