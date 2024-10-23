<template>
  <div class="crud-section">
    <h2>Service CRUD</h2>

    <form @submit.prevent="handleSubmit">
      <input
        type="text"
        v-model="form.name"
        placeholder="Service Name"
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
      <input type="number" v-model="form.price" placeholder="Price" required />
      <input type="file" @change="handleImageUpload" />

      <button type="submit" class="button-outline">
        {{ editMode ? "Update" : "Add" }} Service
      </button>
    </form>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Description</th>
          <th>Price</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="service in services" :key="service._id">
          <td>{{ service.name }}</td>
          <td>{{ service.category }}</td>
          <td>{{ service.description }}</td>
          <td>{{ service.price }}</td>
          <td>
            <img
              :src="require(`@/assets/images/services/${services.image}`)"
              :alt="`${service.image}`"
              class="crud-image"
            />
          </td>
          <td>
            <button @click="editService(service)" class="button-edit">
              Edit
            </button>
            <button @click="deleteService(service._id)" class="button-delete">
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
  name: "ServiceCRUD",
  data() {
    return {
      services: [],
      form: {
        name: "",
        category: "",
        description: "",
        price: null,
        image: "",
      },
      editMode: false,
      editId: null,
    };
  },
  methods: {
    async fetchServices() {
      try {
        const response = await axios.get("http://localhost:3002/api/services");
        this.services = response.data;
      } catch (error) {
        console.error("Error fetching services:", error);
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
      formData.append("price", this.form.price);
      formData.append("image", this.form.image);

      try {
        if (this.editMode) {
          await axios.put(
            `http://localhost:3002/api/services/${this.editId}`,
            formData
          );
        } else {
          await axios.post("http://localhost:3002/api/services", formData);
        }
        this.resetForm();
        this.fetchServices();
      } catch (error) {
        console.error("Error saving service:", error);
      }
    },
    editService(service) {
      this.editMode = true;
      this.editId = service._id;
      this.form = { ...service };
    },
    async deleteService(id) {
      if (confirm("Are you sure you want to delete this service?")) {
        try {
          await axios.delete(`http://localhost:3002/api/services/${id}`);
          this.fetchServices();
        } catch (error) {
          console.error("Error deleting service:", error);
        }
      }
    },
    resetForm() {
      this.form = {
        name: "",
        category: "",
        description: "",
        price: null,
        image: "",
      };
      this.editMode = false;
      this.editId = null;
    },
  },
  async created() {
    await this.fetchServices();
  },
};
</script>
