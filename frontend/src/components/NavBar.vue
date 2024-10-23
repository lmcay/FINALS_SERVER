<template>
  <div class="header-container">
    <div>
      <img src="../assets/images/diaserv-logo.png" alt="" class="logo" />
    </div>
    <nav>
      <ul class="large">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/services">Services</router-link>
        </li>
        <li>
          <router-link to="/technology">Technology</router-link>
        </li>
      </ul>
    </nav>
    <div>
      <button class="button-outline">Contact</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.logo {
  width: 100px;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  position: fixed;
  left: 0;
  right: 0;
  background-color: var(--primary-color);
}

nav ul {
  display: flex;
  gap: 1.2rem;
}

nav a {
  color: var(--secondary-color);
}

nav a:hover {
  color: var(--tertiary-color);
}
</style>
