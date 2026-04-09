import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./components/Layout";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

const Metodologia = lazy(() => import("./pages/Metodologia"));
const Cronograma = lazy(() => import("./pages/Cronograma"));
const Modulos = lazy(() => import("./pages/Modulos"));
const Ciclo1 = lazy(() => import("./pages/Ciclo1"));
const Ciclo2 = lazy(() => import("./pages/Ciclo2"));
const Ciclo3 = lazy(() => import("./pages/Ciclo3"));
const Ciclo4 = lazy(() => import("./pages/Ciclo4"));
const Ciclo5 = lazy(() => import("./pages/Ciclo5"));
const Simulados = lazy(() => import("./pages/Simulados"));
const LaboratorioIA = lazy(() => import("./pages/LaboratorioIA"));
const Sobre = lazy(() => import("./pages/Sobre"));
const NotFound = lazy(() => import("./pages/NotFound"));

function RouteFallback() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center font-accent text-xs tracking-[0.35em] text-muted-foreground">
      CARREGANDO…
    </div>
  );
}

function Router() {
  return (
    <Layout>
      <Suspense fallback={<RouteFallback />}>
        <Switch>
          <Route path={"/"} component={Home} />
          <Route path={"/metodologia"} component={Metodologia} />
          <Route path={"/cronograma"} component={Cronograma} />
          <Route path={"/modulos"} component={Modulos} />
          <Route path={"/ciclo1"} component={Ciclo1} />
          <Route path={"/ciclo2"} component={Ciclo2} />
          <Route path={"/ciclo3"} component={Ciclo3} />
          <Route path={"/ciclo4"} component={Ciclo4} />
          <Route path={"/ciclo5"} component={Ciclo5} />
          <Route path={"/simulados"} component={Simulados} />
          <Route path={"/laboratorio-ia"} component={LaboratorioIA} />
          <Route path={"/sobre"} component={Sobre} />
          <Route path={"/404"} component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
