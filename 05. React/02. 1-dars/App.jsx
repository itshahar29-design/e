// 02. 1-dars App.jsx - Interactive Project Tree Explorer
function App() {
    const [selectedFile, setSelectedFile] = React.useState('src/App.jsx');

    const fileContents = {
        'src/App.jsx': `import React from 'react';\n\nexport default function App() {\n  return <h1>Salom Dunyo!</h1>;\n}`,
        'src/main.jsx': `import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App.jsx';\n\nReactDOM.createRoot(document.getElementById('root')).render(<App />);`,
        'package.json': `{\n  "name": "vite-react-project",\n  "dependencies": {\n    "react": "^18.3.1",\n    "react-dom": "^18.3.1"\n  }\n}`,
        'vite.config.js': `import { defineConfig } from 'vite';\nimport react from '@vitejs/plugin-react';\n\nexport default defineConfig({\n  plugins: [react()]\n});`
    };

    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "14px" }}>
            <div style={{ background: "#0b0f19", padding: "14px", borderRadius: "8px", border: "1px solid #1f2937" }}>
                <h4 style={{ color: "#00d8ff", marginBottom: "10px" }}>📁 Loyiha Daraxti:</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    {Object.keys(fileContents).map(fileName => (
                        <button
                            key={fileName}
                            onClick={() => setSelectedFile(fileName)}
                            style={{
                                background: selectedFile === fileName ? "#00d8ff" : "#1f2937",
                                color: selectedFile === fileName ? "#0b0f19" : "#f8fafc",
                                border: "none",
                                padding: "8px 12px",
                                borderRadius: "6px",
                                textAlign: "left",
                                cursor: "pointer",
                                fontWeight: "bold",
                                fontSize: "0.85rem"
                            }}
                        >
                            📄 {fileName}
                        </button>
                    ))}
                </div>
            </div>
            <div style={{ background: "#030712", padding: "14px", borderRadius: "8px", border: "1px solid #1f2937" }}>
                <div style={{ color: "#94a3b8", fontSize: "0.8rem", marginBottom: "6px" }}>Fayl mazmuni: <strong>{selectedFile}</strong></div>
                <pre style={{ margin: 0, padding: 0, background: "none", border: "none", color: "#38bdf8", fontSize: "0.85rem" }}>
                    <code>{fileContents[selectedFile]}</code>
                </pre>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
