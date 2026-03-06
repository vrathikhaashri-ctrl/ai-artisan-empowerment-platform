import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { LandingPage } from "./pages/LandingPage";
import { AnalyzePage } from "./pages/AnalyzePage";
import { LearnPage } from "./pages/LearnPage";
import { BrandPage } from "./pages/BrandPage";
import { SupportPage } from "./pages/SupportPage";
import { StoriesPage } from "./pages/StoriesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: LandingPage },
      { path: "analyze", Component: AnalyzePage },
      { path: "learn", Component: LearnPage },
      { path: "brand", Component: BrandPage },
      { path: "support", Component: SupportPage },
      { path: "stories", Component: StoriesPage },
    ],
  },
]);
