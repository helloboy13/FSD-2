import { useState } from "react";
import "./App.css";

const products = [
  { id: 1, name: "Laptop", price: "₹1,20,000", desc: "High performance laptop" },
  { id: 2, name: "Phone", price: "₹70,000", desc: "Latest smartphone" },
  { id: 3, name: "Headphones", price: "₹15,000", desc: "Noise cancelling" },
  { id: 4, name: "Keyboard", price: "₹8,000", desc: "Mechanical keyboard" },
  { id: 5, name: "Mouse", price: "₹4,000", desc: "Gaming mouse" },
  { id: 6, name: "Monitor", price: "₹30,000", desc: "27 inch display" },
];

function App() {
  const [page, setPage] = useState("dashboard");
  const [selected, setSelected] = useState(null);

  return (
    <div>

      <nav className="nav">
        <h2>Catalog</h2>
        <div>
          <button onClick={() => setPage("dashboard")}>Dashboard</button>
          <button onClick={() => setPage("products")}>Products</button>
        </div>
      </nav>

      {page === "dashboard" && (
        <div className="page">
          <h1>Dashboard</h1>
          <p>Total Products: {products.length}</p>
        </div>
      )}

      {page === "products" && (
        <div className="grid">
          {products.map((p) => (
            <div
              key={p.id}
              className="card"
              onClick={() => {
                setSelected(p);
                setPage("details");
              }}
            >
              <h3>{p.name}</h3>
              <p>{p.price}</p>
            </div>
          ))}
        </div>
      )}

      {page === "details" && selected && (
        <div className="page">
          <h1>{selected.name}</h1>
          <h3>{selected.price}</h3>
          <p>{selected.desc}</p>
          <button onClick={() => setPage("products")}>Back</button>
        </div>
      )}
    </div>
  );
}

export default App;