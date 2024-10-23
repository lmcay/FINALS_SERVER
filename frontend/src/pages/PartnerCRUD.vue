<template>
  <div class="crud-section">
    <h2>Partner CRUD</h2>

    <form @submit.prevent="handleSubmit">
      <input
        type="text"
        v-model="form.name"
        placeholder="Partner Name"
        required
      />
      <textarea
        v-model="form.description"
        placeholder="Description"
        required
      ></textarea>
      <input type="file" @change="handleImageUpload" />

      <button type="submit" class="button-outline">
        {{ editMode ? "Update" : "Add" }} Partner
      </button>
    </form>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="partner in partners" :key="partner._id">
          <td>{{ partner.name }}</td>
          <td>{{ partner.description }}</td>
          <td>
            <img
              :src="require(`@/assets/images/partners/${partner.image}`)"
              :alt="`${partner.image}`"
              class="crud-image"
            />
          </td>
          <td>
            <button @click="editPartner(partner)" class="button-edit">
              Edit
            </button>
            <button @click="deletePartner(partner._id)" class="button-delete">
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
  name: "PartnerCRUD",
  data() {
    return {
      partners: [],
      form: {
        name: "",
        description: "",
        image: "",
      },
      editMode: false,
      editId: null,
      loading: true,
    };
  },
  methods: {
    async fetchPartners() {
      try {
        const response = await axios.get("http://localhost:3002/api/partners");
        this.partners = response.data;
      } catch (error) {
        console.error("Error fetching partners:", error);
      }
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      this.form.image = file;
    },
    async handleSubmit() {
      const formData = new FormData();
      formData.append("name", this.form.name);
      formData.append("description", this.form.description);
      formData.append("image", this.form.image);

      try {
        if (this.editMode) {
          await axios.put(
            `http://localhost:3002/api/partners/${this.editId}`,
            formData
          );
        } else {
          await axios.post("http://localhost:3002/api/partners", formData);
        }
        this.resetForm();
        this.fetchPartners();
      } catch (error) {
        console.error("Error saving partner:", error);
      }
    },
    editPartner(partner) {
      this.editMode = true;
      this.editId = partner._id;
      this.form = { ...partner };
    },
    async deletePartner(id) {
      if (confirm("Are you sure you want to delete this partner?")) {
        try {
          await axios.delete(`http://localhost:3002/api/partners/${id}`);
          this.fetchPartners();
        } catch (error) {
          console.error("Error deleting partner:", error);
        }
      }
    },
    resetForm() {
      this.form = {
        name: "",
        description: "",
        image: "",
      };
      this.editMode = false;
      this.editId = null;
    },
  },
  async created() {
    await this.fetchPartners();
  },
};
</script>
