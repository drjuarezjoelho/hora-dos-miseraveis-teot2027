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
import Simulados from "./pages/Simulados";
import Sobre from "./pages/Sobre";
import Ciclo2 from "./pages/Ciclo2";
import Layout from "./components/Layout";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/metodologia"} component={Metodologia} />
        <Route path={"/cronograma"} component={Cronograma} />
        <Route path={"/modulos"} component={Modulos} />
        <Route path={"/simulados"} component={Simulados} />
        <Route path={"/sobre"} component={Sobre} />
        <Route path={"/ciclo2"} component={Ciclo2} />
        <Route path={"/404"} component={NotFound} />
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
