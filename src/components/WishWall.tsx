
import React from "react";
import WishCard from "./WishCard";

export interface Wish {
  id: string;
  title: string;
  owner: string;
  timestamp: string;
}

interface WishWallProps {
  wishes: Wish[];
  isLoading: boolean;
}

const WishWall: React.FC<WishWallProps> = ({ wishes, isLoading }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div 
            key={i} 
            className="h-32 rounded-xl bg-card/40 animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (wishes.length === 0) {
    return (
      <div className="text-center py-10 text-muted-foreground">
        <p>No wishes yet. Be the first to make a wish!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      {wishes.map((wish) => (
        <WishCard
          key={wish.id}
          title={wish.title}
          owner={wish.owner}
          timestamp={wish.timestamp}
          className="h-full"
        />
      ))}
    </div>
  );
};

export default WishWall;
