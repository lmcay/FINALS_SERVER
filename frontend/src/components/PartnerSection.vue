<template>
  <div class="fetched-data-section">
    <h2 class="center">Meet Our Partners in Tech</h2>
    <p class="center mt-s large mb-l">
      Discover the advanced technology that powers our diagnostic services.
    </p>
    <div v-if="loading">Loading...</div>
    <div v-if="partners.length" class="fetched-data-grid">
      <div
        class="fetched-data-box"
        v-for="partner in partners"
        :key="partner._id"
      >
        <div>
          <img
            :src="require(`@/assets/images/partners/${partner.image}`)"
            alt="Partners Image"
          />
          <h3 class="mt-s">{{ partner.name }}</h3>
        </div>

        <p>{{ partner.description }}</p>
      </div>
    </div>
    <div v-else>No partners found.</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      partners: [],
      loading: true,
    };
  },
  async created() {
    try {
      const response = await axios.get("http://localhost:3002/api/partners");
      // console.log("Response data:", response.data); For Debugging
      this.partners = response.data;
    } catch (error) {
      console.error("Error fetching partners:", error);
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped></style>
