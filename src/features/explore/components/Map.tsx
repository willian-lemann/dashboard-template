import "mapbox-gl/dist/mapbox-gl.css";

import { appConsts } from "@/utils/constants/app-consts";
import ReactMap, { ViewState, Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import { useEffect, useState } from "react";
import { Loading } from "@/components/Loading";
import { HeartIcon, Home } from "lucide-react";
import { Property } from "@/features/property/types/property";
import Image from "next/image";
import { PropertyCard } from "@/features/property/components/PropertyCard";
import { PropertyItem } from "./PropertyItem";

type MapProps = {
  propertiesResult: Property[];
  isLoading: boolean;
};

export function Map({ isLoading, propertiesResult }: MapProps) {
  const [selectedLocation, setSelectedLocation] = useState<Property | null>(
    null
  );

  const propertiesCoords = propertiesResult?.map((property) => ({
    latitude: property.latitude,
    longitude: property.longitude,
  }));

  const center = getCenter(propertiesCoords);

  let centerCoords = {
    latitude: 18,
    longitude: 18,
  };

  const [viewState, setViewState] = useState<Partial<ViewState>>({
    latitude: centerCoords.latitude,
    longitude: centerCoords.longitude,
    zoom: 13,
  });

  useEffect(() => {
    if (!isLoading && center) {
      setViewState({
        latitude: center.latitude,
        longitude: center.longitude,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  console.log(selectedLocation);
  return (
    <ReactMap
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      mapboxAccessToken={appConsts.mapboxAccessToken}
      mapStyle={appConsts.mapboxStyleURL}
    >
      {isLoading ? (
        <div className="flex items-center flex-col z-50 h-full justify-center gap-2">
          <Loading className="h-10 w-10 text-zinc-500" />
          <p className="z-50 text-base text-zinc-500">
            Carregando propriedades no mapa...
          </p>
        </div>
      ) : (
        propertiesResult?.map((property) => (
          <div key={property.longitude}>
            <Marker
              anchor="center"
              longitude={property.longitude}
              latitude={property.latitude}
              offset={[0, 0]}
            >
              <Home
                className="text-primary w-10 h-10"
                aria-label="push-pin"
                onClick={() => setSelectedLocation(property)}
              />
            </Marker>

            {selectedLocation?.id === property.id ? (
              <Popup
                anchor="bottom"
                offset={20}
                className="cursor-pointer list-none animate-fadeIn"
                latitude={property.latitude}
                longitude={property.longitude}
                onClose={() => setSelectedLocation(null)}
                closeOnClick={false}
                closeButton={true}
                closeOnMove
              >
                <div className="rounded-t-md ">
                  <div>
                    <Image
                      src={property.photos[0]}
                      alt="Foto da propriedade"
                      width={300}
                      height={100}
                      className="rounded-t-md"
                    />
                  </div>

                  <PropertyCard.HeaderIcon
                    className="left-4 top-2 bg-white text-black flex items-center justify-center rounded-full"
                    onClick={() => {}}
                    icon={HeartIcon}
                  />

                  <PropertyCard.Content property={property} className="py-4" />
                </div>
                {/* <PropertyCard.Root className="bg-white">
                  <PropertyCard.Header images={property.photos} className="" />
                  <PropertyCard.Content property={property} />
                </PropertyCard.Root> */}
              </Popup>
            ) : (
              false
            )}
          </div>
        ))
      )}
    </ReactMap>
  );
}
