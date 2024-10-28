<template>
  <div class="container">
    <div class="box-section">
      <div class="box-section-left">
        <h1>Detailed Diagnostic of Your Body</h1>
        <p>
          Empowering healthcare with precise, timely diagnostics tailored to
          your unique needs. At Diaserv, we bring advanced technology and
          compassionate care together to provide results you can
          trust—supporting every step of your health journey.
        </p>
        <a href="#about"><button class="button-solid">Learn More</button></a>
      </div>
      <div class="box-section-right">
        <img
          src="../assets/images/homepage/hero-homepage.png"
          alt=""
          class="box-img"
        />
      </div>
    </div>

    <div class="services-section">
      <h2 class="center">Services we offer</h2>
      <p class="center mt-s large mb-l">
        Comprehensive testing services designed to support your health journey
        with accuracy and care.
      </p>
      <div class="services-container">
        <div class="services-box">
          <img src="../assets/images/homepage/service-1.png" alt="" />
          <h3>Blood Chemistry</h3>
          <p class="center mb-s">
            Analyzes blood to assess organ health, including liver and kidneys.
          </p>
          <router-link to="/services"
            ><button class="button-solid">Learn More</button></router-link
          >
        </div>
        <div class="services-box">
          <img src="../assets/images/homepage/service-2.png" alt="" />
          <h3>Hematology</h3>
          <p class="center mb-s">
            Tests blood cells for conditions like anemia and infections.
          </p>
          <router-link to="/services"
            ><button class="button-solid">Learn More</button></router-link
          >
        </div>
        <div class="services-box">
          <img src="../assets/images/homepage/service-3.png" alt="" />
          <h3>Urinalysis</h3>
          <p class="center mb-s">
            Detects kidney function, hydration, and possible infections.
          </p>
          <router-link to="/services"
            ><button class="button-solid">Learn More</button></router-link
          >
        </div>
      </div>
    </div>

    <div class="box-section-2">
      <div class="box-section-right">
        <img
          src="../assets/images/homepage/about-page.png"
          alt=""
          class="box-img"
        />
      </div>
      <div class="box-section-left" id="about">
        <h1>Your Trusted Partner in Health for Over 24 Years</h1>
        <p>
          Since 2000, Diaserv Diagnostic Laboratory has been dedicated to
          providing high-quality diagnostic services to the San Fernando
          community. Our team is committed to ensuring that every test is
          accurate, timely, and meaningful, supporting healthcare providers and
          empowering patients with reliable insights into their health.
        </p>
        <router-link to="/about"
          ><button class="button-solid">Learn More</button></router-link
        >
      </div>
    </div>

    <div class="client-section">
      <h2 class="center">Our Clients Around Pampanga</h2>
      <p class="center mt-s large mb-l">
        Trusted by healthcare providers and patients across Pampanga.
      </p>
      <div class="client-grid">
        <div class="client-box">
          <img src="../assets/images/homepage/p1.webp" alt="partner-img" />
        </div>
        <div class="client-box span-2">
          <img src="../assets/images/homepage/p2.webp" alt="partner-img" />
        </div>
        <div class="client-box span-2">
          <img src="../assets/images/homepage/p3.webp" alt="partner-img" />
        </div>
        <div class="client-box">
          <img src="../assets/images/homepage/p4.webp" alt="partner-img" />
        </div>
        <div class="client-box">
          <img src="../assets/images/homepage/p5.webp" alt="partner-img" />
        </div>
        <div class="client-box">
          <img src="../assets/images/homepage/p6.webp" alt="partner-img" />
        </div>
        <div class="client-box">
          <img src="../assets/images/homepage/p7.webp" alt="partner-img" />
        </div>
        <div class="client-box span-2">
          <img src="../assets/images/homepage/p8.webp" alt="partner-img" />
        </div>
        <div class="client-box">
          <img src="../assets/images/homepage/p9.webp" alt="partner-img" />
        </div>
        <div class="client-box span-2">
          <img src="../assets/images/homepage/p10.webp" alt="partner-img" />
        </div>
      </div>
    </div>

    <div class="review-section">
      <div class="review-box">
        <h2>What our client says about us</h2>
        <p class="lh-m mt-s">
          Hear from our valued clients about their experiences with Diaserv
          Diagnostic Laboratory and the impact our services have had on their
          health journeys.
        </p>
      </div>
      <div class="review-box review">
        <p class="review-p">
          "The staff was friendly and professional, and my test results came in
          much sooner than expected."
        </p>
        <div class="review-bottom">
          <img src="../assets/images/homepage/person-1.webp" alt="" />
          <div class="review-name">
            <h4>Maria Santos</h4>
            <p class="sub">Teacher</p>
          </div>
        </div>
      </div>
      <div class="review-box review">
        <p class="review-p">
          "Diaserv has been instrumental in my health journey, providing
          reliable results that help me stay on top of my condition."
        </p>
        <div class="review-bottom">
          <img src="../assets/images/homepage/person-2.webp" alt="" />
          <div class="review-name">
            <h4>Carlos Dela Cruz</h4>
            <p class="sub">Diabetes Patient</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.services-section {
  margin-bottom: 4rem;
}
.services-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 80vw;
  margin: auto;
  gap: 1rem;
}

.services-box {
  border: solid 2px var(--secondary-color);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem;
}

.services-box img {
  height: 200px;
}

.client-section {
  width: 80vw;
  margin: 4rem auto;
}

.client-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.client-box {
  border: 2px solid var(--secondary-color);
  border-radius: 100px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.client-box img {
  max-height: 150px;
  border-radius: 100px;
}

.review-section {
  width: 80vw;
  margin: auto;
  margin-top: 6rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.review-section img {
  border-radius: 50px;
  object-fit: cover;
  object-position: center;
}

.review {
  border: solid 2px var(--secondary-color);
  border-radius: 8px;
  padding: 1rem;
}

.review-p {
  font-size: 22px;
}

.review-bottom {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  align-items: center;
}

.review-bottom img {
  width: 50px;
  height: 50px;
}
</style>
