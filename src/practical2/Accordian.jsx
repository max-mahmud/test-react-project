import React, { useState } from "react";

function Accordion() {
  const [activeSections, setActiveSections] = useState([]);

  const toggleSection = (sectionId) => {
    if (activeSections.includes(sectionId)) {
      setActiveSections(activeSections.filter((id) => id !== sectionId));
    } else {
      setActiveSections([...activeSections, sectionId]);
    }
    // setActiveSections(activeSections == sectionId ? null : sectionId);
  };

  const sections = [
    { id: 1, title: "Section 1", content: "Content for section 1" },
    { id: 2, title: "Section 2", content: "Content for section 2" },
    { id: 3, title: "Section 3", content: "Content for section 3" },
  ];

  return (
    <div className="accordion">
      {sections.map((section) => (
        <section key={section.id}>
          <button onClick={() => toggleSection(section.id)}>{section.title}</button>
          {activeSections == section.id && <div>{section.content}</div>}
        </section>
      ))}
    </div>
  );
}

export default Accordion;

// const Example = () => {
//   const [active, setActive] = useState(null);
//   return (
//     <div>
//       {data.map((item, i) => (
//         <div key={i}>
//           <p onClick={() => setActive(item.id)}>{item.name}</p>
//           {active === item.id && <span>{item.avg}</span>}
//         </div>
//       ))}
//     </div>
//   );
// };
