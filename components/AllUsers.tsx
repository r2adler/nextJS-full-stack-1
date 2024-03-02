"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useEffect, useState } from "react"

export const AllUsers = () => {
  const [users, setUsers] = useState<null | any[]>([])

  useEffect(() => {
    const fetchAllUsers = async () => {
      const response = await fetch("/api/users")

      const usersInfo = await response.json()
      console.log(usersInfo)
      setUsers(usersInfo.users)
    }
    fetchAllUsers()
  }, [])
  console.log(users)

  return (
    <div>
      {users &&
        users.map((user) => (
          <Card key={user.id} className="mt-4">
            <CardHeader>
              <CardTitle>{user.name}</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        ))}
    </div>
  )
}
