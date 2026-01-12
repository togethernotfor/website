"use client";

import { MapPopup, useMap } from "@/components/ui/map";
import type MapLibreGL from "maplibre-gl";
import { useTheme } from "next-themes";
import { useEffect, useId, useState } from "react";
import type { GeoJSON } from "geojson";

type VoterData = {
  latitude: number;
  longitude: number;
  party_affiliation?: string;
  geocode_status?: string;
};

type PopupData = {
  address: string;
  city: string;
  state: string;
  zipcode: string;
  latitude: number;
  longitude: number;
  party_affiliation?: string;
};

function PartyColoredClusterLayer({
  data,
  onPointClick,
}: {
  data: GeoJSON.FeatureCollection<GeoJSON.Point>;
  onPointClick: (
    feature: GeoJSON.Feature<GeoJSON.Point>,
    coordinates: [number, number]
  ) => void;
}) {
  const { map, isLoaded } = useMap();
  const { resolvedTheme } = useTheme();
  const id = useId();
  const sourceId = `voter-cluster-source-${id}`;
  const clusterLayerId = `voter-clusters-${id}`;
  const clusterCountLayerId = `voter-cluster-count-${id}`;
  const unclusteredLayerId = `voter-unclustered-point-${id}`;

  // Theme-aware colors
  const isDark = resolvedTheme === "dark";
  const primaryColor = isDark ? "#6B8FC7" : "#2B3B64";
  const accentColor = "#B82221";

  // Party colors
  const demColor = primaryColor; // Blue
  const repColor = accentColor; // Red
  const otherColor = "#22c55e"; // Green

  // Add source and layers on mount
  useEffect(() => {
    if (!isLoaded || !map) return;

    // Add clustered GeoJSON source
    map.addSource(sourceId, {
      type: "geojson",
      data,
      cluster: true,
      clusterMaxZoom: 14,
      clusterRadius: 50,
    });

    // Add cluster circles layer
    map.addLayer({
      id: clusterLayerId,
      type: "circle",
      source: sourceId,
      filter: ["has", "point_count"],
      paint: {
        "circle-color": [
          "step",
          ["get", "point_count"],
          primaryColor,
          100,
          isDark ? "#2B3B64" : "#6B8FC7",
          750,
          accentColor,
        ],
        "circle-radius": ["step", ["get", "point_count"], 20, 100, 30, 750, 40],
      },
    });

    // Add cluster count text layer
    map.addLayer({
      id: clusterCountLayerId,
      type: "symbol",
      source: sourceId,
      filter: ["has", "point_count"],
      layout: {
        "text-field": "{point_count_abbreviated}",
        "text-size": 12,
      },
      paint: {
        "text-color": "#fff",
      },
    });

    // Add unclustered point layer with party-based coloring
    map.addLayer({
      id: unclusteredLayerId,
      type: "circle",
      source: sourceId,
      filter: ["!", ["has", "point_count"]],
      paint: {
        "circle-color": [
          "match",
          ["get", "party_affiliation"],
          "DEM",
          demColor,
          "REP",
          repColor,
          otherColor, // default for NPA and others
        ],
        "circle-radius": 6,
        "circle-stroke-width": 1,
        "circle-stroke-color": "#ffffff",
      },
    });

    return () => {
      try {
        if (map.getLayer(clusterCountLayerId))
          map.removeLayer(clusterCountLayerId);
        if (map.getLayer(unclusteredLayerId))
          map.removeLayer(unclusteredLayerId);
        if (map.getLayer(clusterLayerId)) map.removeLayer(clusterLayerId);
        if (map.getSource(sourceId)) map.removeSource(sourceId);
      } catch {
        // ignore
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, map, sourceId]);

  // Update source data when data prop changes
  useEffect(() => {
    if (!isLoaded || !map) return;

    const source = map.getSource(sourceId) as MapLibreGL.GeoJSONSource;
    if (source) {
      source.setData(data);
    }
  }, [isLoaded, map, data, sourceId]);

  // Update colors when theme changes
  useEffect(() => {
    if (!isLoaded || !map) return;

    if (map.getLayer(clusterLayerId)) {
      map.setPaintProperty(clusterLayerId, "circle-color", [
        "step",
        ["get", "point_count"],
        primaryColor,
        100,
        isDark ? "#2B3B64" : "#6B8FC7",
        750,
        accentColor,
      ]);
    }

    if (map.getLayer(unclusteredLayerId)) {
      map.setPaintProperty(unclusteredLayerId, "circle-color", [
        "match",
        ["get", "party_affiliation"],
        "DEM",
        demColor,
        "REP",
        repColor,
        otherColor,
      ]);
    }
  }, [
    isLoaded,
    map,
    clusterLayerId,
    unclusteredLayerId,
    primaryColor,
    accentColor,
    demColor,
    repColor,
    otherColor,
    isDark,
  ]);

  // Handle click events
  useEffect(() => {
    if (!isLoaded || !map) return;

    // Cluster click handler - zoom into cluster
    const handleClusterClick = async (
      e: MapLibreGL.MapMouseEvent & {
        features?: MapLibreGL.MapGeoJSONFeature[];
      }
    ) => {
      const features = map.queryRenderedFeatures(e.point, {
        layers: [clusterLayerId],
      });
      if (!features.length) return;

      const feature = features[0];
      const clusterId = feature.properties?.cluster_id as number;
      const coordinates = (feature.geometry as GeoJSON.Point).coordinates as [
        number,
        number
      ];

      const source = map.getSource(sourceId) as MapLibreGL.GeoJSONSource;
      const zoom = await source.getClusterExpansionZoom(clusterId);
      map.easeTo({
        center: coordinates,
        zoom,
      });
    };

    // Unclustered point click handler
    const handlePointClick = (
      e: MapLibreGL.MapMouseEvent & {
        features?: MapLibreGL.MapGeoJSONFeature[];
      }
    ) => {
      if (!onPointClick || !e.features?.length) return;

      const feature = e.features[0];
      const coordinates = (feature.geometry as GeoJSON.Point).coordinates.slice() as [
        number,
        number
      ];

      // Handle world copies
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      onPointClick(
        feature as unknown as GeoJSON.Feature<GeoJSON.Point>,
        coordinates
      );
    };

    // Cursor style handlers
    const handleMouseEnterCluster = () => {
      map.getCanvas().style.cursor = "pointer";
    };
    const handleMouseLeaveCluster = () => {
      map.getCanvas().style.cursor = "";
    };
    const handleMouseEnterPoint = () => {
      map.getCanvas().style.cursor = "pointer";
    };
    const handleMouseLeavePoint = () => {
      map.getCanvas().style.cursor = "";
    };

    map.on("click", clusterLayerId, handleClusterClick);
    map.on("click", unclusteredLayerId, handlePointClick);
    map.on("mouseenter", clusterLayerId, handleMouseEnterCluster);
    map.on("mouseleave", clusterLayerId, handleMouseLeaveCluster);
    map.on("mouseenter", unclusteredLayerId, handleMouseEnterPoint);
    map.on("mouseleave", unclusteredLayerId, handleMouseLeavePoint);

    return () => {
      map.off("click", clusterLayerId, handleClusterClick);
      map.off("click", unclusteredLayerId, handlePointClick);
      map.off("mouseenter", clusterLayerId, handleMouseEnterCluster);
      map.off("mouseleave", clusterLayerId, handleMouseLeaveCluster);
      map.off("mouseenter", unclusteredLayerId, handleMouseEnterPoint);
      map.off("mouseleave", unclusteredLayerId, handleMouseLeavePoint);
    };
  }, [isLoaded, map, clusterLayerId, unclusteredLayerId, sourceId, onPointClick]);

  return null;
}

export function VoterPointsLayer() {
  const [voterData, setVoterData] = useState<
    GeoJSON.FeatureCollection<GeoJSON.Point> | null
  >(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPoint, setSelectedPoint] = useState<PopupData | null>(null);

  useEffect(() => {
    async function loadVoterData() {
      try {
        setLoading(true);
        setError(null);

        // Fetch the optimized GeoJSON file (compressed version served automatically by Vercel)
        const response = await fetch(
          "/data/orange-county-voters-geocoded.geojson"
        );
        
        if (!response.ok) {
          throw new Error(`Failed to fetch voter data: ${response.statusText}`);
        }

        // Parse GeoJSON directly - much faster than CSV parsing
        const geojsonData = await response.json();
        
        setVoterData(geojsonData);
      } catch (err) {
        console.error("Error loading voter data:", err);
        setError(
          err instanceof Error ? err.message : "Failed to load voter data"
        );
      } finally {
        setLoading(false);
      }
    }

    loadVoterData();
  }, []);

  // Show loading indicator
  if (loading) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50 pointer-events-none">
        <div className="bg-card border rounded-lg p-6 shadow-lg">
          <div className="flex flex-col items-center gap-3">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <p className="text-sm font-medium">Loading voter data...</p>
            <p className="text-xs text-muted-foreground">
              ~158,000 voter locations
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Show error message
  if (error) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50 pointer-events-none">
        <div className="bg-card border border-destructive rounded-lg p-6 shadow-lg max-w-md">
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="text-destructive text-2xl">⚠️</div>
            <p className="text-sm font-medium text-destructive">
              Failed to load voter data
            </p>
            <p className="text-xs text-muted-foreground">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!voterData || voterData.features.length === 0) {
    return null;
  }

  return (
    <>
      <PartyColoredClusterLayer
        data={voterData}
        onPointClick={(feature, coordinates) => {
          const props = feature.properties as any;
          setSelectedPoint({
            address: props.address || "Unknown",
            city: props.city || "Unknown",
            state: props.state || "Unknown",
            zipcode: props.zipcode || "Unknown",
            latitude: props.latitude || coordinates[1],
            longitude: props.longitude || coordinates[0],
            party_affiliation: props.party_affiliation,
          });
        }}
      />
      {selectedPoint && (
        <MapPopup
          longitude={selectedPoint.longitude}
          latitude={selectedPoint.latitude}
          onClose={() => setSelectedPoint(null)}
          closeButton={true}
          className="min-w-[250px]"
        >
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-sm">Address</p>
              <p className="text-sm text-muted-foreground">
                {selectedPoint.address}
              </p>
              <p className="text-sm text-muted-foreground">
                {selectedPoint.city}, {selectedPoint.state}{" "}
                {selectedPoint.zipcode}
              </p>
            </div>
            <div className="pt-2 border-t">
              <p className="font-semibold text-sm">Coordinates</p>
              <p className="text-xs text-muted-foreground font-mono">
                Lat: {selectedPoint.latitude.toFixed(6)}
              </p>
              <p className="text-xs text-muted-foreground font-mono">
                Lon: {selectedPoint.longitude.toFixed(6)}
              </p>
            </div>
            {selectedPoint.party_affiliation && (
              <div className="pt-2 border-t">
                <p className="font-semibold text-sm">Party Affiliation</p>
                <p className="text-sm text-muted-foreground">
                  {selectedPoint.party_affiliation}
                </p>
              </div>
            )}
          </div>
        </MapPopup>
      )}
    </>
  );
}
