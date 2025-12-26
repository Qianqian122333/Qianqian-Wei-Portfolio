import Image from "next/image";

const Intro = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-8 pb-4 space-y-6">
      {/* 头像 */}
      <div className="w-36 h-36 rounded-full overflow-hidden ring-4 ring-orange-400/20 shadow-2xl flex-shrink-0">
        <Image
          src="/qianqian-wei.jpg"
          alt="Qianqian Wei"
          width={144}
          height={144}
          className="object-cover w-full h-full"
          priority
        />
      </div>
      {/* 名字 - 橙色金属渐变 */}
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-orange-400 via-orange-550 to-orange-700">
        Qianqian Wei
      </h1>
      {/* 职位 - 白色 */}
      <p className="text-xl md:text-2xl font-medium text-white tracking-wide">
        FullStack Software Engineer
      </p>
      {/* 描述 - 灰白 */}
      <p className="text-base md:text-lg text-gray-400 max-w-xl text-center leading-relaxed font-light">
        Full-Stack Engineer with a Frontend focus and a background in UI/UX
        Design
      </p>
    </div>
  );
};

export default Intro;
