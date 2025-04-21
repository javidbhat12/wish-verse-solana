
import React, { createContext, useContext, useState } from "react";

interface WalletContextValue {
  walletAddress: string | null;
  setWalletAddress: (a: string | null) => void;
}

const WalletContext = createContext<WalletContextValue>({
  walletAddress: null,
  setWalletAddress: () => {},
});

export const useWallet = () => useContext(WalletContext);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  return (
    <WalletContext.Provider value={{ walletAddress, setWalletAddress }}>
      {children}
    </WalletContext.Provider>
  );
};
