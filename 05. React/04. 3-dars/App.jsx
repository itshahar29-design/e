// 04. 3-dars App.jsx - Props and State Component Playground
function UserCard(props) {
    return (
        <div style={{
            background: "#0b0f19",
            border: "1px solid #1f2937",
            borderRadius: "10px",
            padding: "14px",
            textAlign: "center",
            width: "160px"
        }}>
            <div style={{ fontSize: "2rem", marginBottom: "6px" }}>{props.avatar}</div>
            <h4 style={{ color: "#00d8ff", fontSize: "1rem", marginBottom: "4px" }}>{props.name}</h4>
            <div style={{ color: "#34d399", fontSize: "0.85rem", fontWeight: "bold" }}>{props.role}</div>
        </div>
    );
}

function App() {
    const [likeCount, setLikeCount] = React.useState(12);

    return (
        <div style={{ textAlign: "center" }}>
            <h3 style={{ color: "#00d8ff", marginBottom: "12px" }}>
                🧩 Props Bilan Ishlovchi Bola Komponentlar:
            </h3>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginBottom: "16px" }}>
                <UserCard name="Anvar" role="Team Lead" avatar="👨‍💼" />
                <UserCard name="Madina" role="UI Designer" avatar="👩‍🎨" />
                <UserCard name="Bobur" role="React Dev" avatar="👨‍💻" />
            </div>
            <div style={{ marginTop: "14px" }}>
                <button 
                    onClick={() => setLikeCount(l => l + 1)}
                    style={{
                        background: "linear-gradient(135deg, #ec4899, #8b5cf6)",
                        color: "#fff",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontWeight: "bold",
                        fontSize: "0.95rem"
                    }}
                >
                    ❤️ Ushbu Darsga Like Bosish ({likeCount})
                </button>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
