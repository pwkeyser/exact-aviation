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
                <testimony
                  :key="customerArrayText[0].id"
                  :text="customerArrayText[0].text"
                  :name="customerArrayText[0].name"
                  :title="customerArrayText[0].title"
                  :company="customerArrayText[0].company"
                  :location="customerArrayText[0].location"
                />
              </div>
              <div class="CenterDiv">
                <testimony
                  :key="customerArrayText[1].id"
                  :text="customerArrayText[1].text"
                  :name="customerArrayText[1].name"
                  :title="customerArrayText[1].title"
                  :company="customerArrayText[1].company"
                  :location="customerArrayText[1].location"
                />
              </div>
              <div class="CenterDiv">
                <testimony
                  :key="customerArrayText[2].id"
                  :text="customerArrayText[2].text"
                  :name="customerArrayText[2].name"
                  :title="customerArrayText[2].title"
                  :company="customerArrayText[2].company"
                  :location="customerArrayText[2].location"
                />
              </div>
              <div class="CenterDiv">
                <testimony
                  :key="customerArrayText[3].id"
                  :text="customerArrayText[3].text"
                  :name="customerArrayText[3].name"
                  :title="customerArrayText[3].title"
                  :company="customerArrayText[3].company"
                  :location="customerArrayText[3].location"
                />
              </div>
              <div class="CenterDiv">
                <testimony
                  :key="customerArrayText[4].id"
                  :text="customerArrayText[4].text"
                  :name="customerArrayText[4].name"
                  :title="customerArrayText[4].title"
                  :company="customerArrayText[4].company"
                  :location="customerArrayText[4].location"
                />
              </div>
              <div class="CenterDiv">
                <testimony
                  :key="customerArrayText[5].id"
                  :text="customerArrayText[5].text"
                  :name="customerArrayText[5].name"
                  :title="customerArrayText[5].title"
                  :company="customerArrayText[5].company"
                  :location="customerArrayText[5].location"
                />
              </div>
              <div class="CenterDiv">
                <testimony
                  :key="customerArrayText[6].id"
                  :text="customerArrayText[6].text"
                  :name="customerArrayText[6].name"
                  :title="customerArrayText[6].title"
                  :company="customerArrayText[6].company"
                  :location="customerArrayText[6].location"
                />
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
      customerArrayText: [
        {
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          name: 'Rune Halvorsen',
          title: 'Project Manager',
          company: 'Indra Aviation Systems',
          location: 'Norway',
          logo: '',
          id: 1,
        },
        {
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          name: 'Ragnwald Stensland',
          title: 'International Sales Director',
          company: 'Indra Pty Ltd.',
          location: 'Sydney, Australia',
          logo: '',
          id: 2,
        },
        {
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          name: 'Peter Malan',
          title: 'R&D Specialist',
          company: 'Moog Fernau',
          location: ', Luton, United Kingdom',
          logo: '',
          id: 3,
        },
        {
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          name: 'Charles Botha',
          title: 'Technical Specialist',
          company: 'ATNS',
          location: 'Johannesburg, South Africa',
          logo: '',
          id: 4,
        },
        {
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          name: 'AO1 Louis Pool',
          title: 'Programme Manager',
          company: 'South African Air Force',
          location: 'Pretoria, South Africa',
          logo: '',
          id: 5,
        },
        {
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          name: 'Antonio Calvo',
          title: 'Engineer & Project Manager',
          company: 'GECI GROUP',
          location: 'Madrid, Spain',
          logo: '',
          id: 6,
        },
        {
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          name: 'Do Xuan Phuong',
          title: 'Deputy General Director',
          company: 'VTG Equipment and Technology',
          location: 'JSC, Vietnam',
          logo: '',
          id: 7,
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
