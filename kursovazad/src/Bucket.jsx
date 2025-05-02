// src/components/Bucket.jsx
import { useState, useEffect } from "react";

function Bucket() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));  // Читање на податоците од localStorage
    }
  }, []);

  return (
    <div>
      <h2>Your Bucket</h2>
      {user ? (
        <>
          <p>Welcome, {user.name}</p>
          <p>Parfum Type: {user.parfumType}</p>
          <p>Size: {user.parfumSize} ml</p>
        </>
      ) : (
        <p>You need to log in to view your bucket.</p>
      )}
    </div>
  );
}

export default Bucket;
