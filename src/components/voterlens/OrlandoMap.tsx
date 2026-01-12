"use client";

import { Card } from "@/components/ui/card";
import { Map, MapControls, useMap } from "@/components/ui/map";
import type MapLibreGL from "maplibre-gl";
import { useEffect, useId } from "react";
import { VoterPointsLayer } from "./VoterPointsLayer";

type MapGeoJSONProps = {
  /** URL to fetch GeoJSON from or GeoJSON object */
  data: string | GeoJSON.FeatureCollection | GeoJSON.Feature;
  /** Fill color for polygons (default: VoterLens blue) */
  fillColor?: string;
  /** Fill opacity from 0 to 1 (default: 0.3) */
  fillOpacity?: number;
  /** Line color for boundaries (default: VoterLens red) */
  lineColor?: string;
  /** Line width in pixels (default: 2) */
  lineWidth?: number;
};

function MapGeoJSON({
  data,
  fillColor = "#2B3B64",
  fillOpacity = 0.3,
  lineColor = "#B82221",
  lineWidth = 2,
}: MapGeoJSONProps) {
  const { map, isLoaded } = useMap();
  const id = useId();
  const sourceId = `geojson-source-${id}`;
  const fillLayerId = `geojson-fill-${id}`;
  const lineLayerId = `geojson-line-${id}`;

  // Add source and layers on mount
  useEffect(() => {
    if (!isLoaded || !map) return;

    // Add GeoJSON source
    map.addSource(sourceId, {
      type: "geojson",
      data: typeof data === "string" ? data : data,
    });

    // Add fill layer for polygons
    map.addLayer({
      id: fillLayerId,
      type: "fill",
      source: sourceId,
      paint: {
        "fill-color": fillColor,
        "fill-opacity": fillOpacity,
      },
    });

    // Add line layer for boundaries
    map.addLayer({
      id: lineLayerId,
      type: "line",
      source: sourceId,
      paint: {
        "line-color": lineColor,
        "line-width": lineWidth,
      },
    });

    return () => {
      try {
        if (map.getLayer(lineLayerId)) map.removeLayer(lineLayerId);
        if (map.getLayer(fillLayerId)) map.removeLayer(fillLayerId);
        if (map.getSource(sourceId)) map.removeSource(sourceId);
      } catch {
        // ignore errors during cleanup
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, map, sourceId]);

  // Update source data when data changes (for non-URL data)
  useEffect(() => {
    if (!isLoaded || !map || typeof data === "string") return;

    const source = map.getSource(sourceId) as MapLibreGL.GeoJSONSource;
    if (source) {
      source.setData(data);
    }
  }, [isLoaded, map, data, sourceId]);

  // Update paint properties when they change
  useEffect(() => {
    if (!isLoaded || !map) return;

    if (map.getLayer(fillLayerId)) {
      map.setPaintProperty(fillLayerId, "fill-color", fillColor);
      map.setPaintProperty(fillLayerId, "fill-opacity", fillOpacity);
    }

    if (map.getLayer(lineLayerId)) {
      map.setPaintProperty(lineLayerId, "line-color", lineColor);
      map.setPaintProperty(lineLayerId, "line-width", lineWidth);
    }
  }, [
    isLoaded,
    map,
    fillLayerId,
    lineLayerId,
    fillColor,
    fillOpacity,
    lineColor,
    lineWidth,
  ]);

  return null;
}

export function OrlandoMap() {
  // Orlando city bounds - approximate bounding box with padding
  // Southwest corner: [lng, lat], Northeast corner: [lng, lat]
  const orlandoBounds: [[number, number], [number, number]] = [
    [-81.6579, 28.2277], // Southwest
    [-80.9579, 28.7277], // Northeast
  ];

  const center: [number, number] = [-81.3079, 28.4777];

  //   console.log("Orlando Map Configuration:");
  //   console.log("Center:", center);
  //   console.log("Southwest:", orlandoBounds[0]);
  //   console.log("Northeast:", orlandoBounds[1]);

  return (
    <Card className="h-[600px] p-0 overflow-hidden border-2">
      <Map
        center={center}
        zoom={10}
        minZoom={10}
        maxZoom={20}
        maxBounds={orlandoBounds}
      >
        <MapGeoJSON
          data="/data/Orlando_Political_City_Limits.geojson"
          fillColor="#2B3B64"
          fillOpacity={0.2}
          lineColor="#B82221"
          lineWidth={3}
        />
        <VoterPointsLayer />
        <MapControls
          position="bottom-right"
          showZoom={true}
          showCompass={true}
          showFullscreen={true}
        />
      </Map>
    </Card>
  );
}
