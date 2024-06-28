import React, { useState } from "react";

/**
 * Accordion component that allows multiple sections to be expanded at once
 * or only one section at a time.
 */
function Accordion() {
  // State to keep track of the active sections
  const [activeSections, setActiveSections] = useState([]);
  // State to toggle between multi-select and single-select mode
  const [multiSelect, setMultiSelect] = useState(false);

  /**
   * Toggles the active state of a section.
   * @param {number} sectionId - The id of the section to toggle.
   */
  const toggleSection = (sectionId) => {
    if (multiSelect) {
      // If in multi-select mode, toggle the section's active state
      if (activeSections.includes(sectionId)) {
        setActiveSections(
          activeSections.filter((id) => id !== sectionId)
        );
      } else {
        setActiveSections([...activeSections, sectionId]);
      }
    } else {
      // If in single-select mode, clear all active sections
      setActiveSections([sectionId])
    }
  };

  // Array of sections to be rendered
  const sections = [
    {
      id: 1,
      title: "Section 1",
      content:
        "This is the content of section 1 and it is very long and it is very long",
    },
    {
      id: 2,
      title: "Section 2",
      content: "This is the content of section 2 and it is very long",
    },
    {
      id: 3,
      title: "Section 3",
      content: "This is the content of section 3 and it is very long",
    },
  ];

  return (
    <div className="accordion">
      {/* Button to toggle multi-select mode */}
      <button
        onClick={() => {setMultiSelect(!multiSelect); setActiveSections([]);}}
      >
        {multiSelect ? "Multi Select" : "Single Select"}
      </button>
      {sections.map((section) => (
        <section key={section.id}>
          {/* Button to toggle the section's active state */}
          <button onClick={() => toggleSection(section.id)}>
            {section.title}
          </button>
          {/* Render the section's content if it is active */}
          {activeSections?.includes(section.id) && (
            <div>{section.content}</div>
          )}
        </section>
      ))}
    </div>
  );
}

export default Accordion;

