'use client'
import { useParams } from 'next/navigation';

const products = {
  'diet-book': {
    name: 'كتاب الدايت',
    price: 200,
    originalPrice: 400,
    description: 'كتاب شامل يحتوي على 100 وصفة صحية و40 وصفة سناك صحي',
    features: [
      '100 وصفة صحية، كل وصفة محسوبة السعرات والبروتين',
      '40 وصفة لـ سناك صحي',
      'وجود ترشيح لأفضل المكملات الغذائية و وظائفها'
    ]
  },
  'gym-course': {
    name: 'كورس إنشاء مشروع جيم',
    price: 500,
    originalPrice: 700,
    description: 'كورس شامل لتعلم كيفية إنشاء وإدارة مشروع جيم ناجح',
    features: [
      'دراسة السوق والمنافسين',
      'اختيار الأجهزة والمساحة المناسبة',
      'الحفاظ على العملاء وجذب عملاء اكثر',
      'تحديد اسعار الاشتراك بناء على مستوى الجيم',
      'ملخص خبرة الـ 15 عام موجودة في هذا الكورس'
    ]
  }
};

// روابط الدفع كما أرسلت
const externalLinks: Record<string, string> = {
  'diet-book': 'https://staging.fawaterk.com/paymentRequest/show/390',
  'gym-course': 'https://staging.fawaterk.com/paymentRequest/show/391'
};

export default function PurchasePage() {
  const params = useParams();
  const productKey = params.product as keyof typeof products;
  const product = products[productKey];

  if (!product) {
    return <div className="min-h-screen bg-gray-900 text-white pt-20" dir="rtl">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-2xl font-bold text-center">المنتج غير موجود</h1>
      </div>
    </div>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const link = externalLinks[productKey as string];
    if (link) {
      // توجيه إلى رابط الفاتورة المخصص للمنتج
      window.location.href = link;
    } else {
      alert('رابط الدفع غير متوفر لهذا المنتج');
    }
  };

  return (
    <div className="min-h-screen bg-gray-[#17171b] text-white pt-12 mb-8" dir="rtl">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8 text-yellow-400">
          {product.name}
        </h1>

        {/* تفاصيل المنتج */}
        <div className="bg-yellow-800/10 rounded-xl p-6 mb-8">
          <p className="text-lg mb-6 text-gray-300">{product.description}</p>

          <h2 className="text-xl font-bold mb-4 text-yellow-300">محتويات {product.name}:</h2>
          <ul className="space-y-3">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="text-yellow-400 ml-3">✓</span>
                {feature}
              </li>
            ))}
          </ul>

          {/* السعر */}
          <div className="mt-8 p-4 bg-yellow-800/20 rounded-lg">
            <div className="flex items-center justify-center gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">
                  {product.price} جنيه
                </div>
                {product.originalPrice && (
                  <div className="text-gray-400 line-through">
                    {product.originalPrice} جنيه
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* زر الاشتراك فقط - بدون حقول الاسم/رقم */}
        <form onSubmit={handleSubmit} className="bg-yellow-800/10 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4 text-yellow-300">ما بعد الشراء:</h2>

          <div className="bg-yellow-800/20 rounded-lg p-4 mb-6">
            <div className="flex justify-between">
            <p>بعد شرائك الخدمة يتم التواصل معك من قبل خدمة عملائنا في أسرع وقت لتسليمك طلبك</p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-600 text-white font-bold py-3 rounded-xl hover:bg-yellow-700 transition duration-300"
          >
            اشترك
          </button>
        </form>
      </div>
    </div>
  );
}
