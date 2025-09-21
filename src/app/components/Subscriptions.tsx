import React from "react";
import Link from 'next/link';

const Subscriptions = () => {
  return (
    <section
      id="subscriptions"
      className=" text-white px-4 sm:px-6 lg:px-8 xl:px-12 pt-20"
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-center relative mb-8 sm:mb-12 text-yellow-400 after:content-[''] after:block after:w-24 sm:after:w-32 after:h-1 after:mx-auto after:mt-4 sm:after:mt-5 after:bg-gradient-to-r after:from-transparent after:via-yellow-400 after:to-transparent after:opacity-70">
        باقات الإشتراك
      </h2>

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 items-stretch md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 place-items-center">
          
          {/* باقة المحارب */}
          <div
            className="relative p-10 border border-gray-800 rounded-2xl w-full max-w-sm overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #2b2516 0%, #161618 100%)'
            }}
            dir="rtl"
          >
            {/* الدائرة الشمسية */}
            <div 
              className="absolute -top-12 -right-12 w-32 h-32 z-1000 rounded-full"
              style={{ backgroundColor: '#2b271d' }}
            ></div>
            
            <h3 className="text-center text-yellow-500 text-2xl sm:text-3xl font-bold mb-4 relative z-10">
              باقة المحارب
            </h3>
            <p className="text-center font-bold text-2xl mb-3.5 relative z-10">
              <span className="text-4xl font-extrabold">700</span>
              <span className="align-top"> <sup>ج / شهر</sup></span>
            </p>
            <p className="text-gray-400 relative z-10">
              تحتوي على:
            </p>
            <ul className="package-features text-sm sm:text-base mt-2 relative z-10">

              <li className="pt-4">
                <span className="pl-3 font-bold text-yellow-300">✓</span> متابعة
                أسبوعية مع مدرب معتمد
              </li>

              <li className="pt-4">
                <span className="pl-3 font-bold text-yellow-300">✓</span> خطة غذائية
                مصممة حسب هدفك وميزانيتك
              </li>
              <li className="pt-4">
                <span className="pl-3 font-bold text-yellow-300">✓</span> برنامج
                تمرين مخصص لمستواك (جيم أو بيت)
              </li>
              <li className="pt-4">
                <span className="pl-3 font-bold text-yellow-300">✓</span> نظام ذكي
                لقياس وتتبع التقدم
              </li>
              <li className="pt-4">
                <span className="pl-3 font-bold text-yellow-300">✓</span> فيديوهات
                شرح للتمارين ولتحضير الوجبات
              </li>

              <li className="pt-4">
                <span className="pl-3 font-bold text-yellow-300">✓</span> ترشيح أفضل
                المكملات الغذائية والفيتامينات
              </li>
            </ul>
            <div className="flex justify-center relative z-10">
              <Link href="/plan/warrior">
                <button className="mt-8 bg-yellow-500/30 border border-yellow-300 font-bold text-white px-16 py-2 rounded-xl transition-all duration-300 hover:bg-yellow-500/40">
                  اشترك الآن
                </button>
              </Link>
            </div>
          </div>

          {/* باقة النخبة */}
          <div
            className="relative p-10 border border-gray-800 rounded-2xl w-full max-w-sm lg:max-w-sm overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #2b2516 0%, #161618 100%)'
            }}
            dir="rtl"
          >
            {/* الدائرة الشمسية */}
            <div 
              className="absolute -top-12 -right-12 w-32 h-32 rounded-full"
              style={{ backgroundColor: '#2b271d' }}
            ></div>
             
            <h3 className="text-center text-yellow-500 text-2xl sm:text-3xl font-bold mb-4 relative z-10">
              باقة النخبة
            </h3>
            <p className="text-center font-bold text-2xl mb-3.5 relative z-10">
              <span className="text-4xl font-extrabold">1200</span>
              <span className="align-top"> <sup>ج / شهر</sup></span>
            </p>
            <p className="text-gray-400 relative z-10">
              لمحبين المتابعة اليومية
            </p>
            <ul className="package-features  text-sm sm:text-base mt-2 relative z-10 items-stretch">

              <li className="pt-4">
                <span className="pl-3 font-bold text-yellow-300">✓</span> متابعة
                يومية مع مدرب معتمد
              </li>


              <li className="pt-4">
                <span className="pl-3 font-bold text-yellow-300">✓</span> وصول كامل
                لكتاب الدايت مجاناً
              </li>
              <li className="pt-4">
                <span className="pl-3 font-bold text-yellow-300">✓</span> جلسة مع
                أخصائي علاج طبيعي شهرياً
              </li>
              <li className="pt-4">
                <span className="pl-3 font-bold text-yellow-300">✓</span> مكالمة
                فيديو أسبوعية مع مدربك
              </li>
              <li className="pt-4">
                <span className="pl-3 font-bold text-yellow-300">✓</span> تدريبات
                فيديو أسبوعية مع مدربك
              </li>
              <li className="pt-4">
                <span className="pl-3 font-bold text-yellow-300">✓</span> تحديث
                وتغيير البرنامج مع التقدم في المستوى
              </li>
            </ul>
            <div className="flex justify-center relative z-10">
              <Link href="/plan/elite">
                <button className="mt-8 bg-yellow-500/30 border border-yellow-300 font-bold text-white px-16 py-2 rounded-xl transition-all duration-300 hover:bg-yellow-500/40">
                  اشترك الآن
                </button>
              </Link>
            </div>
          </div>

          {/* باقة الأسطورة */}
          <div
            className="p-10 bg-[#432004] rounded-2xl border-t-5 border-t-yellow-300 w-full max-w-sm xl:col-span-1 md:col-span-2 lg:col-3 lg:col-start-3 xl:col-start-auto md:col-start-1 md:justify-self-center"
            dir="rtl"
          >
            <h3 className="text-center text-yellow-300 text-2xl sm:text-3xl font-bold mb-4">
              باقة الـ VIP
            </h3>
            <p className="text-center font-bold text-2xl mb-3.5 relative z-10">
              <span className="text-4xl font-extrabold">2500</span>
              <span className="align-top"> <sup>ج / شهر</sup></span>
            </p>
            <p className="text-gray-300">
              أعلى مستوى من الدعم والتخصيص
            </p>
            <ul className="package-features text-sm sm:text-base mt-2">
              <li className="pt-4">
                <span className="pl-2 font-bold text-yellow-300">✓</span> متابعة
                مع كابتن عاطف صلاح شخصياً
              </li>
              <li className="pt-4">
                <span className="pl-2 font-bold text-yellow-300">✓</span> خطة
                غذائية يومية متغيرة حسب مزاجك وأكلك المفضل
              </li>
              <li className="pt-4">
                <span className="pl-2 font-bold text-yellow-300">✓</span> تجهيز
                بطولات (تمرين على الأوضاع - جدول خاص)
              </li>
              <li className="pt-4">
                <span className="pl-2 font-bold text-yellow-300">✓</span> وصفات سريعة للأشخاص المشغولين              </li>
              <li className="pt-4">
                <span className="pl-2 font-bold text-yellow-300">✓</span> مكالمتين
                Zoom شهرية مع كابتن عاطف صلاح 
              </li>
              <li className="pt-4">
                <span className="pl-2 font-bold text-yellow-300">✓</span> مفاجآت
                شهرية (خصومات، جلسات مجانية)
              </li>
            </ul>
            <div className="flex justify-center">
              <Link href="/plan/legend">
                <button className="mt-8 bg-yellow-600 font-bold text-white px-16 py-2 rounded-xl transition-all duration-300 hover:bg-yellow-700">
                  اشترك الآن
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscriptions;