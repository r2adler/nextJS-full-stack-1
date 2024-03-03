import { NextResponse } from "next/server"
import { users } from "@/app/utils/db"
import fs from "fs"

export async function GET(_: void, res: any) {

  const { id } = await res.params
  const user = users.filter((u) => u.id === id)
  if (user.length > 0) {
    console.log(user)
    return NextResponse.json({ user: user, ok: true }, { status: 200 })
  } else {  
    return NextResponse.json({ error: "not found", ok: false })
  }
}

// login
export async function POST(req: Request, res: any) {
  const { name, password, email } = await req.json()
  const { id } = await res.params
  const user = users.find((u) => u.id === id)
  if (user) {
    const { name: uName, email: uEmail, password: uPassword } = user
    if (name === uName && password === uPassword && email === uEmail) {
      return NextResponse.json(
        { res: "successfully logged in", ok: true },
        { status: 201 },
      )
    } else if (!name || !password || !email) {
      return NextResponse.json(
        { error: "required field not found", ok: false },
        { status: 400 },
      )
    }
  }

  return NextResponse.json({ res: "invalid credentials", ok: false })
}

// delete
export async function DELETE(req: Request, res: any) {
  const { id } = await res.params
  const userId = users.findIndex((u) => u.id === id)
  if (userId === -1) {
    return NextResponse.json({ result: "User not found" }, { status: 404 })
  }
  users.splice(userId, 1)
  const updatedUsersArray = users
  const updatedData = JSON.stringify(updatedUsersArray, null, 2)
  fs.writeFileSync(
    "./app/utils/db.ts",
    `export const users = ${updatedData};`,
    "utf-8",
  )
  return NextResponse.json({ success: "User successfully deleted" })
}
