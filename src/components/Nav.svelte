<script>
  export let segment;
</script>

<nav>
  <div class="wrapper">
    <div class="logo">
      <h1>GOT</h1>
    </div>
    <ul>
      <li>
        <a aria-current={segment === "about" ? "page" : undefined} href="about"
          >Characters</a
        >
      </li>
      <li>
        <a aria-current={segment === "about" ? "page" : undefined} href="about"
          >Houses</a
        >
      </li>
      <li>
        <a aria-current={segment === "about" ? "page" : undefined} href="about"
          >Books</a
        >
      </li>
      <li>
        <a aria-current={segment === "about" ? "page" : undefined} href="about"
          >About</a
        >
      </li>
    </ul>
  </div>
</nav>

<style>
  nav {
    height: 10vh;
    background-color: black;
  }

  .wrapper {
    max-width: 80rem;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
