'use client';

import { FileText, Calculator, TrendingUp, Shield, Clock, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 pb-16">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>საქართველოში შექმნილი</span>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-blue-600">Invoice + VAT</span><br />
              <span className="text-gray-900">+ Cashflow</span><br />
              <span className="text-indigo-600">SaaS</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              მართე შენი ბიზნესის ფინანსები ერთ პლატფორმაზე. ინვოისები, დ.ღ.გ., და cash flow-ს 
              მენეჯმენტი საქართველოს კანონმდებლობის გათვალისწინებით.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg">
                დარეგისტრირდი უფასოდ
              </button>
              <button className="w-full sm:w-auto border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors">
                იხილე Demo
              </button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-8 mt-12 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span>100% უსაფრთხო</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>24/7 მხარდაჭერა</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-purple-500" />
                <span>1000+ ბიზნესი</span>
              </div>
            </div>
          </div>
          
          {/* Right column - Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="space-y-6">
                {/* Mock invoice header */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-8 h-8 text-blue-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">ინვოისი #1234</h3>
                      <p className="text-sm text-gray-500">2024-01-17</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">₾2,340</div>
                    <div className="text-sm text-gray-500">დ.ღ.გ. ჩათვლით</div>
                  </div>
                </div>
                
                {/* Mock invoice items */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Web Development</span>
                    <span className="font-semibold text-gray-900">₾1,800</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">დ.ღ.გ. (18%)</span>
                    <span className="font-semibold text-gray-900">₾324</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Hosting Setup</span>
                    <span className="font-semibold text-gray-900">₾216</span>
                  </div>
                </div>
                
                {/* Status indicators */}
                <div className="flex space-x-3 pt-4">
                  <div className="flex items-center space-x-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>გადახდილი</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">
                    <Calculator className="w-3 h-3" />
                    <span>დ.ღ.გ. გაანგარიშებული</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-green-500 text-white p-4 rounded-xl shadow-lg">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-purple-500 text-white p-4 rounded-xl shadow-lg">
              <Calculator className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}