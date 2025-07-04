import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Calculator, DollarSign } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Planejamento Estratégico",
      description: "Mais do que um business plan, um guia para a evolução dos seus negócios.",
      buttonText: "Saiba mais"
    },
    {
      icon: Calculator,
      title: "Planejamento Tributário", 
      description: "Avaliação fiscal e contábil de como sua empresa deve prosseguir seus processos financeiros.",
      buttonText: "Saiba mais"
    },
    {
      icon: DollarSign,
      title: "Consultoria Financeira",
      description: "Otimização e definição de objetivos de acordo com os fluxos financeiros previstos.",
      buttonText: "Saiba mais"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          Nossos Serviços
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-xl font-bold text-primary">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  {service.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;