export default function HiringProcess() {
  const steps = [
    {
      number: "1",
      title: "Post a Job",
      description: "Create a job listing and attract top professionals.",
    },
    {
      number: "2",
      title: "Search & Filter",
      description: "Use advanced search tools to find the perfect match.",
    },
    {
      number: "3",
      title: "Review & Shortlist",
      description: "Browse detailed profiles and shortlist potential hires.",
    },
    {
      number: "4",
      title: "Connect & Hire",
      description:
        "Message, schedule interviews, and onboard candidates seamlessly.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {steps.slice(0, 3).map((step) => (
          <div
            key={step.number}
            className="rounded-2xl border border-[#B5AEAC] p-6 flex items-start"
          >
            <div className="flex items-start">
              <span className="text-4xl sm:text-5xl font-bold text-primary mr-4">
                {step.number}
              </span>
              <div className="border-l border-[#747474] pl-4">
                <h3 className="text-xl font-montserrat font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-[#282828]">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-center lg:hidden">
          <div className="rounded-2xl border border-[#B5AEAC] p-6 flex items-start md:max-w-md w-full">
            <div className="flex items-start">
              <span className="text-4xl sm:text-5xl font-bold text-primary mr-4">
                {steps[3].number}
              </span>
              <div className="border-l border-[#747474] pl-4">
                <h3 className="text-xl font-montserrat font-semibold mb-2">
                  {steps[3].title}
                </h3>
                <p className="text-[#282828]">{steps[3].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex max-lg:hidden justify-center">
        <div className="rounded-2xl border border-[#B5AEAC] p-6 flex items-start md:max-w-md w-full">
          <div className="flex items-start">
            <span className="text-4xl sm:text-5xl font-bold text-primary mr-4">
              {steps[3].number}
            </span>
            <div className="border-l border-[#747474] pl-4">
              <h3 className="text-xl font-montserrat font-semibold mb-2">
                {steps[3].title}
              </h3>
              <p className="text-[#282828]">{steps[3].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
