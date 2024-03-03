import { FormEvent, useEffect, useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

export const DeleteUser = () => {
  const [id, setId] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!id) {
      alert("Please fill the ID")
      return
    }
    try {
      const response = await fetch(`/api/users/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
      if (response.ok) {
        alert("User successfully deleted")
        setId('')
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

        <Button>Delete a user</Button>
      </form>
    </div>
  )
}
