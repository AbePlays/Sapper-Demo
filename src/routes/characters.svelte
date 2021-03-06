<script>
  import { onMount } from "svelte";
  import CharacterCard from "../components/CharacterCard.svelte";

  let currentPage = 1;
  let data = [];
  let loading = true;

  const getData = async () => {
    loading = true;
    const res = await fetch(
      `https://www.anapioficeandfire.com/api/characters?page=${currentPage}&pageSize=10`
    );
    const fetchedData = await res.json();
    loading = false;
    data = fetchedData;
  };

  onMount(() => {
    // getData();
  });
</script>

<div class="characters-wrapper">
  <div class="characters-content">
    <h1>Characters</h1>
    {#if loading}
      <p>Loading</p>
    {:else}
      {#each data as character}
        <CharacterCard {character} />
      {/each}
    {/if}
  </div>
</div>

<style>
  .characters-wrapper {
    background-color: black;
    color: white;
    min-height: 90vh;
  }

  .characters-content {
    max-width: 64rem;
    margin: 0 auto;
    padding: 1rem;
  }

  .characters-content h1 {
    margin: 1rem 0;
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 0.2rem;
  }
</style>
