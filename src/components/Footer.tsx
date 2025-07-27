import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="portfolio-section border-t border-border">
      <div className="text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          Built with <Heart size={16} className="text-red-500" fill="currentColor" /> by Daksh Manchanda
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          © 2025 Daksh Manchanda. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;