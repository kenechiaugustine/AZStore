export interface IProduct {
  id: string;
  imageUrl: string;
  title: string;
  category?: string;
  productLink?: string;
  brand?: string;
  description?: string;
  rating?: number;
  reviewCount?: number | undefined;
  price?: number;
  listPrice?: number;
  discountPercentage?: number;
  isLimitedTimeDeal?: boolean;
  isAmazonChoice?: boolean;
  deliveryDate?: string;
  shippingCost?: number;
  stockLevel?: number;
  stockMessage?: string;
  hasSustainabilityFeature?: boolean;
}
