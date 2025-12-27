import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from "@/Constant/skills";

const Skills = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto" id="skills">
      <h2 className="text-4xl font-bold text-white mb-12 tracking-tight">
        Skills
      </h2>
      <div className="flex flex-col gap-6">
        {skills.map((section, index) => (
          <Card
            key={index}
            className="flex flex-col h-full bg-white/5 border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 group"
          >
            <CardHeader>
              <CardTitle
                className="text-xl font-bold"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #fdba74, #f59e0b, #ea580c)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {section.category}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3">
                {section.items.map((item, idx) => (
                  <li key={idx} className="text-sm">
                    {"label" in item && item.label && (
                      <span className="font-semibold block mb-1 text-gray-200 text-xl">
                        {item.label}
                      </span>
                    )}
                    <span className="text-gray-400 leading-relaxed">
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
