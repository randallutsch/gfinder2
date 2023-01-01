<script lang="ts">
  import "@arcgis/core/assets/esri/themes/light/main.css";

  import * as webMercatorUtils from "@arcgis/core/geometry/support/webMercatorUtils";
  import * as geometryEngine from "@arcgis/core/geometry/geometryEngine";

  import { createEventDispatcher } from "svelte";

  export let buffer;
  export let units;

  const dispatch = createEventDispatcher();

  const createMap = async (domNode: HTMLDivElement): any => {
    const MapView =  (await import("@arcgis/core/views/MapView")).default;
    const GraphicsLayer = (await import("@arcgis/core/layers/GraphicsLayer")).default;
    const Locate = (await import("@arcgis/core/widgets/Locate")).default;

    const graphicsLayer = new GraphicsLayer();

    const view = new MapView({
      container: domNode,
      map: {
        basemap: "streets-vector",
        layers: [graphicsLayer],
      },
      zoom: 15,
      center: [-90.1928, 38.6226], // longitude, latitude
    });

    let locate = new Locate({
      view: view,
      popupEnabled: false,
    });

    view.ui.add(locate, "top-left");

    view.when(() => {
      locate.locate();
    });

    view.on("click", (e) => {
      let mp = e.mapPoint;
      let latitude = mp.latitude;
      let longitude = mp.longitude;
      dispatch("mapClicked", {
        lat: latitude,
        long: longitude,
      });

      addBufferToMap(e, graphicsLayer, view);
    });
  };

  const addBufferToMap = async (
    e: __esri.ViewClickEvent,
    graphicsLayer: GraphicsLayer,
    view: __esri.MapView
  ) => {
    const Graphic = (await import("@arcgis/core/Graphic")).default;
    const Polygon = (await import("@arcgis/core/geometry/Polygon")).default;
    const SimpleFillSymbol = (await import("@arcgis/core/symbols/SimpleFillSymbol")).default;
    
    const simpleFillSymbol = new SimpleFillSymbol({
      color: [227, 139, 79, 0.2], // Orange, opacity 80%
      outline: {
        color: [0, 0, 0, 0.5],
        width: 1,
      },
    });

    const buff = geometryEngine.geodesicBuffer(e.mapPoint, buffer, units);

    const polygon = new Polygon({
      rings: buff.rings,
    });

    const projected = webMercatorUtils.webMercatorToGeographic(polygon);

    const graphic = new Graphic({
      geometry: projected,
      symbol: simpleFillSymbol,
    });

    graphicsLayer.add(graphic);
    view.goTo(projected.extent);
  };
</script>

<div class="view" use:createMap />

<style>
  .view {
    height: 100%;
    width: 100%;
  }
</style>
