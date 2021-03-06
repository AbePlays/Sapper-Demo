<script>
  import { onMount } from "svelte";
  import Card from "../components/Card.svelte";
  import Pagination from "../components/Pagination.svelte";
  import Spinner from "../components/Spinner.svelte";

  let currentPage = 1;
  let lastPage = 2;
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

  const getAuthors = (authorArray) => {
    let authors = "";
    for (let i = 0; i < authorArray.length; i++) {
      authors += authorArray[i] + ", ";
    }
    authors = authors.slice(0, authors.length - 2);
    return authors;
  };

  onMount(() => {
    getData();
  });
</script>

<svelte:head>
  <title>Books</title>
</svelte:head>

<div class="books-wrapper">
  <div class="books-content">
    <h1>Books</h1>
    {#if loading}
      <Spinner />
    {:else}
      {#if data.length === 0}
        <p style="text-align: center">Data not found</p>
      {/if}
      {#each data as book}
        <Card>
          <p>Name: <span>{book.name || "-"}</span></p>
          <p>Number of Pages: <span>{book.numberOfPages || "-"}</span></p>
          <p>
            Date Released: <span
              >{new Date(book.released).toLocaleDateString() || "-"}</span
            >
          </p>
          <p>
            Author(s): <span>{getAuthors(book.authors)}</span>
          </p>
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
