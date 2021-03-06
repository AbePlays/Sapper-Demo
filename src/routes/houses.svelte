<script>
  import { onMount } from "svelte";
  import Card from "../components/Card.svelte";
  import Pagination from "../components/Pagination.svelte";
  import Spinner from "../components/Spinner.svelte";

  let currentPage = 1;
  let lastPage = 45;
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

  const forwardFunction = () => {
    if (currentPage + 1 <= lastPage) {
      currentPage += 1;
      getData();
    }
  };

  const backwardFunction = () => {
    if (currentPage > 1) {
      currentPage -= 1;
      getData();
    }
  };

  onMount(() => {
    getData();
  });
</script>

<svelte:head>
  <title>Houses</title>
</svelte:head>

<div class="houses-wrapper">
  <div class="houses-content">
    <h1>Houses</h1>
    {#if loading}
      <Spinner />
    {:else}
      {#if data.length === 0}
        <p>Data not found</p>
      {/if}
      {#each data as house}
        <Card>
          <p>Name: <span>{house.name || "-"}</span></p>
          <p>Region: <span>{house.region || "-"}</span></p>
          <p>Coat of Arms: <span>{house.coatOfArms || "-"}</span></p>
        </Card>
      {/each}
      <Pagination
        currentIndex={currentPage}
        {backwardFunction}
        {forwardFunction}
        {lastPage}
      />
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

  p {
    line-height: 2;
    text-transform: uppercase;
    font-weight: 500;
  }

  span {
    margin-left: 0.2rem;
    text-transform: none;
    font-weight: 400;
  }
</style>
