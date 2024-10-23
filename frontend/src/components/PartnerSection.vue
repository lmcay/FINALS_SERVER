<template>
  <div class="partner-section">
    <h2>Our Partners</h2>
    <div v-if="loading">Loading...</div>
    <ul v-if="partners.length">
      <li v-for="partner in partners" :key="partner._id">
        <h3>{{ partner.name }}</h3>
        <p>{{ partner.description }}</p>
        <img
          :src="require(`@/assets/images/partners/${partner.image}`)"
          alt="Partners Image"
        />
      </li>
    </ul>
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
      console.log("Response data:", response.data); // Debugging line
      this.partners = response.data; // Adjust if needed based on response structure
    } catch (error) {
      console.error("Error fetching partners:", error);
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
.partner-section img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  object-position: center;
}
</style>
