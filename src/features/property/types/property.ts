export type TransactionStatus = "APPROVED" | "PENDING" | "PAYED";

export type Property = {
  id: string;
  name: string;
  price: number;
  photos: string[];
  isActive: boolean;
  description: string;
  squareMeters: number;
  numberOfRooms: number;
  parkingQuantity: number;
  bathroomQuantity: number;
  address: string;
  latitude: number;
  longitude: number;
  iptuValue: number;
  condoValue: number;
  createdAt: Date;
  status: TransactionStatus;
  isWishlist: boolean;
  features: Array<{ id: string; name: string }>;
  onwer: {
    id: string;
    name: string;
  };
};
