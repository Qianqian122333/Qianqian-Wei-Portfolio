import React from "react";

interface Job {
  company: string;
  role: string;
  time: string;
  location: string;
  status: string;
  description?: string;
}

interface JobTimelineProps {
  jobs: Job[];
}

const JobTimeline: React.FC<JobTimelineProps> = ({ jobs }) => {
  return (
    <div className="relative border-l-2 border-gray-700 ml-4 space-y-10">
      {jobs.map((job, index) => (
        <div key={index} className="relative pl-8">
          {/* 时间线圆点 */}
          <div
            className="absolute -left-2.25 top-1 w-4 h-4 rounded-full border-4 border-black"
            style={{
              backgroundImage:
                "linear-gradient(to right, #fdba74, #f59e0b, #ea580c)",
            }}
          />

          <div className="flex flex-col gap-2">
            {/* 公司名称和时间 */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="text-xl font-bold text-white">{job.company}</h3>
              <span
                className="text-sm font-medium px-3 py-1 rounded-full w-fit bg-white/5 border border-white/10"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #fdba74, #f59e0b, #ea580c)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {job.time}
              </span>
            </div>
            {/* 职位 */}
            <h4 className="text-lg font-medium text-gray-300">{job.role}</h4>

            {/* 地点和状态 */}
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <span>{job.location}</span>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span>{job.status}</span>
            </div>

            {/* 描述 (如果有) */}
            {job.description && (
              <p className="text-gray-400 leading-relaxed mt-1">
                {job.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobTimeline;
