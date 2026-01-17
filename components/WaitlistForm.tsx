'use client';

import { useState } from 'react';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          businessName,
          businessType,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('წარმატებით დარეგისტრირდი! მოგწერთ ახალი ამბების შესახებ.');
        setEmail('');
        setBusinessName('');
        setBusinessType('');
      } else {
        setStatus('error');
        setMessage(data.error || 'რაღაც არასწორად მოხდა. სცადე ხელმეორედ.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('კავშირის პრობლემა. სცადე ხელმეორედ.');
    } finally {
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
        <div className="text-center mb-8">
          <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            შემოგვიერთდი Waitlist-ში
          </h3>
          <p className="text-gray-600">
            იყავი პირველთა შორის ვისაც შეეძლება ჩვენი პლატფორმის გამოყენება
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              ელექტრონული ფოსტა *
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
              placeholder="your@email.com"
              disabled={status === 'loading'}
            />
          </div>

          <div>
            <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
              ბიზნესის სახელწოდება
            </label>
            <input
              type="text"
              id="businessName"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
              placeholder="შენი ბიზნესის სახელი"
              disabled={status === 'loading'}
            />
          </div>

          <div>
            <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
              ბიზნესის ტიპი
            </label>
            <select
              id="businessType"
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors bg-white"
              disabled={status === 'loading'}
            >
              <option value="">აირჩიე ბიზნესის ტიპი</option>
              <option value="freelancer">ფრილანსერი</option>
              <option value="small-business">მცირე ბიზნესი (მსბ)</option>
              <option value="medium-business">საშუალო ბიზნესი</option>
              <option value="startup">სტარტაპი</option>
              <option value="agency">სააგენტო</option>
              <option value="ecommerce">ელექტრონული კომერცია</option>
              <option value="consulting">კონსალტინგი</option>
              <option value="other">სხვა</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={status === 'loading' || !email.trim()}
            className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>იტვირთება...</span>
              </>
            ) : (
              <span>დამატე Waitlist-ში</span>
            )}
          </button>
        </form>

        {/* Status Messages */}
        {status === 'success' && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-medium text-green-800">წარმატება!</h4>
              <p className="text-sm text-green-700 mt-1">{message}</p>
            </div>
          </div>
        )}

        {status === 'error' && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-medium text-red-800">შეცდომა</h4>
              <p className="text-sm text-red-700 mt-1">{message}</p>
            </div>
          </div>
        )}

        {/* Benefits */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-4 text-center">რას მიიღებ:</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>ადრეული წვდომა ბეტა ვერსიაზე</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>50% ფასდაკლება პირველ წელს</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>უფასო სეტაპი და ტრენინგი</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>პირადი მხარდაჭერა</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}