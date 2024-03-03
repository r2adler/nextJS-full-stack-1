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
 

  return (
    <div>
      {users &&
        users.map((user) => (
          <Card key={user.id} className="mt-4">
            <CardHeader>
              <CardTitle>{user.name}</CardTitle>         
            </CardHeader>     
          </Card>
        ))}
    </div>
  )
}
