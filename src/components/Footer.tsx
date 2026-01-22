import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © 2024 Neha. All rights reserved.
        </p>
        <p className="text-muted-foreground text-sm flex items-center gap-1">
          Made with <Heart className="w-4 h-4 text-primary fill-primary" /> and AI
        </p>
      </div>
    </footer>
  );
};

export default Footer;
