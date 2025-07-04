import { Check } from "lucide-react";
import dashboardImage from "@/assets/dashboard-mockup.jpg";

const Support = () => {
  const features = [
    "Tenha o suporte de um especialista que nunca sofra",
    "Colabore de forma eficaz e segura com seu contador dentro da plataforma", 
    "Colabore de forma eficaz e segura com seu contador dentro da plataforma"
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 max-w-2xl">
            <h2 className="text-4xl font-bold mb-4">
              Atendimento e{" "}
              <span className="text-primary">suporte personalizado</span>
            </h2>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-muted-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex justify-end">
            <div className="relative">
              <img 
                src={dashboardImage} 
                alt="Dashboard CFO Virtual" 
                className="rounded-lg shadow-xl max-w-lg w-full"
              />
              
              {/* Dashboard overlay */}
              <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-lg">
                <div className="text-lg font-bold text-primary mb-1">Dashboard do cliente</div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                  <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                  <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;