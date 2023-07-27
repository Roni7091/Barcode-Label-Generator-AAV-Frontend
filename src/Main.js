// import React, { useState, useRef, useEffect } from "react";
// import grapesjs from "grapesjs";
// import plugin from "grapesjs-preset-newsletter";
// import { saveAs } from "file-saver";
// import ChildComponent from "./ChildComponent";
// import Popup from "./Popup";
// import "./main.css";
// import ChildComponenttwo from "./ChildComponenttwo";





// const Main = () => {
//   const [editor, setEditor] = useState(null);
//   const [showPopup, setShowPopup] = useState(false);
//   const [htmlCode, setHtmlCode] = useState(""); // New state for HTML code
//   const [isEditing, setIsEditing] = useState(false); // New state for editing mode
//   const [showBarcodeTemplate, setShowBarcodeTemplate] = useState(false);

//   const editorRef = useRef(null);

//   useEffect(() => {
//     const initEditor = () => {
//       const editor = grapesjs.init({
//         container: editorRef.current,
//         plugins: [plugin],
//         pluginsOpts: {
//           [plugin]: {
//             /* options */
//           },
//         },
//       });

//       editor.Commands.add("my-command", {
//         run: (editor, sender) => {
//           sender && sender.set("active", 0);
//           setShowPopup(true);
//         },
//       });

//       editor.Panels.addButton("options", {
//         id: "my-button",
//         className: "my-button-class",
//         label: "My Button",
//         command: "my-command",
//         attributes: {
//           title: "Click me",
//         },
//       });

//       setEditor(editor);
//     };

//     initEditor();
//   }, []);

// const handleClosePopup = () => {
//     setShowPopup(false);
//   };

//   const handleDownload = () => {
//     const code = editor.getHtml();
//     console.log(code);
//     setHtmlCode(code); // Update the htmlCode state

//     const blob = new Blob([code], { type: "text/html" });
//     saveAs(blob, "generated_code.html");
//   };

//   const handleSave = () => {
//     const updatedHtmlCode = editor.getHtml();
//     setHtmlCode(updatedHtmlCode); // Update the htmlCode state
//     setIsEditing(false); // Disable editing mode
//   };

//   const handleEdit = () => {
//     setIsEditing(true); // Enable editing mode
//   };

//   const handleShowBarcodeTemplate = () => {
//     setShowBarcodeTemplate(true);
//   };

//   return (
//     <div className="App">
//       <header className="mheader">
//         <nav className="mmain">
//         </nav>
//         <button className="mback">Back</button>
//         {!isEditing && (
//           <button className="medit" onClick={handleEdit}>
//             Edit
//           </button>
//         )}
//         {isEditing && (
//           <button className="msave" onClick={handleSave}>
//             Save
//           </button>
//         )}
//         <button className="mdownload" onClick={handleDownload}>
//           Download
//         </button>
//         <button className="mtemplate" onClick={handleShowBarcodeTemplate}>Show Barcode Template</button>
//       {showBarcodeTemplate && <ChildComponenttwo/>}
//       </header>
//       <div ref={editorRef} id="gjs"></div>
//       {showPopup && <Popup onClose={handleClosePopup} />}
//       {htmlCode && (
//         <ChildComponent
//           htmlCode={htmlCode}
//           setHtmlCode={setHtmlCode}
//           isEditing={isEditing}
//         />
//       )}
//     </div>
//   );
// };

// export default Main;
// *********************************************************************************************
// I have to insert this code always

import React, { useState, useRef, useEffect } from "react";
import grapesjs from "grapesjs";
import plugin from "grapesjs-preset-newsletter";
import { saveAs } from "file-saver";
import ChildComponent from "./ChildComponent";
import Popup from "./Popup";
import "./main.css";
import ChildComponenttwo from "./ChildComponenttwo";

