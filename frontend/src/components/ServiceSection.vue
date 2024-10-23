<!-- src/components/ServiceSection.vue -->
<template>
  <div class="service-section">
    <h2>Our Services</h2>
    <div v-if="loading">Loading...</div>
    <ul v-if="services.length">
      <li v-for="service in services" :key="service._id">
        <h3>{{ service.name }}</h3>
        <p>{{ service.description }}</p>
        <p>Price: Php {{ service.price }}</p>
        <img
          :src="require(`@/assets/images/services/${service.image}`)"
          alt="Machine Image"
        />
      </li>
    </ul>
    <div v-else>No services found.</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      services: [],
      loading: true,
    };
  },
  async created() {
    try {
      const response = await axios.get("http://localhost:3002/api/services"); // Adjust the endpoint as needed
      console.log("Response data:", response.data); // Debugging line
      this.services = response.data; // Adjust if needed based on response structure
    } catch (error) {
      console.error("Error fetching services:", error);
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
/* Add your styles here */
.service-section {
  margin: 20px 0;
}
.service-section h2 {
  font-size: 24px;
  margin-bottom: 10px;
}
.service-section h3 {
  font-size: 20px;
}
.service-section p {
  margin: 5px 0;
}
.service-section img {
  width: 100px;
  height: 100px;
}
</style>
