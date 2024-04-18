import React, { useState } from "react";

function Tabs() {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="tab-header">
        <button onClick={() => handleTabClick("tab1")} className={activeTab === "tab1" ? "active" : ""}>
          Tab 1
        </button>
        <button onClick={() => handleTabClick("tab2")} className={activeTab === "tab2" ? "active" : ""}>
          Tab 2
        </button>
        <button onClick={() => handleTabClick("tab3")} className={activeTab === "tab3" ? "active" : ""}>
          Tab 3
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "tab1" && <div>Content for Tab 1</div>}
        {activeTab === "tab2" && <div>Content for Tab 2</div>}
        {activeTab === "tab3" && <div>Content for Tab 3</div>}
      </div>
    </div>
  );
}

export default Tabs;

// // Tabs.js
// import React, { useState } from "react";

// const Tabs = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   const tabsData = [
//     { title: "Tab 1", content: "Content for Tab 1" },
//     { title: "Tab 2", content: "Content for Tab 2" },
//     { title: "Tab 3", content: "Content for Tab 3" },
//   ];

//   const handleTabClick = (index) => {
//     setActiveTab(index);
//   };

//   return (
//     <div>
//       <div className="tabs">
//         {tabsData.map((tab, index) => (
//           <button
//             key={index}
//             className={`tab ${index === activeTab ? "active" : ""}`}
//             onClick={() => handleTabClick(index)}
//           >
//             {tab.title}
//           </button>
//         ))}
//       </div>
//       <div className="tab-content">{tabsData[activeTab].content}</div>
//     </div>
//   );
// };

// export default Tabs;
