<script lang="ts">
  import BufferEntry from "./lib/BufferEntry.svelte";
  import PointList from "./lib/PointList.svelte";
  import GMap from "./lib/GMap.svelte";

  let buffer = 1;
  let name = "";
  let unit = "miles";
  let list = [];

  const handleClick = (e: CustomEvent<any>): void => {
    // console.log(e.detail.lat);
    list = [
      ...list,
      {
        unit: unit,
        name: name,
        buffer: buffer,
      },
    ];
  };
</script>

<div class="header-bar">
  <BufferEntry
      bind:bufferValue={buffer}
      bind:nameValue={name}
      bind:unitValue={unit}
    />
</div>
<div class="point-list">
  <PointList bind:pointList={list} />
</div>
<div class="map">
  <GMap on:mapClicked={handleClick} bind:buffer bind:units={unit} />
</div>

<style>
  .header-bar {
    grid-area: header;
    padding-top: 10px;
  }

  .map {
    grid-area: map;
  }

  .point-list {
    grid-area: list;
  }
</style>
