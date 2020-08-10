<template>
  <div>
    <b-navbar toggleable="lg" fixed="top" type="light" variant="success">
      <b-navbar-brand href="#">
        <Logo />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-scroll-to="'#overview'" href="#">
            Company Overview
          </b-nav-item>
          <b-nav-item v-scroll-to="'#services'" href="#">
            Services
          </b-nav-item>
          <b-nav-item v-scroll-to="'#gallery'" href="#">
            Completed Projects
          </b-nav-item>
          <b-nav-item v-scroll-to="'#projects'" href="#">
            Current Projects
          </b-nav-item>
          <b-nav-item v-scroll-to="'#why'" href="#">
            Why Us?
          </b-nav-item>
          <b-nav-item v-scroll-to="'#customers'" href="#">
            What our Customers say
          </b-nav-item>
          <b-nav-item v-scroll-to="'#contact'" href="#">
            Contact Us
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
