export type MenuType = {
    id: string;
    slug: string;
    title: string;
    desc?: string;
    img: string;
    color: string;
  }[];
  
  interface User {
    id: string; // assuming that the id is a string, adjust it according to your needs
    name?: string;
    email?: string;
    emailVerified?: string; // Assuming emailVerified is a timestamp represented as a string
    image?: string;
  }
  
  export type ProductType = {
    id: string;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number }[];
  };
  
  export type OrderType = {
    id: string;
    userEmail: string;
    user: {
      email: string;
      phoneNumber: string;
    };
    phoneNumber : string;
    price: number;
    products: CartItemType[];
    status: string;
    createdAt: Date;
    intent_id?: String;
  };
  
  export type CartItemType = {
    id: string;
    title: string;
    img?: string;
    price: number;
    optionTitle?: string;
    quantity: number;
  };
  
  export type CartType = {
    products: CartItemType[];
    totalItems: number;
    totalPrice: number;
    user : User | null
  };
  
  export type ActionTypes = {
    addToCart:(item:CartItemType)=> void;
    removeFromCart:(item:CartItemType)=> void;
    clearCart:()=> void;
    updateUser:(item : User | null)=>void;
  }