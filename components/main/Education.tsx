import { education } from "@/Constant/education";


const Education = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-white mb-12 tracking-tight">
        Education Background
      </h2>

      <div className="relative border-l-2 border-gray-700 ml-4 space-y-10">
        {education.map((edu, index) => (
          <div key={index} className="relative pl-8">
            {/* 时间线圆点 */}
            <div
              className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 border-black"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #fdba74, #f59e0b, #ea580c)",
              }}
            />

            <div className="flex flex-col gap-2">
              {/* 学校名称和时间 */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                <span
                  className="text-sm font-medium px-3 py-1 rounded-full w-fit bg-white/5 border border-white/10"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #fdba74, #f59e0b, #ea580c)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {edu.period}
                </span>
              </div>

              {/* 学位 */}
              <h4 className="text-lg font-medium text-gray-300">
                {edu.degree}
              </h4>

              {/* 详细信息 (如果有) */}
              {edu.details && (
                <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="leading-relaxed">
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
