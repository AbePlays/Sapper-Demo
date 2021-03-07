<script context="module">
  export async function preload(page) {
    const { entity, id } = page.params;

    if (entity === "characters" || entity === "books" || entity === "houses") {
      const res = await this.fetch(
        `https://www.anapioficeandfire.com/api/${entity}?page=${id}&pageSize=10`
      );
      const data = await res.json();
      return { entity, id: parseInt(id), data };
    } else {
      this.error(404, "Not found");
    }
  }
</script>

<script>
  import { goto } from "@sapper/app";
  import Book from "../../components/Book.svelte";
  import Card from "../../components/Card.svelte";
  import Character from "../../components/Character.svelte";
  import House from "../../components/House.svelte";
  import Pagination from "../../components/Pagination.svelte";

  export let entity;
  export let id;
  export let data = [];

  $: index = entity === "books" ? 0 : entity === "houses" ? 1 : 2;

  const options = [
    { name: "books", lastPage: 2, component: Book },
    { name: "houses", lastPage: 45, component: House },
    { name: "characters", lastPage: 214, component: Character },
  ];

  const backwardFunction = () => {
    if (id > 1) {
      goto(`${entity}/${id - 1}`);
    }
  };

  const forwardFunction = () => {
    if (id < options[index].lastPage) {
      goto(`${entity}/${id + 1}`);
    }
  };
</script>

<svelte:head>
  <title>GOT | {entity[0].toUpperCase() + entity.substring(1)}</title>
</svelte:head>

<div class="wrapper">
  <div class="content">
    <h1>{entity.toUpperCase()}</h1>
    {#each data as obj}
      <Card>
        <svelte:component this={options[index].component} {obj} />
      </Card>
    {/each}
    <Pagination
      currentIndex={id}
      {backwardFunction}
      {forwardFunction}
      lastPage={options[index].lastPage}
    />
  </div>
</div>

<style>
  .wrapper {
    background-color: black;
    color: white;
    min-height: 90vh;
  }

  .content {
    max-width: 64rem;
    margin: 0 auto;
    padding: 1rem;
  }

  .content h1 {
    margin: 1rem 0;
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 0.2rem;
  }
</style>
