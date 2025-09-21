// components/About.tsx

import React from 'react';

const About: React.FC = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20" dir="rtl">
      <div className="max-w-4xl mx-auto text-right">

        {/* العنوان */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-300 mb-4">
          من أنا؟
        </h2>

        {/* الفقرة التعريفية */}
        <p className="text-lg md:text-xl leading-relaxed mb-4">
          عاطف صلاح، مدرب دولي معتمد وأخصائي تغذية حاصل على شهادتي
          <br />
          <span className="font-bold text-yellow-400">ISSA CFT</span> في التدريب الشخصي و
          <span className="font-bold text-yellow-400"> ISSA Nutritionist </span> في التغذية، بالإضافة إلى
        </p>

        {/* شهادة إعداد القادة */}
        <div className=" max-w-[97%] border-l-[3px] sm:max-w-[97%] md:max-w-[60%] lg:max-w-[60%] xl:max-w-[60%] bg-yellow-500/10 border-yellow-400 rounded-l-[10px] p-4 mb-6">
          <p className="font-semibold text-base md:text-lg leading-relaxed">
            شهادة مدرب معتمد من معهد إعداد القادة بالمملكة السعودية.
          </p>
        </div>


      </div>
    </section>
  );
};

export default About;
