import { lazy } from "react";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/
const About = lazy(() => import("../views/About.js"));
const Neonatal = lazy(() => import("../views/NeonatalExamination.js"));
const Immunization = lazy(() => import("../views/Immunization.js"));
const Graph = lazy(() => import("../views/Graph.js"));
const VisionStatus = lazy(() => import("../views/VisionStatus.js"));
const HearingStatus = lazy(() => import("../views/HearingStatus.js"));
const GrowthCheck = lazy(() => import("../views/GrowthCheck.js"));
const GrowthDetails = lazy(() => import("../views/GrowthDetails.js"));
const FullDetails = lazy(() => import("../views/FullDetails.js"));
const SignupForm = lazy(() => import("../views/SignupForm.js"));
const LoginForm = lazy(() => import("../views/LoginForm.js"));
const BabyDetailsForm = lazy(() => import("../views/BabyDetailsForm.js"));
const Home = lazy(() => import("../views/Home.js"));

/*****Routes******/
const ThemeRoutes = [
  {
    path: "/",element: <FullLayout />,
    children: [
      { path: "/Graph", element: <Graph /> },
      { path: "/Home", element: <Home /> },
      { path: "/login", element: <LoginForm /> },
      { path: "/signup", element: <SignupForm /> },
      { path: "/about", element: <About /> },
      { path: "/NeonatalExamination", element: <Neonatal /> },
      { path: "/immunization", element: <Immunization /> },
      { path: "/VisionStatus", element: <VisionStatus /> },
      { path: "/HearingStatus", element: <HearingStatus /> },
      { path: "/GrowthCheck", element: <GrowthCheck /> },
      { path: "/GrowthDetails", element: <GrowthDetails /> },
      { path: "/FullDetails", element: <FullDetails /> },
      { path: "/babyDetails", element: <BabyDetailsForm /> },
    ],
  },
];

export default ThemeRoutes;