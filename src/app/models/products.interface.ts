// interface Dimensions {
//   width: number;
//   height: number;
//   depth: number;
// }

// interface Review {
//   rating: number;
//   comment: string;
//   date: string;
//   reviewerName: string;
//   reviewerEmail: string;
// }
// export interface Product {
//   id: number;
//   title: string;
//   description: string;
//   category: string;
//   price: number;
//   discountPercentage: number;
//   rating: number;
//   stock: number;
//   tags: string[];
//   brand: string;
//   sku: string;
//   weight: number;
//   dimensions: Dimensions;
//   warrantyInformation: string;
//   shippingInformation: string;
//   availabilityStatus: string;
//   reviews: Review[];
// }

// interface ProductsResponse {
//   products: Product[];
// }

// Interface for the dimensions of a product
interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

// Interface for a review of a product
interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

// Interface for the metadata of a product
interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

// Interface for a single product
export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand?: string; // Optional field (not all products have a brand)
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
}

// Interface for the entire JSON data structure
interface ProductData {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
