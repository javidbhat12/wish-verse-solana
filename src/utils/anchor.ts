
// This is a mock implementation for demo purposes
// In a real implementation, this would interact with a deployed Anchor program

import { toast } from "sonner";
import { Wish } from "@/components/WishWall";

// Simulated delay for async operations
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock wallet addresses
const MOCK_ADDRESSES = [
  "6dMH3e9myjy4GnWmTz3hSEL7ierWYEmNfgkQkjR9FcUW",
  "2xNweLpZUmY9xYZ4xoQS4TQnN3DZnZJKRwrBcKxFNj9m",
  "8ceTjSFcZKnDj5oz2q3SQhADdXj3Bn6yzBTvShbmTcrU",
  "4fKRCYkdgWZCmveTRQFSw9FS2vMWmzUiSYnQz7sp8TCQ",
];

// Mock wishes
const MOCK_WISHES: Wish[] = [
  {
    id: "wish1",
    title: "I wish for a world of sustainable technology",
    owner: MOCK_ADDRESSES[0],
    timestamp: "2 hours ago",
  },
  {
    id: "wish2",
    title: "I wish for universal blockchain adoption",
    owner: MOCK_ADDRESSES[1],
    timestamp: "4 hours ago",
  },
  {
    id: "wish3",
    title: "I hope to build the next big Solana dApp",
    owner: MOCK_ADDRESSES[2],
    timestamp: "1 day ago",
  },
  {
    id: "wish4",
    title: "I wish for Bitcoin to hit $100k",
    owner: MOCK_ADDRESSES[3],
    timestamp: "2 days ago",
  },
];

// Mock wallet connection
export const connectWallet = async (): Promise<string> => {
  // Simulating connection delay
  await delay(1000);
  
  // Return a random mock address
  return MOCK_ADDRESSES[Math.floor(Math.random() * MOCK_ADDRESSES.length)];
};

// Mock wallet disconnection
export const disconnectWallet = async (): Promise<void> => {
  await delay(500);
};

// Mock fetch wishes
export const fetchWishes = async (): Promise<Wish[]> => {
  // Simulating network delay
  await delay(2000);
  
  return [...MOCK_WISHES];
};

// Mock submit wish
export const submitWish = async (wishText: string, walletAddress: string): Promise<Wish> => {
  // Simulating transaction delay
  await delay(2000);
  
  // In a real implementation, this would call the Anchor program to create a new wish
  const newWish: Wish = {
    id: `wish${Date.now()}`,
    title: wishText,
    owner: walletAddress,
    timestamp: "Just now",
  };
  
  // Update our mock database
  MOCK_WISHES.unshift(newWish);
  
  // In real implementation, we'd show transaction link
  toast("View on Solana Explorer", {
    action: {
      label: "View",
      onClick: () => window.open("https://explorer.solana.com", "_blank"),
    },
  });
  
  return newWish;
};
