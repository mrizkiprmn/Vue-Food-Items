<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app,
#app::before,
#appafter {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h4 {
  font-size: 1.3rem;
}
p {
  font-size: 1rem;
}
</style>
