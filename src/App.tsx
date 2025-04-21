
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MyWishes from "./pages/MyWishes";
import OthersWishes from "./pages/OthersWishes";
import { WalletProvider } from "./context/WalletContext";
import { AppSidebar } from "@/components/AppSidebar";

// Unique name for the app
document.title = "WishVerse | Wishes on Solana";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <WalletProvider>
        <div className="min-h-screen flex w-full bg-background">
          <AppSidebar />
          <div className="flex-1 min-h-screen bg-background flex flex-col">
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/my-wishes" element={<MyWishes />} />
                <Route path="/others-wishes" element={<OthersWishes />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </WalletProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
