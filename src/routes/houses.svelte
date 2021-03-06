<script>
  import { onMount } from "svelte";
  import Card from "../components/Card.svelte";

  let currentPage = 1;
  let data = [];
  let loading = true;

  const getData = async () => {
    loading = true;
    const res = await fetch(
      `https://www.anapioficeandfire.com/api/houses?page=${currentPage}&pageSize=10`
    );
    const fetchedData = await res.json();
    loading = false;
    data = fetchedData;
  };

  onMount(() => {
    // getData();
  });
</script>

<div class="houses-wrapper">
  <div class="houses-content">
    <h1>Houses</h1>
    {#if loading}
      <p>Loading</p>
    {:else}
      {#each data as house}
        <Card>
          <p>Name: <span>{house.name || "-"}</span></p>
          <p>Region: <span>{house.region || "-"}</span></p>
          <p>Coat of Arms: <span>{house.coatOfArms || "-"}</span></p>
        </Card>
      {/each}
    {/if}
  </div>
</div>

<style>
  .houses-wrapper {
    background-color: black;
    color: white;
    min-height: 90vh;
  }

  .houses-content {
    max-width: 64rem;
    margin: 0 auto;
    padding: 1rem;
  }

  .houses-content h1 {
    margin: 1rem 0;
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 0.2rem;
  }
</style>
