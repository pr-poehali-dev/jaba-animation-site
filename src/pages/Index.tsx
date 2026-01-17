import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const socialLinks = [
    {
      name: 'TikTok',
      icon: 'Music',
      url: '#',
      color: 'from-cyan-400 to-pink-500',
      description: 'Основной канал с анимациями'
    },
    {
      name: 'YouTube',
      icon: 'Youtube',
      url: '#',
      color: 'from-red-500 to-red-600',
      description: 'Полные версии роликов'
    },
    {
      name: 'Instagram',
      icon: 'Instagram',
      url: '#',
      color: 'from-purple-500 via-pink-500 to-orange-400',
      description: 'Фото и короткие клипы'
    },
    {
      name: 'Telegram',
      icon: 'Send',
      url: '#',
      color: 'from-blue-400 to-blue-600',
      description: 'Закулисье и новости'
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
      
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-8 animate-float">
            <img 
              src="https://cdn.poehali.dev/projects/e38ad30b-cac4-4e1f-b487-3f4ba1093929/files/c841d744-f4ba-4ee8-804d-b9993e325504.jpg" 
              alt="Жаба Dota 2" 
              className="w-64 h-64 mx-auto object-contain drop-shadow-[0_0_50px_rgba(34,197,94,0.5)]"
            />
          </div>

          <h1 className="text-7xl md:text-9xl font-heading font-black mb-6 text-glow text-primary animate-scale-in">
            ЖАБИИИ
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Анимации • Дота 2 • Мемы
          </p>

          <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Канал с анимациями про культового персонажа из игры Dota 2
          </p>

          <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover-glow text-lg px-8 py-6 font-heading">
              <Icon name="Play" className="mr-2" size={24} />
              Смотреть контент
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover-glow text-lg px-8 py-6 font-heading">
              <Icon name="Info" className="mr-2" size={24} />
              О канале
            </Button>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 
            id="socials-title"
            className="text-5xl md:text-6xl font-heading font-black text-center mb-4 text-glow text-secondary animate-on-scroll"
            style={{ opacity: isVisible['socials-title'] ? 1 : 0, transform: isVisible['socials-title'] ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.6s ease-out' }}
          >
            Подписывайся на соцсети
          </h2>
          
          <p 
            id="socials-subtitle"
            className="text-center text-muted-foreground mb-16 text-lg animate-on-scroll"
            style={{ opacity: isVisible['socials-subtitle'] ? 1 : 0, transform: isVisible['socials-subtitle'] ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.6s ease-out 0.2s' }}
          >
            Выбирай свою платформу и следи за новыми анимациями
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialLinks.map((social, index) => (
              <Card 
                key={social.name}
                id={`social-${index}`}
                className="animate-on-scroll p-8 bg-card/50 backdrop-blur-sm border-2 border-transparent hover:border-primary transition-all duration-300 hover-glow cursor-pointer group"
                style={{ 
                  opacity: isVisible[`social-${index}`] ? 1 : 0, 
                  transform: isVisible[`social-${index}`] ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)', 
                  transition: `all 0.6s ease-out ${index * 0.1}s` 
                }}
              >
                <div className="flex items-center gap-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${social.color} flex items-center justify-center neon-border group-hover:scale-110 transition-transform`}>
                    <Icon name={social.icon} size={40} className="text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold mb-2 text-foreground">{social.name}</h3>
                    <p className="text-muted-foreground">{social.description}</p>
                  </div>

                  <Icon name="ArrowRight" size={32} className="text-primary group-hover:translate-x-2 transition-transform" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card 
            id="about-card"
            className="animate-on-scroll p-12 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-2 border-primary/30 neon-border"
            style={{ 
              opacity: isVisible['about-card'] ? 1 : 0, 
              transform: isVisible['about-card'] ? 'scale(1)' : 'scale(0.9)', 
              transition: 'all 0.8s ease-out' 
            }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center neon-border">
                <Icon name="Gamepad2" size={32} className="text-white" />
              </div>
              <h2 className="text-4xl font-heading font-black text-glow text-primary">О канале</h2>
            </div>

            <div className="space-y-4 text-lg text-foreground/90">
              <p>
                🎮 Канал посвящён анимациям с жабами из вселенной <span className="font-bold text-primary">Dota 2</span>
              </p>
              <p>
                🎬 Создаём забавные анимации, мемы и истории с культовым персонажем игры
              </p>
              <p>
                ⚡ Каждое видео — это микс юмора, качественной анимации и отсылок к геймплею Доты
              </p>
              <p className="text-secondary font-semibold">
                Присоединяйся к комьюнити любителей жаб и Dota 2! 🐸
              </p>
            </div>
          </Card>
        </div>
      </section>

      <footer className="relative py-12 px-4 border-t border-primary/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground text-lg mb-4">© 2024 ЖАБИИИ — Все анимации созданы с любовью к Dota 2</p>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.url}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center hover-glow border border-primary/30"
              >
                <Icon name={social.icon} size={20} className="text-primary" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
