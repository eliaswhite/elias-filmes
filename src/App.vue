<template>
  <header>
    <router-link to="/">
      <h1><span>Elias</span>Filmes</h1>
    </router-link>
  </header>
  <main></main>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira Sans", sans-serif;

  &::selection {
    background: transparent(#428883, 0.5);
  }
}

body {
  background-color: rgb(9, 8, 8);
}

a {
  text-decoration: none;
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 11px 16px;
  background-color: rgb(177, 6, 6);
  box-shadow: 0px, 0px, 6px rgba(114, 200, 21, 0.1);
}

h1 {
  color: white;
  font-size: 28px;

  span {
    color: darkred;
  }
}
</style>
