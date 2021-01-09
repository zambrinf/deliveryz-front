export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUri: string;
};

export type OrderLocationData = {
  latitude: number;
  longitude: number;
  address: string;
};

export type Place = {
  label?: string;
  value?: string;
  position: {
    lat: number;
    lng: number;
  };
};
