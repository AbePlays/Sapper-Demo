<script>
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<div class="home-wrapper">
  <div class="home-content">
    <h1>Game of thrones</h1>
    <p>
      Game of Thrones is an American fantasy drama television series created by
      David Benioff and D. B. Weiss for HBO. Game of Thrones is roughly based on
      the storylines of the A Song of Ice and Fire book series by George R. R.
      Martin, set in the fictional Seven Kingdoms of Westeros and the continent
      of Essos.
    </p>
    <div class="divider" />
    <div class="bottom-text">
      <h3>Game of thrones</h3>
      <p>2011-2019</p>
    </div>
  </div>
</div>

<style>
  .home-wrapper {
    background-color: black;
    min-height: 90vh;
    color: white;
  }

  .home-content {
    max-width: 64rem;
    margin: 0 auto;
    padding: 1rem;
    height: 100%;
  }

  .home-content h1 {
    margin-top: 4rem;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    font-size: 4rem;
    font-weight: 400;
  }

  .home-content p {
    max-width: 50rem;
    margin: 3rem 0;
    line-height: 1.5;
  }

  .divider {
    width: 100%;
    height: 0.5rem;
    background-color: white;
  }

  .bottom-text {
    margin-top: 5rem;
    color: goldenrod;
    font-size: 0.8rem;
  }

  .bottom-text h3 {
    text-transform: uppercase;
  }

  .bottom-text p {
    margin-top: 0.5rem;
  }

  @media (min-width: 640px) {
    .home-content h1 {
      font-size: 5rem;
    }

    .home-content p {
      margin: 5rem 0;
    }

    .bottom-text p {
      margin-top: 0.5rem;
    }
  }
</style>
