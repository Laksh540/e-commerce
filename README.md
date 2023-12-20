This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm i
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Monserrat, a custom Google Font.

## Folder Structure
`root` folder has following folder
- assets -- It  contains images and icons
- DummyData -- It contains the product data
- state  -- It contains the  Redux  files like store , provider ,reducer and action
- products -- It Next js route folder
- cart -- It is Next js route folder

## Flow
In browser user is First redirected from root route to `/products` route automatically.

In  the `/product` route user can select the product.

Rote get updated to `products/124` where  124 is the product it .

With the help of this id product data is populated fron the dummy data .

User can add the product to cart .

Products that are added to the cart are stored in the redux state .

By click on `go to cart `button user is redirected to  `/cart` route .

In this page user can remove the item from the cart and then finally place order .

When order is placed redux  state is cleared and user is redirected to the `/products` route .

In all the routes `Header` component always  shows cart icon where user can redirect to  `/cart`.




