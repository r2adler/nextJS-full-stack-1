import { NextResponse } from "next/server"
import { Users, users } from "../../utils/db"
import fs from "fs"

export function GET() {
  return NextResponse.json({ users, ok: true }, { status: 200 })
}

// create user
export async function POST(req: Request, res: any) {
  const { name, password, email, id } = await req.json()

  if (!id || !name || !email || !password) {
    return NextResponse.json(
      { error: "required field not found", ok: false },
      { status: 400 },
    )
  } else {
    users.push({ id, name, email, password } as Users)
    const updatedUsersArray = users
    const updatedData = JSON.stringify(updatedUsersArray, null, 2)
    fs.writeFileSync(
      "./app/utils/db.ts",
      `export const users = ${updatedData};`,
      "utf-8",
    )
    return NextResponse.json({ success: "User successfully created" })
  }
}

//update user
export async function PUT(req: Request, res: any) {
  const { name, password, email, id } = await req.json()

  const userIndex = users.findIndex((u) => u.id === id)
  if (userIndex === -1) {
    return NextResponse.json({ result: "User not found" }, { status: 404 })
  }
  if (name) {
    users[userIndex].name = name
  }
  if (password) {
    users[userIndex].password = password
  }
  if (email) {
    users[userIndex].email = email
  }

  const updatedUsersArray = users
  const updatedData = JSON.stringify(updatedUsersArray, null, 2)
  fs.writeFileSync(
    "./app/utils/db.ts",
    `export const users = ${updatedData};`,
    "utf-8",
  )
  return NextResponse.json({ success: "User successfully update" })
}
