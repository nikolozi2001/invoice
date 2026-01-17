'use client';

import { FileText, Calculator, TrendingUp, PieChart, Bell, Smartphone, Globe, Shield, Zap, Users } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: FileText,
      title: 'ინვოისების მართვა',
      description: 'შექმენი, გაგზავნე და მართე ინვოისები საქართველოს სტანდარტების მიხედვით',
      benefits: ['PDF გენერაცია', 'ავტომატური ნუმერაცია', 'QR კოდი გადახდისთვის']
    },
    {
      icon: Calculator,
      title: 'ღ.დ.ღ. გაანგარიშება',
      description: 'ავტომატური ღ.დ.ღ.-ს გაანგარიშება და დეკლარაციების მომზადება',
      benefits: ['18% ღ.დ.ღ. ავტოგაანგარიშება', 'მესაე დეკლარაცია', 'ექსპორტი Excel-ში']
    },
    {
      icon: TrendingUp,
      title: 'Cash Flow ანალიზი',
      description: 'იხილე შენი ბიზნესის ფულადი ნაკადების რეალურ დროში',
      benefits: ['რეალურ დროის მონიტორინგი', 'პროგნოზირება', 'გრაფიკული ანალიზი']
    },
    {
      icon: PieChart,
      title: 'რეპორტები',
      description: 'დეტალური რეპორტები შენი ბიზნესის ფინანსური მდგომარეობის შესახებ',
      benefits: ['შემოსავლების ანალიზი', 'ხარჯების კატეგორიზაცია', 'მოგების ანალიზი']
    },
    {
      icon: Bell,
      title: 'ნოტიფიკაციები',
      description: 'არ გამოტოვო მნიშვნელოვანი გადახდების ვადები და განახლებები',
      benefits: ['SMS შეხსენებები', 'Email ნოტიფიკაცია', 'მობილურ აპში Push']
    },
    {
      icon: Smartphone,
      title: 'მობილურ აპი',
      description: 'მართე შენი ბიზნესი მობილურ ტელეფონიდან ნებისმიერ ადგილას',
      benefits: ['iOS & Android', 'ოფლაინ რეჟიმი', 'სინქრონიზაცია']
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: 'საქართველოს კანონმდებლობა',
      description: 'სრულად შეესაბამება საქართველოს საბუღალტრო და საგადასახადო კანონმდებლობას'
    },
    {
      icon: Shield,
      title: 'მაღალი უსაფრთხოება',
      description: 'შენი მონაცემები დაცულია ბანკის დონის უსაფრთხოების სისტემით'
    },
    {
      icon: Zap,
      title: 'სწრაფი და მარტივი',
      description: 'მარტივი ინტერფეისი რომელიც შეისწავლება 5 წუთში'
    },
    {
      icon: Users,
      title: '24/7 მხარდაჭერა',
      description: 'ქართულენოვანი მხარდაჭერის გუნდი ყოველთვის გამოგეხმარება'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ყველაფერი რაც საჭიროა შენი ბიზნესისთვის
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ჩვენი პლატფორმა აერთიანებს ყველა საჭირო ფუნქციას, რათა შენ შეძლო შენი ბიზნესის 
            ეფექტური მართვა ერთ ადგილას
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 hover:border-blue-200"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              რატომ ვართ საუკეთესო არჩევანი?
            </h3>
            <p className="text-lg text-gray-600">
              ჩვენ ვიცით რა პრობლემები აქვთ საქართველოში მყოფ ბიზნესებს
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-4 rounded-xl shadow-sm mb-4 mx-auto w-fit">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">რეგისტრირებული ბიზნესი</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">₾2M+</div>
              <div className="text-gray-600">დამუშავებული ინვოისები</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-indigo-600 mb-2">24/7</div>
              <div className="text-gray-600">მხარდაჭერა</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}