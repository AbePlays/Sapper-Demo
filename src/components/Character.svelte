<script>
  export let obj;

  import { normalize } from "../utility";
</script>

<p>Name: <span>{obj.name || "-"}</span></p>
<p>Gender: <span>{obj.gender || "-"}</span></p>
<p>Culture: <span>{obj.culture || "-"}</span></p>
<p>
  Aliases: <span>{normalize(obj.aliases) || "-"}</span>
</p>
<p>Played By: <span>{normalize(obj.playedBy) || "-"}</span></p>

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
