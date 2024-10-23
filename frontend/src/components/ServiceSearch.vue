<template>
  <div class="service-search">
    <h2>Search Our Services</h2>
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search for a service..."
      @input="filterServices"
    />
    <div v-if="loading">Loading...</div>
    <ul v-if="filteredServices.length">
      <li v-for="service in filteredServices" :key="service._id">
        <h3>{{ service.name }}</h3>
        <p>{{ service.description }}</p>
        <p>Price: Php {{ service.price }}</p>
        <img
          :src="require(`@/assets/images/services/${service.image}`)"
          alt="Service Image"
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
      filteredServices: [],
      loading: true,
      searchQuery: "",
    };
  },
  async created() {
    try {
      const response = await axios.get("http://localhost:3002/api/services");
      this.services = response.data;
      this.filteredServices = this.services; // Initially display all services
    } catch (error) {
      console.error("Error fetching services:", error);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    filterServices() {
      const query = this.searchQuery.toLowerCase();
      this.filteredServices = this.services.filter(
        (service) =>
          service.name.toLowerCase().includes(query) ||
          service.description.toLowerCase().includes(query)
      );
    },
  },
};
</script>

<style scoped>
.service-search {
  margin: 20px 0;
}
.service-search h2 {
  font-size: 24px;
  margin-bottom: 10px;
}
.service-search input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.service-search h3 {
  font-size: 20px;
}
.service-search p {
  margin: 5px 0;
}
.service-search img {
  width: 100px;
  height: 100px;
}
</style>
