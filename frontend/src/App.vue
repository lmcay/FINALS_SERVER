<template>
  <div id="app">
    <NavBar />
    <router-view />
    <callAction />
    <AppFooter />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import AppFooter from "./components/Footer.vue";
import callAction from "./components/CallToAction.vue";

export default {
  name: "App",
  components: {
    NavBar,
    AppFooter,
    callAction,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
}

:root {
  --primary-color: #effdff;
  --secondary-color: #38b6ff;
  --tertiary-color: #0084ff;
}

body {
  background-color: var(--primary-color);
}

/* Style Components */

.large {
  font-size: large;
}

.button-outline {
  border: solid 1px var(--secondary-color);
  background-color: transparent;
  padding: 1rem 2.5rem;
  border-radius: 5px;
  font-weight: bold;
  color: var(--secondary-color);
  text-transform: uppercase;
  transition: 0.4s;
  cursor: pointer;
  letter-spacing: 1px;
}

.button-outline:hover,
.button-delete:hover {
  background-color: var(--secondary-color);
  color: white;
}

.button-solid {
  border: solid 1px var(--secondary-color);
  background-color: var(--secondary-color);
  padding: 1rem 2.5rem;
  border-radius: 5px;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  transition: 0.4s;
  cursor: pointer;
  letter-spacing: 1px;
}

.button-solid:hover {
  background-color: var(--tertiary-color);
}

h1,
h2,
h3,
h4 {
  color: var(--secondary-color);
  font-weight: bold;
}

h1 {
  font-size: 48px;
}

h2 {
  font-size: 42px;
}

h3 {
  font-size: 26px;
}

h4 {
  font-size: 16px;
}

button {
  cursor: pointer;
}

.mb-s {
  margin-bottom: 10px;
}

.mb-l {
  margin-bottom: 25px;
}

.mt-s {
  margin-top: 10px;
}

.mt-l {
  margin-top: 25px;
}

.center {
  text-align: center;
}

.large {
  font-size: large;
}

.lh-m {
  line-height: 1.5rem;
}

.sub {
  color: gray;
  font-size: 12px;
}

.span-2 {
  grid-column: span 2;
}

.aqua {
  color: var(--secondary-color);
  font-weight: bold;
}

/* Box Container */

.box-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  margin: 0 auto;
  padding: 9rem 0 4rem;
  gap: 2rem;
}

.box-section-2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  margin: auto;
  gap: 2rem;
}

.box-img {
  width: 600px;
}

.box-section-left p {
  line-height: 1.5rem;
  font-size: large;
  margin-top: 1rem;
  margin-bottom: 3rem;
}

/* Fetched Data */

.fetched-data-section {
  width: 80%;
  margin: 4rem auto 0;
}

.search-input {
  width: 70%;
  padding: 1rem 2rem;
  margin-bottom: 20px;
  border: 2px solid var(--secondary-color);
  border-radius: 25px;
}

.search-input:focus {
  outline: none;
}

.fetched-data-grid {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}

.fetched-data-box {
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
}

.fetched-data-section img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: center;
  border: solid 2px var(--secondary-color);
  border-radius: 10px;
}

/* CRUD SECTION */

.crud-section {
  width: 80%;
  margin: 0 auto;
  padding-top: 10rem;
}

form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

input,
textarea {
  border: solid 2px var(--secondary-color);
  background-color: white;
  padding: 1rem;
  border-radius: 10px;
}

input:focus,
textarea:focus {
  outline: none;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
  border: 1px solid var(--secondary-color);
}

.crud-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
}

.button-edit,
.button-delete {
  padding: 10px 15px;
  background-color: transparent;
  border: solid 1px var(--secondary-color);
  border-radius: 5px;
  transition: 0.4s;
}

.button-edit {
  margin-right: 5px;
  background-color: var(--secondary-color);
  color: white;
}
</style>
