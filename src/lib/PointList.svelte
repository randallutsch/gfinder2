<script lang="ts">
  type Point = {
    name: string;
    buffer: number;
    unit: string;
  };

  export let pointList: Array<Point>;
</script>

<ul>
  {#each pointList as point}
    <li>{point.name} - {point.buffer} {point.unit}</li>
  {/each}
</ul>
