"use server"
import { db } from "../_lib/prisma"

interface CreatedBookingParams {
  userId: string
  serviceId: string
  date: Date
}

export const createBooking = async ({
  userId,
  serviceId,
  date,
}: CreatedBookingParams) => {
  await db.booking.create({
    data: {
      userId,
      serviceId,
      date,
    },
  })
}
