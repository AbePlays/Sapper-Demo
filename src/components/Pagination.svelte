<script>
  export let forwardFunction;
  export let backwardFunction;
  export let currentIndex = 0;
  export let lastPage;
</script>

<div class="pagination-wrapper">
  <button
    class="btn"
    on:click={backwardFunction}
    class:inactive={currentIndex === 1}>{"<"}</button
  >
  <span>{currentIndex}</span>
  <button
    class="btn"
    on:click={forwardFunction}
    class:inactive={currentIndex === lastPage}>{">"}</button
  >
</div>

<style>
  .pagination-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
  }

  button {
    height: 2.5rem;
    width: 2.5rem;
    border: none;
    border-radius: 0.375rem;
    background-color: #333;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: inherit;
    font-size: 1rem;
    cursor: pointer;
  }

  .pagination-wrapper > *:not(:last-child) {
    margin-right: 1rem;
  }

  span {
    font-size: 1.2rem;
  }

  .inactive {
    background-color: #111;
    cursor: not-allowed;
  }
</style>
