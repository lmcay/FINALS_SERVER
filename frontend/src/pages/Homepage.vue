<template>
  <div class="container">
    <div class="box-section">
      <div class="box-section-left">
        <h1>Detailed Diagnostic of Your Body</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          sunt corrupti magnam debitis enim repellat quaerat minus iusto
          exercitationem, nam a officiis mollitia, alias voluptatibus laudantium
          dolores nesciunt repellendus consequuntur.
        </p>
        <button class="button-solid">Learn More</button>
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis maxime
        at delectus cumque atque.
      </p>
      <div class="services-container">
        <div class="services-box">
          <img src="../assets/images/homepage/service-2.png" alt="" />
          <h3>Blood Test</h3>
          <p class="center mb-s">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button class="button-solid">Learn More</button>
        </div>
        <div class="services-box">
          <img src="../assets/images/homepage/service-2.png" alt="" />
          <h3>Blood Test</h3>
          <p class="center mb-s">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button class="button-solid">Learn More</button>
        </div>
        <div class="services-box">
          <img src="../assets/images/homepage/service-2.png" alt="" />
          <h3>Blood Test</h3>
          <p class="center mb-s">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button class="button-solid">Learn More</button>
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
      <div class="box-section-left">
        <h1>Detailed Diagnostic of Your Body</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          sunt corrupti magnam debitis enim repellat quaerat minus iusto
          exercitationem, nam a officiis mollitia, alias voluptatibus laudantium
          dolores nesciunt repellendus consequuntur.
        </p>
        <button class="button-solid">Learn More</button>
      </div>
    </div>

    <div class="client-section">
      <h2 class="center">Our Clients Around Pampanga</h2>
      <p class="center mt-s large mb-l">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis maxime
        at delectus cumque atque.
      </p>
      <div class="client-grid">
        <div class="client-box">
          <img src="../assets/images/homepage/partner-1.png" alt="" />
        </div>
        <div class="client-box span-2">
          <img src="../assets/images/homepage/partner-1.png" alt="" />
        </div>
        <div class="client-box span-2">
          <img src="../assets/images/homepage/partner-1.png" alt="" />
        </div>
        <div class="client-box">
          <img src="../assets/images/homepage/partner-1.png" alt="" />
        </div>
        <div class="client-box">
          <img src="../assets/images/homepage/partner-1.png" alt="" />
        </div>
        <div class="client-box">
          <img src="../assets/images/homepage/partner-1.png" alt="" />
        </div>
        <div class="client-box">
          <img src="../assets/images/homepage/partner-1.png" alt="" />
        </div>
        <div class="client-box span-2">
          <img src="../assets/images/homepage/partner-1.png" alt="" />
        </div>
        <div class="client-box">
          <img src="../assets/images/homepage/partner-1.png" alt="" />
        </div>
        <div class="client-box span-2">
          <img src="../assets/images/homepage/partner-1.png" alt="" />
        </div>
      </div>
    </div>

    <div class="review-section">
      <div class="review-box">
        <h2>What our client says about us</h2>
        <p class="lh-m mt-s">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo numquam,
          eos, officiis, odit totam accusantium quod obcaecati dolorem
          voluptatem quam sit vel deleniti ducimus expedita debitis unde
          praesentium? Perspiciatis, porro.
        </p>
      </div>
      <div class="review-box review">
        <p class="review-p">
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
          autem officiis reiciendis iusto adipisci expedita nisi consectetur,
          dolores cumque ipsa mollitia unde aut odio culpa, maiores quas ut
          veritatis. Dolore!"
        </p>
        <div class="review-bottom">
          <img src="../assets/images/homepage/service-2.png" alt="" />
          <div class="review-name">
            <h4>Person name</h4>
            <p class="sub">Random Text Here</p>
          </div>
        </div>
      </div>
      <div class="review-box review">
        <p class="review-p">
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
          autem officiis reiciendis iusto adipisci expedita nisi consectetur,
          dolores cumque ipsa mollitia unde aut odio culpa, maiores quas ut
          veritatis. Dolore!"
        </p>
        <div class="review-bottom">
          <img src="../assets/images/homepage/service-2.png" alt="" />
          <div class="review-name">
            <h4>Person name</h4>
            <p class="sub">Random Text Here</p>
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
}

.review-section {
  width: 80vw;
  margin: auto;
  margin-top: 6rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
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
