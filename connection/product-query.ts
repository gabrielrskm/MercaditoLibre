interface Products {
   id: number;
   name: string;
   description: string;
   price: number;
   imageUrl: string;
   stock?: boolean;
   featured?:boolean
}

export function getProductList(quantity: number = 0): Products[] {
   return [
      {
         id: 1,
         name: "Product 1",
         description: "Description 1",
         price: 100,
         imageUrl: "https://picsum.photos/500/500",
         stock: true,
      },
      {
         id: 2,
         name: "Product 2",
         description: "Description 2",
         price: 200,
         imageUrl: "https://picsum.photos/500/500",
         stock: true,
      },
      {
         id: 3,
         name: "Product 3",
         description: "Description 3",
         price: 300,
         imageUrl: "https://picsum.photos/500/500",
         stock: true,
      },
      {
         id: 4,
         name: "Product 4",
         description: "Description 4",
         price: 400,
         imageUrl: "https://picsum.photos/500/500",
         stock: true,
         featured: true
      },
      {
         id: 5,
         name: "Product 5",
         description: "Description 5",
         price: 500,
         imageUrl: "https://picsum.photos/id/60/1920/1200",
         stock: true,
         featured: true
      },
   ];
}

export function getProductById(id: number): Products | null {
   const products = getProductList();
   return products.find(product => product.id === id) || null;
}

export function getProductByName(name: string): Products | null {
   const products = getProductList();
   return products.find(product => product.name.toLowerCase() === name.toLowerCase()) || null;
}

export function getProductByPrice(price: number): Products[] {
   const products = getProductList();
   return products.filter(product => product.price === price);
}

export function getProductByStock(stock: boolean): Products[] {
   const products = getProductList();
   return products.filter(product => product.stock === stock);
}

export function getProductFeatured(): Products[] {
   const products = getProductList();
   return products.filter(product => product.stock === true).slice(0, 3);
}