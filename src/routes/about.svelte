<svelte:head>
  <title>About</title>
</svelte:head>

<div class="about-wrapper">
  <div class="about-content">
    <div class="about-group">
      <h1>Creator</h1>
      <div class="rectangle" />
      <p>
        Hi there, I'm Abhishek - aka Abe 👋 I am a self learner trying to get
        hands on new technologies and producing exciting products that are as
        smart, as they are effective. Wanna talk about Computer Sciency things?
        Drop a message : )
      </p>
    </div>

    <div class="about-group">
      <h1>Contact</h1>
      <div class="rectangle" />
      <div class="about-group-content">
        <a target="_blank" href="https://github.com/AbePlays"> Github </a>
        <a href="mailto:abhi.rawat456@gmail.com"> Mail </a>
        <a target="_blank" href="https://www.linkedin.com/in/abe10/">
          LinkedIn
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  .about-wrapper {
    background-color: black;
    color: white;
    min-height: 90vh;
  }

  .about-content {
    max-width: 64rem;
    margin: 0 auto;
    padding: 1rem;
    text-align: center;
  }

  .about-group {
    margin: 3rem 0;
  }

  .about-group h1 {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
  }

  .about-group-content {
    margin-top: 2.5rem;
  }

  .rectangle {
    background-color: white;
    height: 0.5rem;
    width: 2rem;
    margin: 1.5rem auto;
    transform: rotate(-15deg) skewX(-15deg);
  }

  p {
    max-width: 40rem;
    margin: 0 auto;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: black;
    background-color: white;
    padding: 0.7rem 1.5rem;
    border-radius: 0.3rem;
  }

  a:not(:last-child) {
    margin-right: 1rem;
  }
</style>
