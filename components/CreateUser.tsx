import { FormEvent, useEffect, useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

export const CreateUser = () => {
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!id || !email || !password || !name) {
      alert("Please fill all input fields")
      return
    }
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, name, email, password }),
      })
      if (response.ok) {
        alert("User successfully created")
      } else {
        alert("Something went wrong")
        return
      }
    } catch (error) {
      alert(error)
    }
  }


  return (
    <div>
      <form action="" className="m-4" onSubmit={handleSubmit}>
        <Input
          placeholder="id"
          value={id}
          onChange={(e) => setId(e.currentTarget.value)}
        />
        <Input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <Input
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <Input
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <Button>Create a new user</Button>
      </form>
    </div>
  )
}
