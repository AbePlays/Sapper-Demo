<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<div>
  <h1>{status}</h1>

  <p>{error.message}</p>
</div>

{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}

<style>
  div {
    min-height: 90vh;
    background-color: black;
    color: white;
    text-align: center;
    padding: 5rem 0;
    font-size: 1.5rem;
  }
</style>
