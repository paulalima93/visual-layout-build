import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-bold text-primary">CFO VIRTUAL</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Por que nós?
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Soluções
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Blog
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </div>

          <Button variant="cta">
            Vamos conversar?
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;