import { LANGUAGE } from "../../constant/url";

export const navigation = [
  { name: LANGUAGE === "he" ? "דף הבית" : "Home page", href: "home", current: false },
  { name: LANGUAGE === "he" ? "תוכניות טלוויזיה" : "TV Shows", href: "tv", current: false },
  { name: LANGUAGE === "he" ? "סרטים" : "Movies", href: "movies", current: false },
  { name: LANGUAGE === "he" ? "חדשים ופופולריים" : "New & Popular", href: "#/new-end-popular", current: false },
  { name: LANGUAGE === "he" ? "הרשימה שלי" : "My list", href: "my-list", current: false },
  { name: "Shop", href: "shop/promo", current: false },
];
