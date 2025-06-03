"use server"

import { revalidatePath } from "next/cache"
import clientPromise from "@/lib/mongodb"

export async function addToWaitlist(prevState: any, formData: FormData) {
  try {
    const email = formData.get("email") as string

    console.log("Attempting to add email to waitlist:", email)

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return {
        success: false,
        message: "Please provide a valid email address.",
      }
    }

    console.log("Connecting to MongoDB...")
    const client = await clientPromise
    const db = client.db("Slicktunnel_Deployed")

    console.log("Connected to database:", db.databaseName)

    // Check if email already exists
    console.log("Checking for existing email...")
    const existingEmail = await db.collection("Waitlisted_Emails").findOne({ email })

    if (existingEmail) {
      console.log("Email already exists in waitlist")
      return {
        success: false,
        message: "This email is already on our waitlist.",
      }
    }

    // Insert the new email with timestamp
    console.log("Inserting new email...")
    const result = await db.collection("Waitlisted_Emails").insertOne({
      email,
      createdAt: new Date(),
    })

    console.log("Email inserted successfully:", result.insertedId)

    revalidatePath("/")

    return {
      success: true,
      message: "Thank you for joining our waitlist!",
    }
  } catch (error) {
    console.error("Database error:", error)
    return {
      success: false,
      message: `Something went wrong: ${error instanceof Error ? error.message : "Unknown error"}`,
    }
  }
}
