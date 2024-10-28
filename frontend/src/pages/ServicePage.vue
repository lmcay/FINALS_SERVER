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
        <h1>Comprehensive Diagnostic Services Tailored for You</h1>
        <p>
          At Diaserv Diagnostic Laboratory, we provide a wide range of
          diagnostic tests to meet the needs of patients and healthcare
          providers. Our services include blood chemistry, hematology,
          urinalysis, and advanced imaging like X-rays and ultrasounds, all
          performed with precision for accurate and timely results.<br /><br />
          We uphold the highest quality standards, with a dedicated team of
          medical technologists and radiologic technologists ensuring reliable
          diagnostics and personalized care. At Diaserv, we are committed to
          supporting your health and well-being through our comprehensive
          offerings.
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
