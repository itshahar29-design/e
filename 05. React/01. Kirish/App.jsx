// 01. Kirish App.jsx - Live React Komponenti
function App() {
    const [count, setCount] = React.useState(0);
    const [ism, setIsm] = React.useState("Do'st");

    return (
        <div style={{ textAlign: "center", padding: "10px" }}>
            <h3 style={{ color: "#00d8ff", marginBottom: "10px" }}>
                ⚛️ Salom, {ism}! Bu Jonli React Komponenti
            </h3>
            <p style={{ color: "#94a3b8", marginBottom: "14px" }}>
                React.useState orqali avtomatik yangilanuvchi hisoblagich:
            </p>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center", alignItems: "center" }}>
                <button 
                    onClick={() => setCount(count - 1)}
                    style={{ background: "#ef4444", color: "#fff", border: "none", padding: "8px 16px", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}
                >
                    - Kamaytirish
                </button>
                <span style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#38bdf8", minWidth: "60px" }}>
                    {count}
                </span>
                <button 
                    onClick={() => setCount(count + 1)}
                    style={{ background: "#10b981", color: "#fff", border: "none", padding: "8px 16px", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}
                >
                    + Oshirish
                </button>
            </div>
            <div style={{ marginTop: "16px" }}>
                <input 
                    type="text" 
                    placeholder="Ismingizni yozing..." 
                    value={ism}
                    onChange={(e) => setIsm(e.target.value)}
                    style={{ background: "#0b0f19", border: "1px solid #374151", color: "#fff", padding: "8px 14px", borderRadius: "6px", outline: "none" }}
                />
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
