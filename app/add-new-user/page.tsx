"use client"
import { useState } from "react"

const AddNewUserPage = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [age, setAge] = useState("")

  const addUserHandler = async () => {
    const res = await fetch("api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age, email }),
    })
    const response = await res.json()

    if (response.ok) {
      alert('user created')
    } else {
      alert('error occurred')
    }
  }

  return (
    <div>
      <input
        placeholder="add email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <input
        placeholder="add name"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <input
        placeholder="add age"
        value={age}
        onChange={(e) => setAge(e.currentTarget.value)}
      />
      <button onClick={addUserHandler}>Add a user</button>
    </div>
  )
}

export default AddNewUserPage
