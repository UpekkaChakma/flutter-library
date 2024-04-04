import Icon1 from "@/assets/side-nav-icons/icon-0.svg";
import Icon2 from "@/assets/side-nav-icons/icon-1.svg";
import Icon3 from "@/assets/side-nav-icons/icon-2.svg";
import Icon4 from "@/assets/side-nav-icons/icon-3.svg";
import Icon5 from "@/assets/side-nav-icons/icon-4.svg";
import Icon6 from "@/assets/side-nav-icons/icon-5.svg";

import Template1 from "@/assets/templates/template-1.webp";
import Template2 from "@/assets/templates/template-2.webp";
import Template3 from "@/assets/templates/template-3.webp";
import Template4 from "@/assets/templates/template-4.webp";
import Template5 from "@/assets/templates/template-5.webp";
import Template6 from "@/assets/templates/template-6.webp";

import Article1 from "@/assets/articles/article-1.webp";
import Article2 from "@/assets/articles/article-2.webp";
import Article3 from "@/assets/articles/article-3.webp";

import Phone1 from "@/assets/screens/phone-1.webp";
import Phone2 from "@/assets/screens/phone-2.webp";
import Phone3 from "@/assets/screens/phone-3.webp";
import Phone4 from "@/assets/screens/phone-4.webp";
import Phone5 from "@/assets/screens/phone-5.webp";
import Phone6 from "@/assets/screens/phone-6.webp";
import Phone7 from "@/assets/screens/phone-7.webp";
import Phone8 from "@/assets/screens/phone-8.webp";
import Phone9 from "@/assets/screens/phone-9.webp";
import Phone10 from "@/assets/screens/phone-10.webp";

import logo from "@/assets/side-nav-icons/logo.webp";
import Twitter from "@/assets/footer/twitter.svg";
import LikedIn from "@/assets/footer/linked-in.svg";
import Instagram from "@/assets/footer/instagram.svg";
import Facebook from "@/assets/footer/facebook.svg";

const PAGE_HEADING = {
  title1: "Build your next App",
  title2: "even faster!",
  description:
    "Beautifully designed, expertly crafted Flutter components and templates, to jump start your projects and speed up your development process.",
};
const SIDE_MENU_ITEMS = [
  {
    title: "Discover",
    Logo: Icon1,
  },
  {
    title: "UI Kits",
    Logo: Icon2,
  },
  {
    title: "Screens",
    Logo: Icon3,
  },
  {
    title: "Articles",
    Logo: Icon4,
  },
  {
    title: "Become Sponsor",
    Logo: Icon5,
  },
  {
    title: "Hire Flutter Dev",
    Logo: Icon6,
  },
];

const SIDE_MENU_ACTIVE_USERS = [
  {
    page: "Sign in",
    activeUsersCount: 10,
  },
  {
    page: "Chat",
    activeUsersCount: 5,
  },
  {
    page: "Onboarding",
    activeUsersCount: 18,
  },
  {
    page: "E-commerce",
    activeUsersCount: 9,
  },
  {
    page: "Checkout",
    activeUsersCount: 10,
  },
  {
    page: "Error",
    activeUsersCount: 16,
  },
];

const TEMPLATES = [
  {
    title: "Foodly Restaurant App Template",
    img: Template1,
  },
  {
    title: "Flutter Learn Template",
    img: Template2,
  },
  {
    title: "Grocery Template",
    img: Template3,
  },
  {
    title: "Chat UI Template",
    img: Template4,
  },
  {
    title: "Shop Template",
    img: Template5,
  },
  {
    title: "Todo Kit Template",
    img: Template6,
  },
];

const ARTICLES = [
  {
    title: "Learn Flutter Animation",
    img: Article1,
  },
  {
    title: "Onboarding Screen with Carousel Animation Dots",
    img: Article2,
  },
  {
    title: "Parallax scroll effect with PageView in Flutter",
    img: Article3,
  },
];

const SCREENS_FILTERS_LIST = [
  "All",
  "New",
  "Popular",
  "Onboarding",
  "Auth",
  "Shop",
  "Chat",
  "Top Verification",
  "Dashboard",
  "Food",
  "Restaurant",
  "Fitness",
];

const SCREENS_IMAGES_LIST = [
  Phone1,
  Phone2,
  Phone3,
  Phone4,
  Phone5,
  Phone6,
  Phone7,
  Phone8,
  Phone9,
  Phone10,
];

const FOOTER = {
  logo,
  about:
    "Beautifully designed, expertly crafted Flutter components and templates, to jump start your projects and speed up your development process.",
  socialIcons: [
    { title: "Twitter", icon: Twitter },
    { title: "LikedIn", icon: LikedIn },
    { title: "Instagram", icon: Instagram },
    { title: "Facebook", icon: Facebook },
  ],
  navLink1: {
    title: "Explore",
    links: ["Blog", "Templates", "SCreens"],
  },
  navLink2: {
    title: "Support",
    links: ["Pricing", "Become a sponsor", "Hire Top Flutter Devs"],
  },
  copyright: "Copyright 2024 TheFlutterLibrary, All rights reserved",
  privacy: "Privacy Policy | Terms and Conditions | Cookie Policy",
};

export {
  PAGE_HEADING,
  SIDE_MENU_ITEMS,
  SIDE_MENU_ACTIVE_USERS,
  TEMPLATES,
  ARTICLES,
  SCREENS_FILTERS_LIST,
  SCREENS_IMAGES_LIST,
  FOOTER,
};
