import Image from 'next/image';
import image from '../public/image.webp';

function Main() {
  return (
    <main className="container mb-8  mx-auto px-4 sm:px-6 lg:px-8  pb-10 md:pb-16 lg:pb-20 xl:pt-34 xl:pb-20 2xl:pt-40 2xl:pb-34 2xl:max-w-7xl 2xl:mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 lg:gap-16" dir="rtl">
      <div className="w-full md:w-1/2 order-2 md:order-1">
      <p className="text-right font-extrabold text-3xl sm:text-[50px] md:text-[55px] leading-relaxed animate-gradient bg-gradient-to-r from-yellow-800 via-yellow-300 to-yellow-300 text-transparent bg-clip-text animate-textFade">
      لو جاهز تبدأ رحلتك <br /> نحو جسم صحي ورياضي
  <br />
  فأنا هنا عشان أساعدك
</p>
</div>
<div className="w-full md:w-auto order-1 md:order-2 flex justify-center md:justify-start mb-6 md:mb-0 relative">
  {/* Blurry Dot in Background */}
<div
  className="absolute -top-16 -left-16 w-72 h-72 rounded-full z-0 animate-pulseOpacity"
  style={{
    backgroundColor: '#403618',
    filter: 'blur(60px)',
  }}
></div>

  {/* الصورة - تتحرك بشكل قطري عكسي */}
  <div className="relative rounded-xl overflow-hidden animate-float z-10">
    <Image
      src={image}
      alt="كابتن عاطف صلاح"
      className="w-full max-w-[450px] xl:max-w-[750px] 2xl:max-w-[900px] h-auto rounded-xl"
      width={800}
      height={800}
    />
  </div>
</div>

      </div>
    </main>
  );
}

export default Main;
