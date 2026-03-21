import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import PageLayout from "@/components/PageLayout";
import Index from "./pages/Index";
import SobrePage from "./pages/SobrePage";
import CursosPage from "./pages/CursosPage";
import ProdutosPage from "./pages/ProdutosPage";
import ContatoPage from "./pages/ContatoPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PageLayout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/cursos" element={<CursosPage />} />
            <Route path="/produtos" element={<ProdutosPage />} />
            <Route path="/contato" element={<ContatoPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
