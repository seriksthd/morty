// import React from "react";
// // import { Layout } from "./layout/Layout";

// function App() {
//   return (
//     <div>
//       {/* <Layout /> */}
//     </div>
//   );
// }

// export default App;
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const data = await response.json();
        console.log('data.results: ', data.results);
        setUsers(data.results);
        
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {users.map((user) => (
        <CharacterCard key={user.id} user={user} />
      ))}
    </div>
  );
}

function CharacterCard({ user }) {
  const getBorderColor = () => {
    if (user.status === "Alive") return "4px solid green";
    if (user.status === "Dead") return "4px solid red";
    return "4px solid black";
  };

  return (
    <section
      onClick={() => console.log(user.id)}
      style={{
        padding: "20px",
        border: getBorderColor(),
        textAlign: "center",
      }}
    >
      <p>{user.name}</p>
      <img src={user.image} alt={user.name} width="150" />
    </section>
  );
}

export default App;
