import { FormEvent, useEffect, useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
type RequestData = {
  id: string
  email?: string
  name?: string
  password?: name
}

export const UpdateUser = () => {
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!id) {
      alert("Please fill the id")
      return
    }

    const requestData: RequestData = { id }
    if (name) {
      requestData.name = name
    }
    if (email) {
      requestData.email = email
    }
    if (password) {
      requestData.password = password
    }
    try {
      const response = await fetch("/api/users", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      })
      if (response.ok) {
        alert("User successfully updated")
      } else {
        alert("Something went wrong")
        return
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
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
      <Button>Update a user</Button>
    </form>
  )
}
