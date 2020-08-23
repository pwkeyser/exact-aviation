<template>
  <div id="overview">
    <div class="NavBarGap" />
    <b-jumbotron class="SBackground BackgroundImage" :header="headerText">
      <div class="ParBox">
        <div class="pre-formatted">
          {{ descriptionText }}
        </div>
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'Overview',
  data() {
    return {
      headerText: 'Company Overview',
      descriptionText:
        '\nExact Aviation is a well-established independent and sustainable provider of end-to-end installation and commission services on a wide variety of aviation systems from a wide variety of CNS/ATM OEM’s worldwide. Exact Aviation also manufactures and supplies secondary equipment when needed. \n\nExact Aviation has a long and successful track record with wide specialist aviation capabilities and experience. Based in South Africa, Exact Aviation has multiple projects running worldwide and with very good and long running relationships with all major OEM’s of AGL, ILS, C/DVOR, DME, NDB, AWOS, HF/VHF Radios, VCR/VCCS and RCMS systems. \n\nServices vary from project to project, such as complete end-to-end delivery (start to handover), project management only, commissioning or certifications. Exact Aviation is extremely flexible with the services provided and takes pride in providing personal attention, measurable quality of service and cost effective innovative aviation solutions at competitive cost. ',
    }
  },
}
</script>

<style>
.OBackground {
  background-color: white;
  padding: 0;
  margin: 0;
  margin-bottom: 0;
}

.BackgroundImage {
  background-image: url('../assets/picture1.png');
  background-size: cover;
  border-radius: 0;
  margin-bottom: 0;
}

.ParBox {
  font-size: 1.15em;
  align-items: center;
  justify-content: center;
  background-color: white;
  background-color: #99fe00;
  background-color: #c1c9d8;
  background-color: #e9ecef;
  padding: 10px;
  border-radius: 5px;
  opacity: 0.8;
  border: 1px solid;
  border-color: #c1c9d8;
  box-shadow: 0 2px 5px #ccc;
  box-shadow: 0 2px 5px #99fe00;
  max-width: 100%;
  max-width: 1000px;
  /*
  opacity: 0.7;
  height: 30%;
  width: 600px;
  */
}
</style>
