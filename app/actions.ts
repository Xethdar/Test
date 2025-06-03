"use server"

import { revalidatePath } from "next/cache"
import clientPromise from "@/lib/mongodb"

export async function addToWaitlist(prevState: any, formData: FormData) {
  try {
    const email = formData.get("email") as string

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return {
        success: false,
        message: "Please provide a valid email address.",
      }
    }

    const client = await clientPromise
    const db = client.db("Slicktunnel_Deployed")

    // Check if email already exists
    const existingEmail = await db.collection("Waitlisted_Emails").findOne({ email })

    if (existingEmail) {
      return {
        success: false,
        message: "This email is already on our waitlist.",
      }
    }

    // Insert the new email with timestamp
    await db.collection("Waitlisted_Emails").insertOne({
      email,
      createdAt: new Date(),
    })

    revalidatePath("/")

    return {
      success: true,
      message: "Thank you for joining our waitlist!",
    }
  } catch (error) {
    console.error("Database error:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}
