'use client'
import { useState } from 'react';
import { useParams } from 'next/navigation';

const plans = {
  warrior: {
    name: 'باقة المحارب',
    monthlyPrice: 700,
    features: [
      'خطة غذائية مصممة حسب هدفك وميزانيتك',
      'برنامج تمرين مخصص لمستواك (جيم أو بيت)',
      'نظام ذكي لقياس وتتبع التقدم',
      'فيديوهات شرح للتمارين ولتحضير الوجبات',
      'متابعة أسبوعية مع مدرب معتمد',
      'ترشيح أفضل المكملات الغذائية والفيتامينات'
    ]
  },
  elite: {
    name: 'باقة النخبة',
    monthlyPrice: 1200,
    features: [
      'وصول كامل لكتاب الدايت مجاناً',
      'جلسة مع أخصائي علاج طبيعي شهرياً',
      'متابعة يومية مع مدرب معتمد',
      'مكالمة فيديو أسبوعية مع مدربك',
      'تدريبات إضافية "مرونة، تمدد، استشفاء"',
      'تحديث وتغيير البرنامج مع التقدم في المستوى'
    ]
  },
  legend: {
    name: 'باقة الأسطورة',
    monthlyPrice: 2500,
    features: [
      'متابعة مع كابتن عاطف صلاح شخصياً',
      'خطة غذائية يومية متغيرة حسب مزاجك وأكلك المفضل',
      'تجهيز بطولات (تمرين على الأوضاع - جدول خاص)',
      'متابعة يومية دقيقة من فريق كامل (تغذية + علاج طبيعي)',
      'مكالمتين Zoom شهرية مع الكابتن عاطف صلاح شخصيًا',
      'مفاجآت شهرية (خصومات، جلسات مجانية)'
    ]
  }
};

const durations = [
  { months: 1, label: 'شهر واحد' },
  { months: 3, label: '3 شهور' },
  { months: 6, label: '6 شهور' },
  { months: 12, label: 'سنة كاملة' }
];

const redirectLinks: Record<string, Record<number, string>> = {
  warrior: {
    1: 'https://staging.fawaterk.com/paymentRequest/show/378',
    3: 'https://staging.fawaterk.com/paymentRequest/show/379',
    6: 'https://staging.fawaterk.com/paymentRequest/show/380',
    12: 'https://staging.fawaterk.com/paymentRequest/show/381'
  },
  elite: {
    1: 'https://staging.fawaterk.com/paymentRequest/show/382',
    3: 'https://staging.fawaterk.com/paymentRequest/show/383',
    6: 'https://staging.fawaterk.com/paymentRequest/show/384',
    12: 'https://staging.fawaterk.com/paymentRequest/show/385'
  },
  legend: {
    1: 'https://staging.fawaterk.com/paymentRequest/show/386',
    3: 'https://staging.fawaterk.com/paymentRequest/show/387',
    6: 'https://staging.fawaterk.com/paymentRequest/show/388',
    12: 'https://staging.fawaterk.com/paymentRequest/show/389'
  }
};

export default function SubscribePage() {
  const params = useParams();
  const [selectedDuration, setSelectedDuration] = useState(1);
  
  const planKey = params.plan as keyof typeof plans;
  const plan = plans[planKey];

  const totalPrice = plan.monthlyPrice * selectedDuration;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = redirectLinks[planKey][selectedDuration];
    window.location.href = target;
  };

  return (
    <div className="min-h-screen bg-[#17171b] text-white pt-12 mb-8" dir="rtl">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8 text-yellow-400">
          {plan.name}
        </h1>
        
        <div className="bg-yellow-800/10 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-yellow-300">مزايا الباقة:</h2>
          <ul className="space-y-3">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="text-yellow-400 ml-3">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-yellow-800/10 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-yellow-300">اختر مدة الاشتراك:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {durations.map((duration) => {
              const price = plan.monthlyPrice * duration.months;
              const isSelected = selectedDuration === duration.months;
              
              return (
                <div
                  key={duration.months}
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                    isSelected 
                      ? 'border-yellow-400 bg-yellow-400/10' 
                      : 'border-gray-600 hover:border-yellow-400'
                  }`}
                  onClick={() => setSelectedDuration(duration.months)}
                >
                  <div className="flex items-center">
                    <input
                      type="radio"
                      checked={isSelected}
                      onChange={() => setSelectedDuration(duration.months)}
                      className={`ml-3 w-5 h-5 ${isSelected ? 'accent-yellow-400' : 'appearance-none w-5 h-5 border border-gray-500 rounded-full bg-yellow-800/10'}`}
                    />
                    <div>
                      <div className="font-bold">{duration.label}</div>
                      <div className="text-2xl font-bold text-yellow-400">
                        {price} جنيه
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-yellow-800/10 rounded-xl p-6">
          
          <div className="bg-yellow-800/20 rounded-lg p-4 mb-6">
            <div className="flex justify-between">
            <p>بعد اشتراكك يتم التواصل معك من قبل خدمة عملائنا لتفعيل الاشتراك، ومن ثم يتم بناء نظامك التدريبي والغذائي</p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-600 text-white font-bold py-3 rounded-xl hover:bg-yellow-700 transition duration-300"
          >
            اشترك الآن
          </button>
        </form>
      </div>
    </div>
  );
}