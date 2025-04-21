
import React from "react";
import { Button } from "@/components/ui/button";

interface WalletConnectProps {
  isConnected: boolean;
  address: string | null;
  onConnect: () => void;
  onDisconnect: () => void;
}

const WalletConnect: React.FC<WalletConnectProps> = ({
  isConnected,
  address,
  onConnect,
  onDisconnect,
}) => {
  return (
    <div className="flex items-center gap-2">
      {isConnected && address ? (
        <>
          <span className="text-sm text-muted-foreground hidden sm:inline-block">
            {address.slice(0, 4)}...{address.slice(-4)}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={onDisconnect}
            className="border-primary/50 text-primary hover:bg-primary/10"
          >
            Disconnect
          </Button>
        </>
      ) : (
        <Button
          onClick={onConnect}
          className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
        >
          Connect Wallet
        </Button>
      )}
    </div>
  );
};

export default WalletConnect;
