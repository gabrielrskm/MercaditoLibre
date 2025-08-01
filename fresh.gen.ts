// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $checkout from "./routes/checkout.tsx";
import * as $detail_id_ from "./routes/detail/[id].tsx";
import * as $index from "./routes/index.tsx";
import * as $login from "./routes/login.tsx";
import * as $products from "./routes/products.tsx";
import * as $register from "./routes/register.tsx";
import * as $Button from "./islands/Button.tsx";
import * as $Carousel from "./islands/Carousel.tsx";
import * as $CartButtonNumber from "./islands/CartButtonNumber.tsx";
import * as $CartSideBarItem from "./islands/CartSideBarItem.tsx";
import * as $ThemeScript from "./islands/ThemeScript.tsx";
import * as $ToggleTheme from "./islands/ToggleTheme.tsx";
import * as $UserMenu from "./islands/UserMenu.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/joke.ts": $api_joke,
    "./routes/checkout.tsx": $checkout,
    "./routes/detail/[id].tsx": $detail_id_,
    "./routes/index.tsx": $index,
    "./routes/login.tsx": $login,
    "./routes/products.tsx": $products,
    "./routes/register.tsx": $register,
  },
  islands: {
    "./islands/Button.tsx": $Button,
    "./islands/Carousel.tsx": $Carousel,
    "./islands/CartButtonNumber.tsx": $CartButtonNumber,
    "./islands/CartSideBarItem.tsx": $CartSideBarItem,
    "./islands/ThemeScript.tsx": $ThemeScript,
    "./islands/ToggleTheme.tsx": $ToggleTheme,
    "./islands/UserMenu.tsx": $UserMenu,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
