import { Button } from "@/components/ui/button";
import ctaImage from "@/assets/businesswoman-cta.jpg";

const CTA = () => {
  return (
    <section className="py-20 bg-cta-bg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
              <img 
                src={ctaImage} 
                alt="Empreendedora do futuro" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 max-w-2xl text-white">
            <h2 className="text-4xl font-bold mb-6">
              Seja um <span className="text-secondary">empreendedor</span>
              <br />
              do futuro
            </h2>
            
            <p className="text-lg mb-8 opacity-90 max-w-lg">
              Você está a um passo de fazer como outras startups e 
              PMEs e delegar todo o seu administrativo para o seu 
              novo braço direito.
            </p>
            
            <Button variant="cta" size="lg">
              Falar com especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;