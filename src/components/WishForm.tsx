
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

interface WishFormProps {
  onSubmit: (wish: string) => Promise<void>;
  isConnected: boolean;
}

const WishForm: React.FC<WishFormProps> = ({ onSubmit, isConnected }) => {
  const [wish, setWish] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!wish.trim()) {
      toast.error("Please enter a wish");
      return;
    }
    
    if (!isConnected) {
      toast.error("Please connect your wallet first");
      return;
    }
    
    try {
      setIsSubmitting(true);
      await onSubmit(wish);
      setWish("");
      toast.success("Your wish has been recorded on the blockchain!");
    } catch (error) {
      console.error("Error submitting wish:", error);
      toast.error("Failed to record your wish. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-card/90 backdrop-blur-md border border-accent/20">
      <CardHeader>
        <CardTitle className="text-xl font-semibold shimmer-text">Make a Wish</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <Input
            placeholder="Enter your wish..."
            value={wish}
            onChange={(e) => setWish(e.target.value)}
            className="bg-background/50 border-secondary/30 placeholder:text-muted-foreground/50"
            maxLength={100}
            disabled={isSubmitting || !isConnected}
          />
          <p className="text-xs text-muted-foreground mt-2">
            Your wish will be immortalized on the Solana blockchain.
          </p>
        </CardContent>
        <CardFooter>
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
            disabled={isSubmitting || !isConnected}
          >
            {isSubmitting ? "Recording Wish..." : "Record Your Wish"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default WishForm;
