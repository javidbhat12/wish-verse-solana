import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import StarField from "@/components/StarField";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cosmic-gradient">
      <StarField />
      <div className="text-center p-8 bg-card/30 backdrop-blur-md rounded-xl border border-secondary/20 max-w-md mx-auto relative z-10">
        <h1 className="text-8xl font-bold mb-4 shimmer-text">404</h1>
        <p className="text-xl text-muted-foreground mb-6">Your wish went to another universe</p>
        <Button 
          asChild
          className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
        >
          <a href="/">Return to WishVerse</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
