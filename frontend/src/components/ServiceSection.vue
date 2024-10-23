<template>
  <div class="fetched-data-section">
    <h2 class="center">Find The Service You're Looking For!</h2>
    <p class="center mt-s large mb-l">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis maxime
      at delectus cumque atque.
    </p>

    <p class="center">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search for a service..."
        @input="filterServices"
        class="search-input"
      />
    </p>

    <div v-if="loading">Loading...</div>
    <div v-if="filteredServices.length" class="fetched-data-grid">
      <div
        v-for="service in filteredServices"
        :key="service._id"
        class="fetched-data-box"
      >
        <div>
          <img
            :src="require(`@/assets/images/services/${service.image}`)"
            alt="Service Image"
          />
          <h3>{{ service.name }}</h3>
        </div>

        <div>
          <p>{{ service.description }}</p>
          <p class="aqua right mt-s">Php {{ service.price }}</p>
        </div>
      </div>
    </div>
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
      this.filteredServices = this.services;
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

<style scoped></style>
