
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface WishCardProps {
  title: string;
  owner: string;
  timestamp: string;
  className?: string;
}

const WishCard: React.FC<WishCardProps> = ({ title, owner, timestamp, className }) => {
  return (
    <Card className={cn("wish-card", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <span>{owner.slice(0, 4)}...{owner.slice(-4)}</span>
          <span>{timestamp}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default WishCard;
