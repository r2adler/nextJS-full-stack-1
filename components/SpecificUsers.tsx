import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

export const SpecificUser = () => {
  const [userId, setUserId] = useState("")
  const [userData, setUserData] = useState<null | any[]>(null)

  const fetchUserData = async () => {
    const response = await fetch(`/api/users/${userId}`)
    if (response.ok) {
      const res = await response.json()
      setUserData(res.user)
    } else {
      console.log("Error fetching user data")
      setUserData(null)
    }
  }

  return (
    <div>
      <div className="flex">
        <div className="flex w-72 m-2">
          <Input value={userId} onChange={(e) => setUserId(e.target.value)} />
          <Button onClick={fetchUserData}>Fetch user</Button>
        </div>
      </div>
      {userData ? (
        userData.map((d) => (
          <>
            <Card className="w-96 mt-5">
              <CardContent>
                <p>ID: {d.id}</p>
                <p>Name: {d.name}</p>
                <p>Age: {d.age}</p>
                <p>Email: {d.email}</p>
                <p>Password: {d.password}</p>
              </CardContent>
            </Card>
          </>
        ))
      ) : (
        <p className="mt-2">Search for a specific user</p>
      )}
    </div>
  )
}
