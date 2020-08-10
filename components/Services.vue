<template>
  <div id="services" class="SBackground">
    <div class="NavBarGap GreyColour" />
    <b-jumbotron :header="headerText" class="NoPaddingMargins">
      <div class="pre-formatted">
        {{ descriptionText }}
      </div>
      <b-card-group deck>
        <cards-component
          v-for="(serviceComponent, idx) in serviceArrayText"
          :key="idx"
          :header="serviceComponent.headerText"
          :detail="serviceComponent.detailText"
          in
        />
      </b-card-group>
    </b-jumbotron>
  </div>
</template>

<script>
import Cards from '~/components/Cards'

export default {
  name: 'Services',
  components: {
    'cards-component': Cards,
  },
  data() {
    return {
      headerText: 'Services',
      descriptionText:
        '\nExact Aviation provides a wide variety of aviation services far beyond installations and commissioning. Complete end-to-end turkey solutions are provided starting from conceptual phase (site planning) and preparation phase (site surveys), through to implementation phase (civil works,  installation, commissioning and flight calibrations) and final closure phase (SAT and as-built documentation). Exact Aviation has tremendous training experience, including factory and on-site training. \n\nExact Aviation does not sell the main OEM equipment and instead – by design – focusses on being an independent and agnostic aviation service provider. As a result, Exact Aviation has tremendous experience and expertise of all Nav-Aid Equipment and OEM’s. This makes Exact Aviation truly unique in the Aviation service provider space! \n\nIn addition, Exact Aviation also designs, manufactures and supplies secondary equipment when and where needed.',
      serviceArrayText: [
        {
          headerText: 'Installations / Commissioning',
          detailText:
            'Main and Secondary Equipment •	Generators •	UPS’s •	IP Cameras •	Tower Cap Consoles •	VHF/HF Radio Communications •	Voice Recorders •	VCCS •	ILS • VOR • DME • VDF • NDB • AWOS • GPS Time Servers • Earth mats •	Nav-aid site civil works ',
        },
        {
          headerText: 'Turnkey Solutions',
          detailText:
            'Project Management •	End-to-end •	Site Planning •	Site Surveys •	Installations •	SAT •	As Built Documentation •	Training (Factory and On-site)',
        },
        {
          headerText: 'Design and Manufacturing',
          detailText:
            'Exact Aviation has the capability to design and manufacture secondary equipment and has delivered the following customer solutions: CVOR counterpoise •	DVOR counterpoise •	Masts of various sizes •	Equipment Shelters •	RCMMS systems •	Tower Status Panels •	F/O Equipment for ring F/O connections •	Radio Links for cross-site communications',
        },
      ],
    }
  },
}
</script>

<style>
.SBackground {
  background-color: white;
}

.pre-formatted {
  white-space: pre-wrap;
}

.NoPaddingMargins {
  /* padding: 0;
  margin: 0; */
  margin-bottom: 0;
  /* margin-top: 50px; */
}
</style>
