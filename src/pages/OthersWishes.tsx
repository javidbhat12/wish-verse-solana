
import React, { useEffect, useState } from "react";
import { useWallet } from "@/context/WalletContext";
import WishWall, { Wish } from "@/components/WishWall";
import { fetchWishes } from "@/utils/anchor";

const OthersWishes: React.FC = () => {
  const { walletAddress } = useWallet();
  const [othersWishes, setOthersWishes] = useState<Wish[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadOthersWishes = async () => {
      setIsLoading(true);
      const all = await fetchWishes();
      setOthersWishes(walletAddress ? all.filter(w => w.owner !== walletAddress) : all);
      setIsLoading(false);
    };
    loadOthersWishes();
  }, [walletAddress]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4 text-primary shimmer-text">Others' Wishes</h2>
      <WishWall wishes={othersWishes} isLoading={isLoading} />
    </div>
  );
};

export default OthersWishes;
