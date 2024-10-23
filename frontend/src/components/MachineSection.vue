<!-- src/components/MachineSection.vue -->
<template>
  <div class="machine-section">
    <h2>Our Machines</h2>
    <div v-if="loading">Loading...</div>
    <div v-if="machines.length">
      <div v-for="(machineGroup, category) in groupedMachines" :key="category">
        <h3>{{ category }}</h3>
        <ul>
          <li v-for="machine in machineGroup" :key="machine._id">
            <h4>{{ machine.name }}</h4>
            <p>{{ machine.description }}</p>
            <img
              :src="require(`@/assets/images/machines/${machine.image}`)"
              alt="Machine Image"
            />
          </li>
        </ul>
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
      // Group machines by category
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
      const response = await axios.get("http://localhost:3002/api/machines"); // Adjust the endpoint as needed
      console.log("Response data:", response.data); // Debugging line
      this.machines = response.data; // Adjust if needed based on response structure
    } catch (error) {
      console.error("Error fetching machines:", error);
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
/* Add your styles here */
.machine-section {
  margin: 20px 0;
}
.machine-section h2 {
  font-size: 24px;
  margin-bottom: 10px;
}
.machine-section h3 {
  font-size: 20px;
  margin-top: 20px;
}
.machine-section h4 {
  font-size: 18px;
}
.machine-section img {
  max-width: 100px; /* Adjust as necessary */
  height: auto;
}
</style>
