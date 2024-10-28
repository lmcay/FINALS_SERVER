<template>
  <div>
    <div class="box-section">
      <div class="box-section-right">
        <img src="../assets/images/aboutpage/ab3.png" alt="" class="box-img" />
      </div>
      <div class="box-section-left">
        <h1>Advanced Technology for Accurate Diagnostics</h1>
        <p>
          At Diaserv Diagnostic Laboratory, we leverage cutting-edge technology
          to deliver precise diagnostic results. Our state-of-the-art equipment
          enables us to perform a variety of tests efficiently and accurately,
          enhancing the quality of our services and keeping us at the forefront
          of the diagnostic industry.<br /><br />
          We continually upgrade our technology to incorporate the latest
          innovations, recognizing its crucial role in healthcare. Our
          commitment to excellence ensures timely results and supports informed
          medical decisions, ultimately improving patient outcomes and fostering
          trust in our services.
        </p>
      </div>
    </div>
    <PartnerSection />
    <MachineSection />
  </div>
</template>

<script>
import MachineSection from "@/components/MachineSection.vue";
import PartnerSection from "../components/PartnerSection.vue";

export default {
  name: "TechnologyPage",
  components: {
    PartnerSection,
    MachineSection,
  },
};
</script>
