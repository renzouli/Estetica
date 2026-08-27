import React, { useState } from 'react';
import { Phone, Menu, X, Sparkles, Heart, Award, Leaf, Users, Star, ArrowRight } from 'lucide-react';
import heroBg from "@/assets/hero-bg.jpg";
import rejuvenecimientoImg from "@/assets/service-rejuvenecimiento.jpg";
import corporalImg from "@/assets/service-corporal.jpg";
import micropigmentacionImg from "@/assets/service-micropigmentacion.jpg";
import pestanasImg from "@/assets/service-pestanas.jpg";
import manosImg from "@/assets/service-manos.jpg";
import logoImg from "@/assets/logo.png";

interface ServiceCategory {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  items: string[];
  color: string;
  image: string;
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 1,
    title: "Rejuvenecimiento Facial",
    description: "Exosomas, Dermapen y Plasma Rico en Plaquetas",
    icon: <Sparkles className="w-8 h-8" />,
    color: "from-violet-400 to-purple-500",
    image: rejuvenecimientoImg,
    items: [
      "Exosomas - Rostro, Cuello y Manos",
      "Tratamientos con Principios Activos + Dermapen",
      "• Manchas",
      "• Anti-edad",
      "• Secuelas de Acné",
      "Plasma Rico en Plaquetas",
      "• Versión Inyectable",
      "• Con Dermapen"
    ]
  },
  {
    id: 2,
    title: "Armonización Corporal",
    description: "Modelaje con enzimas y armonización de glúteos",
    icon: <Leaf className="w-8 h-8" />,
    color: "from-amber-400 to-yellow-500",
    image: corporalImg,
    items: [
      "Tratamientos con Enzimas",
      "• Abdomen",
      "• Cintura",
      "• Espalda",
      "• Brazos",
      "• Rostro",
      "Armonización de Glúteos con Peptonas"
    ]
  },
  {
    id: 3,
    title: "Micropigmentación & Cejas",
    description: "Diseño de cejas y labios con técnicas avanzadas",
    icon: <Heart className="w-8 h-8" />,
    color: "from-pink-400 to-rose-400",
    image: micropigmentacionImg,
    items: [
      "Micropigmentación de Cejas",
      "• Natural",
      "• Powder Brows",
      "• Híbridas",
      "Planchado de Cejas",
      "Micropigmentación de Labios",
      "• Full Color",
      "• Acuarela Lips",
      "• Neutralización de Labios",
      "• Hidratación con Color"
    ]
  },
  {
    id: 4,
    title: "Pestañas Premium",
    description: "Lifting y extensiones de alta calidad",
    icon: <Star className="w-8 h-8" />,
    color: "from-blue-400 to-cyan-400",
    image: pestanasImg,
    items: [
      "Lifting de Pestañas",
      "Extensiones de Pestañas",
      "• Clásica",
      "• Volumen",
      "• Híbrida"
    ]
  },
  {
    id: 5,
    title: "Manos y Pies",
    description: "Manicura profesional y pedicura de spa",
    icon: <Award className="w-8 h-8" />,
    color: "from-emerald-400 to-teal-500",
    image: manosImg,
    items: [
      "Manicura",
      "• Acrílicas",
      "• Rubber",
      "• Builder (Gel de Construcción)",
      "Pedicura Spa Completa"
    ]
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const handleCotizar = () => {
    window.open(`https://wa.me/51953163240?text=Hola,%20quisiera%20cotizar%20tratamientos%20en%20Bella%20Estética`, '_blank');
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#f8f4f9] text-slate-800 overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-violet-100 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div >
                <img
                  src={logoImg}
                  alt="Bella Facial logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <div className="font-serif text-3xl tracking-tighter text-[#5c3d6b] font-medium">Bella</div>
                <div className="text-[10px] text-amber-600 -mt-1 tracking-[1px]">Facial</div>
                <div className="text-[10px] text-amber-600 -mt-1 tracking-[1px]">★★★</div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10 text-sm font-medium">
              <button onClick={() => scrollToSection('servicios')} className="hover:text-[#c4a3d9] transition-colors">Servicios</button>
              <button onClick={() => scrollToSection('beneficios')} className="hover:text-[#c4a3d9] transition-colors">Beneficios</button>
              <button onClick={() => scrollToSection('testimonios')} className="hover:text-[#c4a3d9] transition-colors">Testimonios</button>
              <button onClick={() => scrollToSection('contacto')} className="hover:text-[#c4a3d9] transition-colors">Contacto</button>
            </div>



            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 text-[#5c3d6b]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t py-6 px-6 space-y-6">
            <div className="flex flex-col gap-6 text-lg">
              <button onClick={() => scrollToSection('servicios')} className="text-left">Servicios</button>
              <button onClick={() => scrollToSection('beneficios')} className="text-left">Beneficios</button>
              <button onClick={() => scrollToSection('testimonios')} className="text-left">Testimonios</button>
              <button onClick={() => scrollToSection('contacto')} className="text-left">Contacto</button>
            </div>

            <div className="pt-6 border-t">
              <button
                onClick={handleCotizar}
                className="w-full py-4 bg-gradient-to-r from-[#c4a3d9] to-[#d4af77] text-white rounded-3xl font-medium text-lg"
              >
                Cotizar por WhatsApp
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative h-screen flex items-center pt-20 bg-[#f8f4f9]">
        <div className="absolute inset-0 bg-[radial-gradient(at_70%_30%,rgba(196,163,217,0.15)_0%,transparent_50%)]"></div>

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundPosition: 'center 30%'
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/80 text-[#5c3d6b] text-xs tracking-[2px] px-6 py-2 rounded-3xl mb-6 border border-[#d4af77]/30">
              <div className="w-2 h-2 bg-[#d4af77] rounded-full animate-pulse"></div>
              ESTÉTICA PREMIUM
            </div>

            <h1 className="text-7xl md:text-[92px] leading-[0.95] font-serif font-light text-[#3a2a44] tracking-[-4px] mb-6 glow-gold">
              TU BELLEZA,<br />NUESTRA PASIÓN
            </h1>

            <p className="text-2xl text-[#5c3d6b] max-w-md mb-10 font-light">
              Tratamientos exclusivos con tecnología avanzada, productos dermatológicos y técnicas de vanguardia
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('servicios')}
                className="px-10 py-5 rounded-3xl bg-[#5c3d6b] text-white flex items-center gap-3 text-lg hover:bg-[#4a2e55] transition-all group"
              >
                Ver nuestros servicios
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </button>
            </div>

            <div className="mt-16 flex items-center gap-8 text-sm">
              <div className="flex -space-x-4">
                <div className="w-8 h-8 rounded-2xl border-2 border-white overflow-hidden bg-violet-200"></div>
                <div className="w-8 h-8 rounded-2xl border-2 border-white overflow-hidden bg-amber-200"></div>
                <div className="w-8 h-8 rounded-2xl border-2 border-white overflow-hidden bg-pink-200"></div>
              </div>
              <div>
                <div className="font-medium text-[#5c3d6b]">+280 clientes felices</div>
                <div className="text-[#8a6f96] text-xs">este mes</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 flex flex-col items-center text-[#8a6f96] text-xs tracking-widest">
          <div className="animate-bounce">↓</div>
          <span>DESLIZA PARA EXPLORAR</span>
        </div>

        {/* Decorative gold elements */}
        <div className="absolute top-32 right-12 hidden xl:block">
          <div className="w-48 h-48 border border-[#d4af77]/30 rounded-full flex items-center justify-center">
            <div className="w-32 h-32 border border-[#d4af77]/40 rounded-full flex items-center justify-center">
              <Sparkles className="w-12 h-12 text-[#d4af77]" />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-white py-6 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-75 text-sm">
            <div className="flex items-center gap-3">
              <div className="text-[#d4af77]">★</div>
              <span className="font-medium text-[#5c3d6b]">Productos Dermatológicos</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-[#d4af77]">★</div>
              <span className="font-medium text-[#5c3d6b]">Técnica Europea</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-[#d4af77]">★</div>
              <span className="font-medium text-[#5c3d6b]">Resultados Naturales</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-[#d4af77]">★</div>
              <span className="font-medium text-[#5c3d6b]">Personalización Total</span>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICIOS */}
      <section id="servicios" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline px-4 py-1.5 bg-[#f0d9f2] text-[#6b4a7e] text-sm font-medium tracking-wider rounded-3xl mb-4">NUESTROS TRATAMIENTOS</div>
            <h2 className="text-6xl font-serif tracking-tight text-[#3a2a44] mb-4">Descubre tu transformación</h2>
            <p className="max-w-md mx-auto text-[#6b4a7e]">Cada tratamiento es personalizado para resaltar tu belleza única</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => setSelectedCategory(category)}
                className="service-card group bg-white border border-[#e8d9f0] hover:border-[#c4a3d9] rounded-3xl cursor-pointer relative overflow-hidden"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                  {/* Icon overlay */}
                  <div className={`absolute top-4 left-4 h-12 w-12 flex items-center justify-center rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-lg backdrop-blur-sm`}>
                    {category.icon}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-serif tracking-tight mb-3 text-[#3a2a44]">{category.title}</h3>
                  <p className="text-[#7d5e8a] text-sm">{category.description}</p>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-6 right-6 w-6 h-px bg-gradient-to-r from-transparent via-[#d4af77] to-transparent"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-[#9c7eb3]">Escríbenos al <span className="font-mono text-[#d4af77]">953 163 240</span> para cotizar tu tratamiento</p>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section id="beneficios" className="py-24 bg-[#f8f4f9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="sticky top-28">
                <div className="uppercase text-xs tracking-[3px] text-[#9c7eb3] mb-4">POR QUÉ ELEGIRNOS</div>
                <h2 className="font-serif text-6xl leading-none tracking-tighter text-[#3a2a44]">Resultados que <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c4a3d9] to-[#d4af77]">trascienden</span></h2>
                <p className="mt-8 text-lg text-[#6b4a7e] leading-relaxed">
                  En Bella Facial combinamos la ciencia con el arte de la belleza.
                  Nuestros tratamientos están diseñados para potenciar tu belleza natural con seguridad y elegancia.
                </p>

                <div className="mt-12 flex gap-4">
                  <div className="px-7 py-6 border border-[#d4af77]/30 rounded-3xl text-center">
                    <div className="text-4xl font-light text-[#d4af77]">100%</div>
                    <div className="text-xs mt-1 tracking-wider">PERSONALIZADOS</div>
                  </div>
                  <div className="px-7 py-6 border border-[#d4af77]/30 rounded-3xl text-center">
                    <div className="text-4xl font-light text-[#d4af77]">15+</div>
                    <div className="text-xs mt-1 tracking-wider">TRATAMIENTOS</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <Sparkles className="w-7 h-7" />,
                  title: "Tecnología Avanzada",
                  desc: "Dermapen, exosomas, plasma rico en plaquetas y enzimas de última generación"
                },
                {
                  icon: <Leaf className="w-7 h-7" />,
                  title: "Ingredientes Premium",
                  desc: "Solo utilizamos productos dermatológicos certificados y de origen natural"
                },
                {
                  icon: <Users className="w-7 h-7" />,
                  title: "Expertos Certificados",
                  desc: "Nuestro equipo cuenta con amplia experiencia y formación continua"
                },
                {
                  icon: <Heart className="w-7 h-7" />,
                  title: "Enfoque Holístico",
                  desc: "Tratamos la piel y el cuerpo como un todo para resultados armoniosos"
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-3xl border border-[#e8d9f0] hover:border-[#c4a3d9] transition-all group">
                  <div className="h-14 w-14 flex items-center justify-center bg-gradient-to-br from-[#f0d9f2] to-[#f0e0c4] text-[#5c3d6b] rounded-2xl mb-7 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h4 className="text-2xl font-medium text-[#3a2a44] mb-3 tracking-tight">{benefit.title}</h4>
                  <p className="text-[#7d5e8a]">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-[#d4af77] fill-[#d4af77]" />
              ))}
            </div>
            <h2 className="font-serif text-6xl tracking-tighter text-[#3a2a44]">Lo que dicen nuestras clientas</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Camila Torres",
                role: "Empresaria • 38 años",
                text: "Los exosomas en mi rostro fueron una experiencia transformadora. Mi piel nunca había lucido tan luminosa y firme. El equipo es increíblemente profesional.",
                treatment: "Exosomas + Dermapen"
              },
              {
                name: "Valeria Mendoza",
                role: "Diseñadora • 29 años",
                text: "Las micropigmentaciones de cejas y labios cambiaron mi rutina diaria. El resultado es tan natural que nadie nota que es semipermanente. ¡Recomendadísima!",
                treatment: "Powder Brows + Acuarela Lips"
              },
              {
                name: "Sofía Ramírez",
                role: "Profesora • 44 años",
                text: "El tratamiento de enzimas en abdomen y cintura me dio la confianza que estaba buscando. Los resultados fueron visibles desde la tercera sesión.",
                treatment: "Enzimas Corporales"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-[#f8f4f9] p-10 rounded-3xl border border-[#e8d9f0]">
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-amber-400 w-5 h-5" />
                  ))}
                </div>

                <p className="italic text-[#5c3d6b] text-[15.2px] leading-relaxed mb-10">
                  “{testimonial.text}”
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-200 to-amber-200 rounded-2xl"></div>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-xs text-[#9c7eb3]">{testimonial.role}</div>
                    <div className="text-[10px] text-violet-400 mt-0.5">{testimonial.treatment}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contacto" className="py-28 bg-gradient-to-br from-[#3a2a44] to-[#5c3d6b] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#d4af77_1px,transparent_1px)] [background-size:40px_40px] opacity-10"></div>

        <div className="max-w-3xl mx-auto text-center px-6 relative z-10">
          <div className="mx-auto w-20 h-20 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center mb-8 border border-white/30">
            <Phone className="w-10 h-10" />
          </div>

          <h2 className="text-6xl font-light tracking-tight mb-8">¿Lista para brillar?</h2>

          <p className="text-2xl text-[#d4d0e0] mb-12 max-w-xs mx-auto">
            Agenda tu valoración y recibe una cotización personalizada
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={handleCotizar}
              className="flex-1 sm:flex-none px-16 py-7 text-xl font-medium bg-white text-[#3a2a44] rounded-3xl flex items-center justify-center gap-4 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-black/30"
            >
              <span>ENVIAR MENSAJE POR WHATSAPP</span>
              <ArrowRight />
            </button>

            <a
              href="tel:953163240"
              className="flex-1 sm:flex-none px-14 py-7 text-xl font-medium border-2 border-white/60 hover:bg-white/10 rounded-3xl flex items-center justify-center gap-3 transition-all"
            >
              <Phone className="w-6 h-6" />
              LLAMAR AL 953 163 240
            </a>
          </div>

          <div className="mt-16 text-xs opacity-60 tracking-widest">Bella Facial • LIMA, PERÚ • 2026</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2c2234] text-[#b8a3c4] py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-12 gap-y-14">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div >
                <img
                  src={logoImg}
                  alt="Bella Facial logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="font-serif text-4xl text-white tracking-tighter">Bella Facial</div>
            </div>

            <p className="max-w-xs text-[#d4c2d9]">
              Espacio dedicado a realzar tu belleza natural con tratamientos estéticos de vanguardia.
            </p>

            <div className="mt-auto pt-12 text-xs">© Bella Facial. Todos los derechos reservados.</div>
          </div>

          <div className="md:col-span-3">
            <div className="uppercase text-xs mb-5 text-[#d4af77]">Servicios</div>
            <div className="space-y-3 text-sm">
              {serviceCategories.map(cat => (
                <div key={cat.id} className="hover:text-white cursor-pointer transition-colors" onClick={() => setSelectedCategory(cat)}>
                  {cat.title}
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="uppercase text-xs mb-5 text-[#d4af77]">CONTÁCTANOS</div>

            <div className="text-5xl font-light text-white tracking-tighter mb-2">953 163 240</div>
            <div className="text-[#d4af77] text-sm mb-8">Llama o envía mensaje por WhatsApp</div>

            <button
              onClick={handleCotizar}
              className="px-8 py-4 border border-white/30 text-sm hover:bg-white/5 transition-colors rounded-3xl flex items-center gap-3"
            >
              INICIAR CONVERSACIÓN EN WHATSAPP
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="mt-16 text-[10px] opacity-50">Hecho con amor para realzar tu luz interior</div>
          </div>
        </div>
      </footer>

      {/* SERVICE MODAL */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100] p-6" onClick={() => setSelectedCategory(null)}>
          <div
            className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="px-8 pt-8 pb-6 border-b flex items-start justify-between">
              <div>
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${selectedCategory.color} text-white mb-5`}>
                  {selectedCategory.icon}
                </div>
                <h3 className="font-serif text-4xl tracking-tight text-[#3a2a44]">{selectedCategory.title}</h3>
                <p className="text-[#8a6f96]">{selectedCategory.description}</p>
              </div>
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-slate-400 hover:text-slate-600 p-2 -mr-2 -mt-2"
              >
                <X size={28} />
              </button>
            </div>

            <div className="p-8 text-[#5c3d6b]">
              <ul className="space-y-5 text-[15px]">
                {selectedCategory.items.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="text-[#d4af77] mt-1.5">✦</div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 border-t bg-[#f8f4f9] flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setTimeout(() => handleCotizar(), 400);
                }}
                className="flex-1 py-4 bg-gradient-to-r from-[#c4a3d9] via-[#b38fd1] to-[#d4af77] text-white font-medium rounded-2xl active:scale-[0.985] transition-all flex items-center justify-center gap-2 text-base"
              >
                COTIZAR ESTE TRATAMIENTO
                <Phone className="w-4 h-4" />
              </button>
              <button
                onClick={() => setSelectedCategory(null)}
                className="flex-1 py-4 border-2 border-[#d1b6d8] text-[#5c3d6b] font-medium rounded-2xl hover:bg-white"
              >
                CERRAR
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SUCCESS TOAST */}
      {showSuccess && (
        <div className="fixed bottom-6 right-6 bg-emerald-700 text-white text-sm px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 z-[200]">
          <div className="bg-emerald-600 rounded-xl p-1">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            ¡Mensaje enviado!<br />
            <span className="opacity-80 text-xs">Nuestro equipo te responderá pronto</span>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleCotizar}
        className="fixed bottom-8 right-8 z-[90] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center border-[6px] border-white"
        aria-label="Contactar por WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.485-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.355l-.14-.083-3.434.9.916-3.35-.217-.145a9.864 9.864 0 01-1.52-5.24c0-5.45 4.438-9.886 9.89-9.886 2.64 0 5.122 1.03 6.986 2.894a9.825 9.825 0 012.893 6.985c0 5.45-4.437 9.886-9.888 9.886m8.413-18.297A11.815 11.815 0 0012.05 1C6.495 1 2 5.495 2 11.05c0 1.958.507 3.86 1.44 5.5L2 22l5.58-1.467c1.58.88 3.4 1.376 5.47 1.376h.004c5.556 0 10.05-4.494 10.05-10.05 0-2.68-1.045-5.2-2.94-7.092" />
        </svg>
      </button>
    </div>
  );
}
