<template>
<div>
  <b-navbar toggleable="lg" fixed="top" type="dark" variant="success">
    <b-navbar-brand href="#">
      <b-col sm="4" md="6" xl="6">
        <Logo />
      </b-col>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-scroll-to="'#overview'" href="#" class="NavItems">
          <b-nav-text>Company Overview</b-nav-text>
        </b-nav-item>
        <b-nav-item v-scroll-to="'#services'" href="#" class="NavItems">
          <b-nav-text>Services</b-nav-text>
        </b-nav-item>
        <b-nav-item v-scroll-to="'#projects'" href="#" class="NavItems">
          <b-nav-text>Current Projects</b-nav-text>
        </b-nav-item>
        <b-nav-item v-scroll-to="'#gallery'" href="#" class="NavItems">
          <b-nav-text>Completed Projects</b-nav-text>
        </b-nav-item>
        <b-nav-item v-scroll-to="'#why'" href="#" class="NavItems">
          <b-nav-text>Why Us?</b-nav-text>
        </b-nav-item>
        <b-nav-item v-scroll-to="'#customers'" href="#" class="NavItems">
          <b-nav-text>What our Customers say</b-nav-text>
        </b-nav-item>
        <b-nav-item v-scroll-to="'#contact'" href="#" class="NavItems">
          <b-nav-text>Contact Us</b-nav-text>
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
