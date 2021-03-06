<script>
  export let character;
</script>

<div class="character">
  <p>Name: <span>{character.name || "-"}</span></p>
  <p>Gender: <span>{character.gender || "-"}</span></p>
  <p>Culture: <span>{character.culture || "-"}</span></p>
  <p>
    Aliases: {#each character.aliases as alias}
      <span>{alias}</span>
    {/each}
  </p>
  <p>Played By: <span>{character.playedBy}</span></p>
</div>

<style>
  .character {
    padding: 1rem;
  }
</style>
