<script>
  import { onMount } from "svelte";
  import Card from "../components/Card.svelte";

  let currentPage = 1;
  let data = [];
  let loading = true;

  const getData = async () => {
    loading = true;
    const res = await fetch(
      `https://www.anapioficeandfire.com/api/books?page=${currentPage}&pageSize=10`
    );
    const fetchedData = await res.json();
    loading = false;
    data = fetchedData;
  };

  onMount(() => {
    // getData();
  });
</script>

<div class="books-wrapper">
  <div class="books-content">
    <h1>Books</h1>
    {#if loading}
      <p>Loading</p>
    {:else}
      {#each data as book}
        <Card>
          <p>Name: <span>{book.name || "-"}</span></p>
          <p>Number of Pages: <span>{book.numberOfPages || "-"}</span></p>
          <p>Date Released: <span>{book.released || "-"}</span></p>
          <p>
            Aliases: {#each book.authors as author}
              <span>{author}</span>
            {/each}
          </p>
        </Card>
      {/each}
    {/if}
  </div>
</div>

<style>
  .books-wrapper {
    background-color: black;
    color: white;
    min-height: 90vh;
  }

  .books-content {
    max-width: 64rem;
    margin: 0 auto;
    padding: 1rem;
  }

  .books-content h1 {
    margin: 1rem 0;
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 0.2rem;
  }
</style>
