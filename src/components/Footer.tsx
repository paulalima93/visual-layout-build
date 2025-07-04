import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-bold">CFO VIRTUAL</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              O único objetivo de uma empresa é só um projeto ocasionalmente 
              para dois financiamentos mensais. Não venda que você se torna 
              grande que sua coisa se torna excelente.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-300 hover:text-secondary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-300 hover:text-secondary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-300 hover:text-secondary cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-300 hover:text-secondary cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-300 hover:text-secondary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Por que nós?</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Startup</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Consultoria Financeira</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Planejamento</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-600 pt-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Fale com a gente</h4>
              <div className="space-y-2 text-gray-300">
                <p>📍 Av. Ipiranga Rio Branco, 284 - apto 714 Campinas - São Paulo - SP</p>
                <p>📞 (19) 98741-9090</p>
                <p>✉️ contato@cfovirtual.com.br</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>©2024 CFO Virtual 2024 - Todos os direitos reservados | Termos de Uso | Política de Privacidade</p>
          <p className="mt-4 md:mt-0">Desenvolvido por <span className="text-secondary">SuaREDE</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;