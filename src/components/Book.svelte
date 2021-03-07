<script>
  export let obj;
  import { normalize } from "../utility";
</script>

<p>Name: <span>{obj.name || "-"}</span></p>
<p>Number of Pages: <span>{obj.numberOfPages || "-"}</span></p>
<p>
  Date Released: <span
    >{new Date(obj.released).toLocaleDateString() || "-"}</span
  >
</p>
<p>
  Author(s): <span>{normalize(obj.authors) || "-"}</span>
</p>

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
