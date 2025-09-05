import { useEffect, useRef } from "react";

const newsItems = [
  { category: "Admissions", text: "Admissions Open in BS Artificial Intelligence (AI) Fall-2025", link: "#" },
  { category: "Tenders", text: "Re-Tender Notice: Supply of Stationary Items for the Financial year 2025-26", link: "#" },
  { category: "Circulars", text: "Return of 21st Convocation 2024 Gowns by 15th September 2025", link: "#" },
  { category: "Events", text: "DLSEI 3.0- COHORT 2 IS LIVE!", link: "#" },
  { category: "Scholarships", text: "1st EML for BEEF Scholarship announced", link: "#" },
  { category: "Examination", text: "1st Extended Exam Notification of LL.B Annual 2024", link: "#" },
  { category: "Journals", text: "JEHR Journal Vol. 17 No. 1 (2024) Published", link: "#" },
  { category: "Others", text: "UoB Online Hostel Portal is open", link: "#" },
];

const VerticalMarquee = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollAmount = 0;

    const scroll = () => {
      scrollAmount += 1; // scroll speed
      if (scrollAmount >= container.scrollHeight / 2) {
        scrollAmount = 0; // reset for infinite loop
      }
      container.scrollTop = scrollAmount;
    };

    const interval = setInterval(scroll, 40); // smooth scroll
    return () => clearInterval(interval);
  }, []);

  return (
    <aside className="w-full md:w-1/3 bg-white text-black shadow-lg rounded-lg overflow-hidden h-[400px]">
      <h2 className="bg-blue-600 text-white text-center py-3 font-bold">
        News & Events
      </h2>
      <div
        ref={containerRef}
        className="h-[350px] overflow-hidden px-4 py-2 text-sm leading-relaxed"
      >
        {/* Duplicate items for infinite loop */}
        {[...newsItems, ...newsItems].map((item, idx) => (
          <div key={idx} className="mb-3 border-b pb-2">
            <p className="text-xs text-gray-500 font-semibold">{item.category}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 hover:underline"
            >
              {item.text}
            </a>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default VerticalMarquee;
