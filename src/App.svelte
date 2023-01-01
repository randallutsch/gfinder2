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

<div class="grid-container">
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
  <div />
</div>

<style>
  .grid-container {
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-rows: 50px auto;
    grid-template-columns: auto 1fr*;
    grid-template-areas:
      "header header"
      "map list";
  }

  .header-bar {
    padding-top: 10px;
    grid-area: "header";
    margin: 0 auto;
    text-align: center;
    vertical-align: middle;
  }

  .map {
    grid-area: "map";
  }

  .point-list {
    grid-area: "list";
  }
</style>
