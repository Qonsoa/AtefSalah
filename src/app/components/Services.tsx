import React from "react";
import Image from 'next/image';
import dietBookImg from "../public/diet-book.webp";
import Link from "next/link";

const Services = () => {
  return (
    <section dir="rtl" id="services" className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20 pt-20">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-center relative mb-8 sm:mb-12 text-yellow-400 after:content-[''] after:block after:w-24 sm:after:w-32 after:h-1 after:mx-auto after:mt-4 sm:after:mt-5 after:bg-gradient-to-r after:from-transparent after:via-yellow-400 after:to-transparent after:opacity-70">
        خدمات
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
        {/* بطاقة كتاب الدايت */}
        <div dir="rtl" className="bg-yellow-800/20 border border-yellow-400 rounded-2xl p-6 sm:p-8 flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-300 mb-4 sm:mb-6 text-center">
            كتاب الدايت
          </h3>
          <Image
            src={dietBookImg}
            alt="كتاب الدايت" 
            className="rounded-xl w-full mb-5 sm:mb-6 max-h-[250px] sm:max-h-[300px] object-cover"
            width={500}
            height={300}
          />
          <h4 className="text-lg sm:text-xl leading-relaxed font-bold mb-3 sm:mb-4">
            تجد في هذا الكتاب الآتي:
          </h4>
          <ul className="mb-6 sm:mb-8 list-disc list-inside space-y-2 sm:space-y-3" dir="rtl">
            <li className="text-sm sm:text-base">100 وصفة صحية، كل وصفة محسوبة السعرات والبروتين</li>
            <li className="text-sm sm:text-base">40 وصفة لـ سناك صحي</li>
            <li className="text-sm sm:text-base">وجود ترشيح لأفضل المكملات الغذائية و وظائفها</li>
          </ul>

          {/* السعر مع الخصم */}
          <div className="flex justify-right items-baseline gap-3 mb-4">
            <div className="text-center font-bold text-3xl sm:text-4xl">
              <span className="font-extrabold">200</span>
              <sup className="align-top text-lg"> ج</sup>
            </div>
            <div className="text-gray-400 text-lg sm:text-xl">
              <span className="line-through">400 ج</span>
            </div>
          </div>
<Link href="/products/diet-book">

          <button className="w-full bg-yellow-600 text-white font-bold py-3 sm:py-4 rounded-xl transition duration-500 hover:bg-yellow-700 hover:scale-105 text-sm sm:text-base">
            اشتري الآن
          </button>
</Link>
        </div>

        {/* بطاقة كورس مشروع الجيم */}
        <div className="bg-yellow-800/20 border border-yellow-400 rounded-2xl p-6 sm:p-8 flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300" dir="rtl">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-300 mb-4 sm:mb-6 text-center">
            كورس إنشاء مشروع جيم
          </h3>
          <div className="aspect-video w-full mb-5 sm:mb-6">
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/5BWA8LmmYfw?si=GY0Bz9NRLOjUsKXT"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <h4 className="text-lg sm:text-xl leading-relaxed font-bold mb-3 sm:mb-4">
            تجد في هذا الكورس الآتي:
          </h4>
          <ul className="mb-6 sm:mb-8 list-disc list-inside flex-grow space-y-2 sm:space-y-3" dir="rtl">
            <li className="text-sm sm:text-base">دراسة السوق والمنافسين</li>
            <li className="text-sm sm:text-base">اختيار الأجهزة والمساحة المناسبة</li>
            <li className="text-sm sm:text-base">الحفاظ على العملاء وجذب عملاء اكثر</li>
            <li className="text-sm sm:text-base">تحديد اسعار الاشتراك بناء على مستوى الجيم</li>
            <li className="text-sm sm:text-base">ملخص خبرة الـ 15 عام موجودة في هذا الكورس</li>
          </ul>

          {/* السعر مع الخصم */}
          <div className="flex justify-right items-baseline gap-3 mb-4">
            <div className="text-right font-bold text-3xl sm:text-4xl">
              <span className="font-extrabold">500</span>
              <sup className="align-top text-lg"> ج</sup>
            </div>
            <div className="text-gray-400 text-lg sm:text-xl">
              <span className="line-through">700 ج</span>

            </div>
          </div>
<Link href="/products/gym-course">
          <button className="w-full bg-yellow-600 text-white font-bold py-3 sm:py-4 rounded-xl transition duration-500 hover:bg-yellow-700 hover:scale-105 text-sm sm:text-base">
            اشترك الآن
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
