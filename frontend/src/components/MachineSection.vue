<template>
  <div class="fetched-data-section">
    <h2>Our Machines</h2>
    <p class="mt-s large mb-l">
      State-of-the-art equipment for precise and reliable results.
    </p>
    <div v-if="loading">Loading...</div>
    <div v-if="machines.length">
      <div
        v-for="(machineGroup, category) in groupedMachines"
        :key="category"
        class="mt-l"
      >
        <h3 class="">{{ category }}</h3>
        <div class="fetched-data-grid">
          <div
            v-for="machine in machineGroup"
            :key="machine._id"
            class="fetched-data-box"
          >
            <div>
              <img
                :src="require(`@/assets/images/machines/${machine.image}`)"
                alt="Machine Image"
              />
              <h3 class="mt-s">{{ machine.name }}</h3>
            </div>

            <p>{{ machine.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>No machines found.</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      machines: [],
      loading: true,
    };
  },
  computed: {
    groupedMachines() {
      return this.machines.reduce((groups, machine) => {
        const category = machine.category;
        if (!groups[category]) {
          groups[category] = [];
        }
        groups[category].push(machine);
        return groups;
      }, {});
    },
  },
  async created() {
    try {
      const response = await axios.get("http://localhost:3002/api/machines");
      // console.log("Response data:", response.data); For Debugging
      this.machines = response.data;
    } catch (error) {
      console.error("Error fetching machines:", error);
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped></style>
