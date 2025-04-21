
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import WishForm from "@/components/WishForm";
import WishWall, { Wish } from "@/components/WishWall";
import WalletConnect from "@/components/WalletConnect";
import StarField from "@/components/StarField";
import { connectWallet, disconnectWallet, fetchWishes, submitWish } from "@/utils/anchor";
import { Toaster } from "@/components/ui/sonner";

const Index: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    loadWishes();
  }, []);

  const loadWishes = async () => {
    setIsLoading(true);
    try {
      const wishesData = await fetchWishes();
      setWishes(wishesData);
    } catch (error) {
      console.error("Error loading wishes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleConnect = async () => {
    try {
      const address = await connectWallet();
      setWalletAddress(address);
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnectWallet();
      setWalletAddress(null);
    } catch (error) {
      console.error("Error disconnecting wallet:", error);
    }
  };

  const handleSubmitWish = async (wishText: string) => {
    if (!walletAddress) return;
    
    const newWish = await submitWish(wishText, walletAddress);
    setWishes([newWish, ...wishes]);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <StarField />
      
      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center z-10 relative">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold shimmer-text">WishVerse</h1>
        </div>
        <WalletConnect
          isConnected={!!walletAddress}
          address={walletAddress}
          onConnect={handleConnect}
          onDisconnect={handleDisconnect}
        />
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-primary animate-float">
            Make a Wish on Solana
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Record your wishes on the blockchain and let them shine among the stars forever.
          </p>
        </div>

        {/* Wish Form */}
        <WishForm 
          onSubmit={handleSubmitWish} 
          isConnected={!!walletAddress} 
        />

        {/* Wish Wall */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 shimmer-text">Wish Wall</h3>
          <WishWall wishes={wishes} isLoading={isLoading} />
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto py-6 px-4 mt-12 border-t border-secondary/20 text-center text-sm text-muted-foreground relative z-10">
        <p>WishVerse - Powered by Solana</p>
        <div className="flex justify-center mt-2 gap-4">
          <Button variant="link" size="sm" className="text-muted-foreground">
            About
          </Button>
          <Button variant="link" size="sm" className="text-muted-foreground">
            GitHub
          </Button>
          <Button variant="link" size="sm" className="text-muted-foreground">
            Explorer
          </Button>
        </div>
      </footer>
      
      <Toaster position="top-right" />
    </div>
  );
};

export default Index;
