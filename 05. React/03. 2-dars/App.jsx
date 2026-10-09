// 03. 2-dars App.jsx - Live Virtual DOM Diffing Simulator
function App() {
    const [seconds, setSeconds] = React.useState(0);
    const [themeColor, setThemeColor] = React.useState('#00d8ff');

    React.useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(s => s + 1);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{ textAlign: "center", padding: "10px" }}>
            <h3 style={{ color: themeColor, marginBottom: "8px" }}>
                🧪 Jonli Virtual DOM Namoyishi
            </h3>
            <p style={{ color: "#94a3b8", fontSize: "0.9rem", marginBottom: "14px" }}>
                Quyidagi taymer har soniyada o'zgarmoqda. React faqat raqam joylashgan tugunni yangilaydi:
            </p>
            <div style={{ 
                display: "inline-block", 
                background: "#0b0f19", 
                border: "2px solid " + themeColor, 
                padding: "14px 28px", 
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0, 216, 255, 0.2)"
            }}>
                <span style={{ fontSize: "2rem", fontWeight: "bold", color: "#34d399", fontFamily: "monospace" }}>
                    ⏱️ {seconds} soniya
                </span>
            </div>
            <div style={{ marginTop: "16px", display: "flex", gap: "8px", justifyContent: "center" }}>
                <button 
                    onClick={() => setThemeColor('#00d8ff')}
                    style={{ background: "#00d8ff", color: "#000", border: "none", padding: "6px 12px", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}
                >
                    Moviy
                </button>
                <button 
                    onClick={() => setThemeColor('#10b981')}
                    style={{ background: "#10b981", color: "#000", border: "none", padding: "6px 12px", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}
                >
                    Yashil
                </button>
                <button 
                    onClick={() => setThemeColor('#f59e0b')}
                    style={{ background: "#f59e0b", color: "#000", border: "none", padding: "6px 12px", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}
                >
                    Sariq
                </button>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
