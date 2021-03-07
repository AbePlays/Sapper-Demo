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
        <a
          rel="prefetch"
          class:current={segment === "characters"}
          href="characters/1">Characters</a
        >
      </li>
      <li>
        <a rel="prefetch" class:current={segment === "houses"} href="houses/1"
          >Houses</a
        >
      </li>
      <li>
        <a rel="prefetch" class:current={segment === "books"} href="books/1"
          >Books</a
        >
      </li>
      <li>
        <a rel="prefetch" class:current={segment === "about"} href="about"
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

  .current {
    color: goldenrod;
  }

  .wrapper {
    max-width: 80rem;
    height: 100%;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .logo {
    text-align: center;
    padding-top: 0.75rem;
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
    justify-content: space-evenly;
    margin-top: 0.75rem;
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
    transition: color 200ms ease-in-out;
  }

  a:hover {
    color: #aaa;
  }

  @media (min-width: 640px) {
    .wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo {
      padding-top: 0;
    }
    ul {
      margin-top: 0;
    }
  }
</style>