const predefinedTemplates = [
  /* Add predefined templates with different styles here */
  `
    background-color: #f0f0f0;
    color: #007bff;
    font-weight: bold;
  `,
  `
    background-color: #ffe6e6;
    color: #e60000;
  `,
  `
    background-color: #e6faff;
    color: #007a99;
  `,
  /* Add more templates with different styles if needed */
];

const Main = () => {
  const [editor, setEditor] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [htmlCode, setHtmlCode] = useState(""); // New state for HTML code
  const [isEditing, setIsEditing] = useState(false); // New state for editing mode
  const [showBarcodeTemplate, setShowBarcodeTemplate] = useState(false);
  const [selectedTemplateIndex, setSelectedTemplateIndex] = useState(0);
  const editorRef = useRef(null);

  useEffect(() => {
    const initEditor = () => {
      const editor = grapesjs.init({
        container: editorRef.current,
        plugins: [plugin],
        pluginsOpts: {
          [plugin]: {
            /* options */
          },
        },
        storageManager: false,
      });

      // Add the custom wrapper element
      const customWrapperId = "custom-wrapper";
      editor.DomComponents.addType(customWrapperId, {
        model: {
          defaults: {
            tagName: "div",
            style: {},
          },
        },
      });

      editor.Commands.add("my-command", {
        run: (editor, sender) => {
          sender && sender.set("active", 0);
          setShowPopup(true);
        },
      });

      editor.Panels.addButton("options", {
        id: "my-button",
        className: "my-button-class",
        label: "My Button",
        command: "my-command",
        attributes: {
          title: "Click me",
        },
      });

      setEditor(editor);
    };
    initEditor();
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleDownload = () => {
    const code = editor.getHtml();
    console.log(code);
    setHtmlCode(code); // Update the htmlCode state

    const blob = new Blob([code], { type: "text/html" });
    saveAs(blob, "generated_code.html");
  };

  const handleSave = () => {
    const updatedHtmlCode = editor.getHtml();
    setHtmlCode(updatedHtmlCode); // Update the htmlCode state
    setIsEditing(false); // Disable editing mode
  };

  const handleEdit = () => {
    setIsEditing(true); // Enable editing mode
  };

  const handleShowBarcodeTemplate = () => {
    setShowBarcodeTemplate(true);
  };

  const handleSelectTemplate = (templateIndex) => {
    setSelectedTemplateIndex(templateIndex);
  };

  useEffect(() => {
    if (editor) {
      const template = predefinedTemplates[selectedTemplateIndex];
      const customWrapper = editor.getSelected() || editor.getWrapper();
      customWrapper.setStyle(template);
    }
  }, [selectedTemplateIndex]);

  return (
    <div className="App">
      <header className="mheader">
        <nav className="mmain"></nav>
        <button className="mback">Back</button>
        {!isEditing && (
          <button className="medit" onClick={handleEdit}>
            Edit
          </button>
        )}
        {isEditing && (
          <button className="msave" onClick={handleSave}>
            Save
          </button>
        )}
        <button className="mdownload" onClick={handleDownload}>
          Download
        </button>
        {/* <button className="mtemplate" onClick={handleShowBarcodeTemplate}>Show Barcode Template</button>
      {showBarcodeTemplate && <ChildComponenttwo/>} */}
      </header>

      <div ref={editorRef}></div>
      <div className="buttons-container">
        {predefinedTemplates.map((template, index) => (
          <button
            key={index}
            className={`template-button ${
              index === selectedTemplateIndex ? "active" : ""
            }`}
            onClick={() => handleSelectTemplate(index)}
          >
            Template {index + 1}
          </button>
        ))}
      </div>
      {showPopup && <Popup onClose={handleClosePopup} />}
      {htmlCode && (
        <ChildComponent
          htmlCode={htmlCode}
          setHtmlCode={setHtmlCode}
          isEditing={isEditing}
        />
      )}
    </div>
  );
};

export default Main;
