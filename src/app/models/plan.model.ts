export interface SubscriptionPlan {
  title: string;
  description: string;
  price: number;
  features: string[];
  image: {
    url: string;
    alt: string;
  };
}
