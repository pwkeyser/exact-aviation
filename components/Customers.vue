<template>
<div id="customers">
  <div class="NavBarGap" />
  <b-jumbotron :header="headerText" class="NoPaddingMargins SBackground">
  </b-jumbotron>
  <b-container fluid>
    <b-row>
      <b-col sm="2" />
      <b-col sm="8">
        <div class="jumbotron">
          <vue-slick-carousel v-bind="settings">
            <div class="CenterDiv">
              <testimony :key="customerArrayText[0].id" :text="customerArrayText[0].text" :name="customerArrayText[0].name" :title="customerArrayText[0].title" :company="customerArrayText[0].company" :location="customerArrayText[0].location" />
            </div>
            <div class="CenterDiv">
              <testimony :key="customerArrayText[1].id" :text="customerArrayText[1].text" :name="customerArrayText[1].name" :title="customerArrayText[1].title" :company="customerArrayText[1].company" :location="customerArrayText[1].location" />
            </div>
            <!--<div class="CenterDiv">
              <testimony :key="customerArrayText[2].id" :text="customerArrayText[2].text" :name="customerArrayText[2].name" :title="customerArrayText[2].title" :company="customerArrayText[2].company" :location="customerArrayText[2].location" />
            </div>-->
            <div class="CenterDiv">
              <testimony :key="customerArrayText[3].id" :text="customerArrayText[3].text" :name="customerArrayText[3].name" :title="customerArrayText[3].title" :company="customerArrayText[3].company" :location="customerArrayText[3].location" />
            </div>
            <!--<div class="CenterDiv">
              <testimony :key="customerArrayText[4].id" :text="customerArrayText[4].text" :name="customerArrayText[4].name" :title="customerArrayText[4].title" :company="customerArrayText[4].company" :location="customerArrayText[4].location" />
            </div>-->
            <div class="CenterDiv">
              <testimony :key="customerArrayText[5].id" :text="customerArrayText[5].text" :name="customerArrayText[5].name" :title="customerArrayText[5].title" :company="customerArrayText[5].company" :location="customerArrayText[5].location" />
            </div>
            <!--<div class="CenterDiv">
              <testimony :key="customerArrayText[6].id" :text="customerArrayText[6].text" :name="customerArrayText[6].name" :title="customerArrayText[6].title" :company="customerArrayText[6].company" :location="customerArrayText[6].location" />
            </div>-->
            <div class="CenterDiv">
              <testimony :key="customerArrayText[7].id" :text="customerArrayText[7].text" :name="customerArrayText[7].name" :title="customerArrayText[7].title" :company="customerArrayText[7].company" :location="customerArrayText[7].location" />
            </div>
          </vue-slick-carousel>
        </div>
      </b-col>
      <b-col sm="2" />
    </b-row>
  </b-container>
</div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
// import Cards from '~/components/Cards'
import Testimony from '~/components/Testimony'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'Gallery',
  components: {
    'vue-slick-carousel': VueSlickCarousel,
    // 'cards-component': Cards,
    testimony: Testimony,
  },
  data() {
    return {
      headerText: 'What our customers say',
      detailText: '',
      customerArrayText: [{
          text: 'Exact Aviation have been our (Indra Navia) trusted service provider for installation and site work for our NAVAIDS equipment (ILS, DME, DVOR) for over 15 years. Willie Naudè has coordinated his installation team for Indra Navia`s Navigation Projects all over the world with precision, efficiency and excellent results. We are also very satisfied with the high knowledge and expertise Willie Naudè and Exact Aviation have for NAVIDS equipment. It makes is all easy to recommend this company!',
          name: 'Rune Halvorsen',
          title: 'Project Manager',
          company: 'Indra Aviation Systems',
          location: 'Norway',
          logo: '',
          id: 1,
        },
        {
          text: 'Indra Australia Pty Ltd has contracted ExactAviation for trainings, installation, factory and site acceptance tests, commissioning and flight check assistance of ILS/DME equipment for Nadi and Nausori international airports, Fiji Islands. ExactAviation has performed all these tasks exceeding our expectations. At Nadi, the existing CAT1 ILS system had to continue to operate during the installation phase: this was performed successfully with minimal disruption of ILS services. ExactAviation team was efficient, pro - active and achieve all their tasks on-time. I hereby confirm ExactAviation has highly contributed to make our project successful.',
          name: 'Selma Stensland',
          title: 'ATM - Project Manager',
          company: 'Indra Australia Pty Ltd.',
          location: 'Sydney, Australia',
          logo: '',
          id: 2,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          name: 'Peter Malan',
          title: 'R&D Specialist',
          company: 'Moog Fernau',
          location: 'Luton, United Kingdom',
          logo: '',
          id: 3,
        },
        {
          text: 'We been using the services of Exact Aviation as support on the Navigational systems for past 15 years. With their in-depth knowledge and experience in the Aviation field they ensure that the job gets done through dedication and hard work. I will recommend Willie Naudé and his team any time.',
          name: 'Charles Botha',
          title: 'Technical Specialist',
          company: 'ATNS',
          location: 'Johannesburg, South Africa',
          logo: '',
          id: 4,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          name: 'AO1 Louis Pool',
          title: 'Programme Manager',
          company: 'South African Air Force',
          location: 'Pretoria, South Africa',
          logo: '',
          id: 5,
        },
        {
          text: 'As project manager in GECI group we\'ve been involved in many projects around the world (Middle East, Asia, Africa, Caribbean, Pacific Area) where it was necessary the installation, commissioning and training of every type of Navigational Aid equipment (ILS, DVOR, DME, AWOS, Generators, RCMMS, and NDB) and for which we\'ve subcontracted Exact Aviation with a very successful result and for which we highly recommend their services. Total combined value for all projects ±790,000.00 Euros.',
          name: 'Antonio Calvo',
          title: 'Engineer & Project Manager',
          company: 'GECI GROUP',
          location: 'Madrid, Spain',
          logo: '',
          id: 6,
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          name: 'Do Xuan Phuong',
          title: 'Deputy General Director',
          company: 'VTG Equipment and Technology',
          location: 'JSC, Vietnam',
          logo: '',
          id: 7,
        },
        {
          text: 'I had the privilege and opportunity to work with Exact aviation for number of years. Exact aviation with owner Willie Naude has a proven record with various manufacturers of Navigation equipment around the world. His company is a preferred installer and commissioning agent. His approach to business are always very professional with a high ethical standard. Willie always deliver to the clients expected results. His vast experience are well known around the world. I can recommend Exact Aviation with full confidence.',
          name: 'Christo D Van Straaten',
          title: 'Snr. Flight Inspector',
          company: 'South African Civial Aviation Authority',
          location: 'Johannesburg, South Africa',
          logo: '',
          id: 8,
        },
      ],
      settings: {
        // centerMode: true,
        centerPadding: '100px',
        dots: true,
        arrows: true,
        autoplay: true,
        focusOnSelect: true,
        edgeFriction: 0.35,
        infinite: true,
        speed: 2000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchThreshold: 5,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
      },
    }
  },
}
</script>

<style>
.ReduceWidth {
  width: 80%;
}

.CenterDiv {
  display: flex;
  justify-content: center;
  width: 100px;
}

.slick-prev:before,
.slick-next:before {
  color: black;
}
</style>
