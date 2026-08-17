"use client";
import  { createRoute , createRootRoute , createRouter, Outlet } from "@tanstack/react-router";
import { lazy , Suspense } from "react";

const rootRoute = createRootRoute({
    component: () => <Outlet />
});

const Frontend = lazy(() => import("../components/frontend/frontend"));
const FrontendDashboard = lazy(() => import("../components/frontendDashboard/frontendDashbaord"));
const LoginUser = lazy(() => import("../features/auth/pages/login"));
const RegisterUser = lazy(() => import("../features/auth/pages/register"));
const Pricing = lazy(() => import("../components/pricing/pricing"));
const WizardHero = lazy(() => import("../components/wizard/wizardHero"));
const Services = lazy(() => import("../components/frontend/components/services/services"));
const About = lazy(() => import("../components/frontend/components/about/about"));



const  FrontendRoute = createRoute({
    path : "/",
    getParentRoute : () => rootRoute,
    
    component : () => (
        <Suspense fallback={<div>Loading...</div>}>
            <Frontend />
        </Suspense>
    )
}) 


const  LoginUserRoute = createRoute({
    path : "/login",
    getParentRoute : () => rootRoute,
    
    component : () => (
        <Suspense fallback={<div>Loading...</div>}>
            <LoginUser />
        </Suspense>
    )
}) 


const  RegisterUserRoute = createRoute({
    path : "/register",
    getParentRoute : () => rootRoute,
    
    component : () => (
        <Suspense fallback={<div>Loading...</div>}>
            <RegisterUser />
        </Suspense>
    )
}) 


const  FrontendDashboardRoute = createRoute({
    path : "/dashboard",
    getParentRoute : () => rootRoute,
    
    component : () => (
        <Suspense fallback={<div>Loading...</div>}>
            <FrontendDashboard />
        </Suspense>
    )
}) 

const PricingRout = createRoute({
  
    getParentRoute: () => rootRoute,
  path: "/pricing",
    component: () => (
        <Suspense fallback={<div>Loading...</div>}>
            <Pricing />
        </Suspense>
    )
})

const WizardRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/wizard",
    component: () => (
        <Suspense fallback={<div>Loading...</div>}>
            <WizardHero />
        </Suspense>
    )
});

const aboutRoute = createRoute({ 
    getParentRoute: () => rootRoute,
    path: "/about",
    component: () => (
        <Suspense fallback={<div>Loading...</div>}>
            <About />
        </Suspense>
    )
})

const servicesRoute = createRoute({ 
    getParentRoute: () => rootRoute,
    path: "/services",
    component: () => (
        <Suspense fallback={<div>Loading...</div>}>
            <Services />
        </Suspense>
    )
})

const Route = rootRoute.addChildren([
    FrontendRoute,
    LoginUserRoute,
    RegisterUserRoute,
    FrontendDashboardRoute,
    PricingRout,
    WizardRoute,
    aboutRoute, 
    servicesRoute
])

const Router = createRouter({ 
    routeTree: Route,
    defaultNotFoundComponent: () => {
        return (
            <div className="min-h-screen w-full flex items-center justify-center bg-[#050505] text-white">
                <p className="text-xl">404 - Not Found</p>
            </div>
        )
    }
});

export default Router;