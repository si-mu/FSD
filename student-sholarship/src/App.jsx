import React, { useState, useMemo } from "react";
export default function App() {
  const [students] = useState([
    { id: 1, name: "Student 1", percentage: 92 },
    { id: 2, name: "Student 2", percentage: 85 },
    { id: 3, name: "Student 3", percentage: 78 },
    { id: 4, name: "Student 4", percentage: 63 },
    { id: 5, name: "Student 5", percentage: 90 },
    { id: 6, name: "Student 6", percentage: 72 },
    { id: 7, name: "Student 7", percentage: 58 },
  ]);
  const [search, setSearch] = useState("");
  const { distinction, firstClass } = useMemo(() => {
    let d = 0, f = 0;
    for (const s of students) {
      const p = s.percentage;
      if (p >= 85) d++;
      else if (p >= 60 && p <= 84) f++;
    }
    return { distinction: d, firstClass: f };
  }, [students]);
  const filteredStudents = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return students;
    return students.filter((s) => s.name.toLowerCase().includes(q));
  }, [students, search]);
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Student Scholarship Counter</h1>
      <p>Total Students: {students.length}</p>
      <p>Distinction (≥85%): {distinction}</p>
      <p>First Class (60–84%): {firstClass}</p>
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table border="1" cellPadding="5" style={{ marginTop: "10px" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((s, i) => (
            <tr key={s.id}>
              <td>{i + 1}</td>
              <td>{s.name}</td>
              <td>{s.percentage}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
