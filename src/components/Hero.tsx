import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-businessman.jpg";

const Hero = () => {
  return (
    <section className="bg-hero-gradient text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 max-w-2xl">
            <div className="mb-4">
              <span className="text-secondary text-sm font-medium">
                DESCOMPLICOU A SUA GESTÃO FINANCEIRA!
              </span>
            </div>
            
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Conte com a CFO Virtual
              <br />
              para ajudar sua empresa
              <br />
              a atingir o próximo nível
            </h1>
            
            <p className="text-lg mb-8 opacity-90 max-w-xl">
              Resolvê tudo o que diz da cabeça do seu financeiro é
              tenha mais tempo para focar no seu negócio!
            </p>
            
            <Button variant="cta" size="lg">
              Quero conhecer mais
            </Button>
          </div>

          <div className="flex-1 flex justify-end">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="CFO Virtual - Empresário profissional" 
                className="rounded-lg shadow-2xl max-w-md w-full"
              />
              
              {/* Floating card */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-sm text-gray-600 mb-1">CFO as a Service</div>
                <div className="text-secondary font-semibold">Saving</div>
                <div className="text-sm text-gray-600 mt-2">Consultoria Financeira</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;