import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Metodologia from "./pages/Metodologia";
import Cronograma from "./pages/Cronograma";
import Modulos from "./pages/Modulos";
import Ciclo1 from "./pages/Ciclo1";
import Ciclo2 from "./pages/Ciclo2";
import Ciclo3 from "./pages/Ciclo3";
import Ciclo4 from "./pages/Ciclo4";
import Ciclo5 from "./pages/Ciclo5";
import Simulados from "./pages/Simulados";
import Sobre from "./pages/Sobre";
import Layout from "./components/Layout";

function Router() {
  return (
    <Layout>
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
        <Route path={"/sobre"} component={Sobre} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
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
