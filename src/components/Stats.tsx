const Stats = () => {
  const stats = [
    { number: "+888", label: "Anos de experiência" },
    { number: "+888", label: "Transações Realizadas" }, 
    { number: "+888", label: "Projetos realizados" },
    { number: "+888", label: "Soluções na concluídas" },
    { number: "+888", label: "Clientes" },
    { number: "+888", label: "Em empresas finalizadas" }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-stats-bg rounded-3xl px-8 py-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <h2 className="text-3xl font-bold text-primary mb-2">
                A CFO Virtual
                <br />
                em números
              </h2>
            </div>
            
            <div className="bg-white rounded-2xl p-8 flex-1 ml-8 max-w-4xl">
              <div className="grid grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-muted-foreground mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;