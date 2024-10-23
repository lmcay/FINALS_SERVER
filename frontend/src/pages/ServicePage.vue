<template>
  <div>
    <div class="box-section">
      <div class="box-section-right">
        <img
          src="../assets/images/homepage/about-page.png"
          alt=""
          class="box-img"
        />
      </div>
      <div class="box-section-left">
        <h1>Detailed Diagnostic of Your Body</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          sunt corrupti magnam debitis enim repellat quaerat minus iusto
          exercitationem, nam a officiis mollitia, alias voluptatibus laudantium
          dolores nesciunt repellendus consequuntur.<br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          sunt corrupti magnam debitis enim repellat quaerat minus iusto
          exercitationem, nam a officiis mollitia, alias voluptatibus laudantium
          dolores nesciunt repellendus consequuntur.
        </p>
      </div>
    </div>
    <ServiceSection />
  </div>
</template>

<script>
import ServiceSection from "../components/ServiceSection.vue";

export default {
  name: "ServicePage",
  components: {
    ServiceSection,
  },
};
</script>
