import { Location } from "@/types/report";
import {
  GoogleMap,
  Libraries,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";
import { useCallback, useRef, useState } from "react";
import Geocode from "react-geocode";

interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
console.log(GOOGLE_MAPS_API_KEY);

const libraries: Libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

export const LocationPicker = ({
  onLocationSelect,
  initialLocation = {
    latitude: -34.6037,
    longitude: -58.3816,
  },
}: {
  onLocationSelect: (location: Location) => void;
  initialLocation?: { latitude: number; longitude: number };
}) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [markerPosition, setMarkerPosition] = useState({
    lat: initialLocation.latitude,
    lng: initialLocation.longitude,
  });

  const mapRef = useRef<google.maps.Map | null>(null);

  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const handleMapClick = useCallback(
    (event: google.maps.MapMouseEvent) => {
      const lat = event.latLng?.lat();
      const lng = event.latLng?.lng();

      if (lat && lng) {
        setMarkerPosition({ lat, lng });

        Geocode.setKey(GOOGLE_MAPS_API_KEY);
        Geocode.fromLatLng(lat, lng)
          .then((response) => {
            const address = response.results[0].formatted_address;
            const addressComponents = response.results[0].address_components;

            const cityComponent = addressComponents.find(
              (component: AddressComponent) =>
                component.types.includes("locality")
            );
            const postalCodeComponent = addressComponents.find(
              (component: AddressComponent) =>
                component.types.includes("postal_code")
            );

            onLocationSelect({
              latitude: lat,
              longitude: lng,
              address: address,
              city: cityComponent ? cityComponent.long_name : "",
              postalCode: postalCodeComponent
                ? postalCodeComponent.long_name
                : "",
            });
          })
          .catch((error) => {
            console.error("Error al obtener la dirección:", error);
          });
      }
    },
    [onLocationSelect]
  );

  if (loadError) return <div>Error cargando mapas</div>;
  if (!isLoaded) return <div>Cargando mapas...</div>;

  return (
    <div className="space-y-4">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={markerPosition}
        onClick={handleMapClick}
        onLoad={onMapLoad}
      >
        <Marker
          position={markerPosition}
          draggable={true}
          onDragEnd={(event) => {
            const lat = event.latLng?.lat();
            const lng = event.latLng?.lng();
            if (lat && lng) {
              setMarkerPosition({ lat, lng });
            }
          }}
        />
      </GoogleMap>
      <div className="text-sm text-gray-600">
        Haz clic en el mapa o arrastra el marcador para seleccionar la ubicación
      </div>
    </div>
  );
};
