<template>
  <div class="crud-section">
    <h2 class="mb-s">Machine CRUD</h2>

    <form @submit.prevent="handleSubmit">
      <input
        type="text"
        v-model="form.name"
        placeholder="Machine Name"
        required
      />
      <input
        type="text"
        v-model="form.category"
        placeholder="Category"
        required
      />
      <textarea
        v-model="form.description"
        placeholder="Description"
        required
      ></textarea>
      <input type="file" @change="handleImageUpload" />

      <button type="submit" class="button-outline">
        {{ editMode ? "Update" : "Add" }} Machine
      </button>
    </form>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Description</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="machine in machines" :key="machine._id">
          <td>{{ machine.name }}</td>
          <td>{{ machine.category }}</td>
          <td>{{ machine.description }}</td>
          <td>
            <img
              :src="require(`@/assets/images/machines/${machine.image}`)"
              :alt="`${machine.image}`"
              class="crud-image"
            />
          </td>
          <td>
            <button @click="editMachine(machine)" class="button-edit">
              Edit
            </button>
            <button @click="deleteMachine(machine._id)" class="button-delete">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MachineCRUD",
  data() {
    return {
      machines: [],
      form: {
        name: "",
        category: "",
        description: "",
        image: "",
      },
      editMode: false,
      editId: null,
      loading: true,
    };
  },
  methods: {
    async fetchMachines() {
      try {
        const response = await axios.get("http://localhost:3002/api/machines");
        this.machines = response.data;
      } catch (error) {
        console.error("Error fetching machines:", error);
      }
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      this.form.image = file;
    },
    async handleSubmit() {
      const formData = new FormData();
      formData.append("name", this.form.name);
      formData.append("category", this.form.category);
      formData.append("description", this.form.description);
      formData.append("image", this.form.image);

      try {
        if (this.editMode) {
          await axios.put(
            `http://localhost:3002/api/machines/${this.editId}`,
            formData
          );
        } else {
          await axios.post("http://localhost:3002/api/machines", formData);
        }
        this.resetForm();
        this.fetchMachines();
      } catch (error) {
        console.error("Error saving machine:", error);
      }
    },
    editMachine(machine) {
      this.editMode = true;
      this.editId = machine._id;
      this.form = { ...machine };
    },
    async deleteMachine(id) {
      if (confirm("Are you sure you want to delete this machine?")) {
        try {
          await axios.delete(`http://localhost:3002/api/machines/${id}`);
          this.fetchMachines();
        } catch (error) {
          console.error("Error deleting machine:", error);
        }
      }
    },
    resetForm() {
      this.form = {
        name: "",
        category: "",
        description: "",
        image: "",
      };
      this.editMode = false;
      this.editId = null;
    },
  },
  async created() {
    await this.fetchMachines();
  },
};
</script>
