<template>
  <footer>
    <div class="footer-top">
      <div class="footer-left">
        <h2>Diaserv - Your Partner in Precision Health</h2>
        <p class="lh-m mt-s">
          With a commitment to excellence and a focus on patient care, we
          provide advanced diagnostic services that support informed health
          decisions, ensuring that every individual receives the quality care
          they deserve.
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
          <li>
            <a
              href="https://www.facebook.com/DiaservDiagnosticLab/"
              target="_blank"
              >Facebook</a
            >
          </li>
          <li>
            <a
              href="https://www.instagram.com/explore/locations/983142501/diaserv-diagnostic-laboratory/"
              target="_blank"
              >Instagram</a
            >
          </li>
          <li>
            <a
              href="https://healthcarephilippines.com/directory/diaserv-diagnostic-laboratory/"
              target="_blank"
              >Healthcare</a
            >
          </li>
          <li>
            <a
              href="https://www.infobel.com/en/philippines/diaserv_diagnostic_laboratory/san_fernando_city/PH100401852/businessdetails.aspx"
              target="_blank"
              >Infobel</a
            >
          </li>
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
