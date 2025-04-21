
import React, { useEffect, useState } from "react";
import { useWallet } from "@/context/WalletContext";
import WishWall, { Wish } from "@/components/WishWall";
import { fetchWishes } from "@/utils/anchor";

const MyWishes: React.FC = () => {
  const { walletAddress } = useWallet();
  const [myWishes, setMyWishes] = useState<Wish[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadMyWishes = async () => {
      setIsLoading(true);
      const all = await fetchWishes();
      setMyWishes(walletAddress ? all.filter(w => w.owner === walletAddress) : []);
      setIsLoading(false);
    };
    loadMyWishes();
  }, [walletAddress]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4 text-primary shimmer-text">My Wishes</h2>
      <WishWall wishes={myWishes} isLoading={isLoading} />
    </div>
  );
};

export default MyWishes;
