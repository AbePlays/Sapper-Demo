<script>
  export let segment;
</script>

<nav>
  <div class="wrapper">
    <div class="logo">
      <h1>
        <a href="/">GOT</a>
      </h1>
    </div>
    <ul>
      <li>
        <a class:current={segment === "characters"} href="characters"
          >Characters</a
        >
      </li>
      <li>
        <a class:current={segment === "houses"} href="houses">Houses</a>
      </li>
      <li>
        <a class:current={segment === "books"} href="books">Books</a>
      </li>
      <li>
        <a class:current={segment === "about"} href="about">About</a>
      </li>
    </ul>
  </div>
</nav>

<style>
  nav {
    height: 10vh;
    background-color: black;
  }

  .current {
    color: goldenrod;
  }

  .wrapper {
    max-width: 80rem;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo h1 a {
    color: white;
    text-decoration: none;
    letter-spacing: 0.3rem;
    font-weight: 300;
    font-size: 1.5rem;
  }

  h1 {
    color: white;
  }

  ul {
    display: flex;
    align-items: center;
  }

  li {
    list-style: none;
  }

  li:not(:last-child) {
    margin-right: 1rem;
  }

  li a {
    text-decoration: none;
    color: white;
  }
</style>
