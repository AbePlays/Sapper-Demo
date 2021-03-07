<script>
  export let obj;
</script>

<p>Name: <span>{obj.name || "-"}</span></p>
<p>Region: <span>{obj.region || "-"}</span></p>
<p>Coat of Arms: <span>{obj.coatOfArms || "-"}</span></p>

<style>
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
