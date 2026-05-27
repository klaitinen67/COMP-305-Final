import { useEffect, useState } from "react";

function App() {
  const [customers, setCustomers] = useState([]);
  const [employees, setEmployees] = useState([]);
  
  useEffect(() => {
    fetch("https://localhost:7245/api/Customers")
      .then(res => res.json())
      .then(data => setCustomers(data))
      .catch(err => console.error(err));
  }, []);
  useEffect(() => {
    fetch("https://localhost:7245/api/Employees")
      .then(res => res.json())
      .then(data => setEmployees(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Customers</h1>
      <ul>
        {customers.map(c => (
          <li key={c.id}>{c.name} — {c.email}</li>
        ))}
      </ul>
        <h1>Employees</h1>
      <ul>
        {employees.map(e => (
          <li key={e.id}>{e.name} — {e.email}</li>
        ))}
      </ul> 
    </div>
  );
}

export default App;