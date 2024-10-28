<template>
  <div class="fetched-data-section">
    <h2 class="center">Find The Service You're Looking For!</h2>
    <p class="center mt-s large mb-l">
      Explore Our Comprehensive Range of Diagnostic Tests to Support Your Health
      Needs.
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
    <div v-if="Object.keys(groupedServices).length">
      <div
        v-for="(serviceGroup, category) in groupedServices"
        :key="category"
        class="mt-l"
      >
        <h3>{{ category }}</h3>
        <div class="fetched-data-grid">
          <div
            v-for="service in serviceGroup"
            :key="service._id"
            class="fetched-data-box"
          >
            <div>
              <img
                :src="require(`@/assets/images/services/${service.image}`)"
                alt="Service Image"
              />
              <h3 class="mt-s">{{ service.name }}</h3>
            </div>

            <div>
              <p>{{ service.description }}</p>
              <p class="aqua right mt-s">Php {{ service.price }}</p>
            </div>
          </div>
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
      loading: true,
      searchQuery: "",
    };
  },
  computed: {
    filteredServices() {
      if (!this.searchQuery) {
        return this.services;
      }
      const query = this.searchQuery.toLowerCase();
      return this.services.filter(
        (service) =>
          service.name.toLowerCase().includes(query) ||
          service.description.toLowerCase().includes(query)
      );
    },
    groupedServices() {
      return this.filteredServices.reduce((groups, service) => {
        const category = service.category;
        if (!groups[category]) {
          groups[category] = [];
        }
        groups[category].push(service);
        return groups;
      }, {});
    },
  },
  async created() {
    try {
      const response = await axios.get("http://localhost:3002/api/services");
      this.services = response.data;
    } catch (error) {
      console.error("Error fetching services:", error);
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped></style>
