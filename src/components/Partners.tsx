const Partners = () => {
  const partners = [
    { name: "geek", bg: "bg-gray-800" },
    { name: "speedinvest", bg: "bg-white" },
    { name: "OM", bg: "bg-blue-600", textColor: "text-yellow-400" },
    { name: "CRAVOW", bg: "bg-white" },
    { name: "rádio Lopes", bg: "bg-purple-600" },
    { name: "?", bg: "bg-white" }
  ];

  return (
    <section className="py-16 bg-partners-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Parceiros
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className={`${partner.bg} h-24 rounded-lg flex items-center justify-center shadow-lg hover:scale-105 transition-transform`}
            >
              <span 
                className={`font-bold text-lg ${
                  partner.textColor || (partner.bg === "bg-white" ? "text-gray-800" : "text-white")
                }`}
              >
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;