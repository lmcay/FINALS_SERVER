<template>
  <div class="container">
    <div class="box-section">
      <div class="box-section-right">
        <img src="../assets/images/aboutpage/ab6.png" alt="" class="box-img" />
      </div>
      <div class="box-section-left">
        <div class="contact-container">
          <h2>Contact Us</h2>
          <form action="#">
            <div class="form-group">
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div class="form-group">
              <label for="subject">Subject:</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div class="form-group">
              <label for="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" class="button-solid">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>

<style scoped>
.box-section-left {
  width: 40%;
}
.contact-container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

form {
  display: block;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  width: 100%;
}
</style>
