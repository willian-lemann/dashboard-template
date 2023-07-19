export const appConsts = {
  appURL: process.env.NEXT_PUBLIC_APP_URL,
  apiURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  websiteCDN: process.env.NEXT_PUBLIC_WEBSITE_CDN,
  cookieKey: "_lat",
  mapboxAccessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
  mapboxStyleURL: process.env.NEXT_PUBLIC_MAPBOX_STYLE_URL,
};

export const pagesURLConsts = {
  home: "/",
  login: "/login",
  signup: "/signup",
  onboarding: "/onboarding",
  dashboard: "/dashboard",
  explore: "/explore",
  "explore-map": "/explore-map",
  profile: "/profile",
  documents: "/documentacao",
  wishlist: "/wishlist",
  help: "/ajuda",
  cart: "/compras",
  terms: "/termos",
  privacy: "/privacidade",
  about: "/sobre",
};
