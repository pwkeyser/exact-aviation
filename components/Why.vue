<template>
  <div id="why" class="SBackground">
    <div class="NavBarGap GreyColour" />
    <b-jumbotron :header="headerText" class="NoPaddingMargins">
      <div class="pre-formatted">
        {{ descriptionTextBefore }}
      </div>
      <b-card-group deck>
        <cards-component
          v-for="(whyComponent, idx) in whyArrayText"
          :key="idx"
          :header="whyComponent.headerText"
          :detail="whyComponent.detailText"
          in
        />
      </b-card-group>
      <div class="pre-formatted">
        {{ descriptionTextAfter }}
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
// <bubble-cards :array="whyArrayText" />
// import BubbleCards from '~/components/BubbleCards'
import Cards from '~/components/Cards'

export default {
  name: 'Why',
  components: {
    // 'bubble-cards': BubbleCards,
    'cards-component': Cards,
  },
  data() {
    return {
      headerText: 'Why Us?',
      descriptionTextBefore:
        '\nCustomer satisfaction is very important to us and has been consistently high. As a result, in most cases, multiple projects, covering multiple systems, equipment and OEM suppliers, have been delivered per customer at multiple sites over many years.',
      descriptionTextAfter:
        '\nContact us today to explore how Exact Aviation can work with you to ensure a successful deployment of your project.',
      whyArrayText: [
        {
          headerText: 'Experience and Track Record',
          detailText:
            'Exact Aviation has been in business for many years and has built exceptional skills and experience with a successful international track record of delivering complex solutions for many customers and with many different OEM suppliers.',
        },
        {
          headerText: 'Flexible Approach',
          detailText:
            'Exact Aviation is flexible in its solution and delivery approach and will work closely with every customer to ensure the right solution and delivery and ultimately to ensure customer alignment and success.',
        },
        {
          headerText: 'End-to-end and Custom Capability',
          detailText:
            'Exact Aviation is the unique ability to provide end-to-end custom solutions across all OEM suppliers and across all aviation systems. Additionally, it has the ability to design and manufacture secondary solutions to “complete” a turnkey solution.',
        },
      ],
    }
  },
}
</script>

<style></style>
