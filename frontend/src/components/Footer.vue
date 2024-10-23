<template>
  <footer>
    <div class="footer-top">
      <div class="footer-left">
        <h2>Random text here</h2>
        <p class="lh-m mt-s">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
          blanditiis culpa eos suscipit error impedit earum enim similique vitae
          omnis illo, rem, corrupti eius totam sunt numquam unde aut
          accusantium!
        </p>
      </div>
      <div>
        <li class="aqua">Navigation</li>
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
      </div>
      <div>
        <ul>
          <li class="aqua">Socials</li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Facebook</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="center">
        2024. Diaserv Diagnostics Laboratory. All Rights Reserved.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
footer {
  padding: 4rem 8rem;
  background-color: #252525;
  color: white;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid gray;
  margin-bottom: 1rem;
}

.footer-left {
  max-width: 800px;
}

li {
  margin-bottom: 1rem;
}

li a {
  color: gray;
}

li a:hover {
  color: white;
}
</style>
