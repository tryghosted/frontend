"use server";

import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

export async function createSurveyResponse(
  email: string,
  answer1: string | null = "",
  answer2: string | null = "",
  answer3: string | null = "",
  marketing_opt_in: boolean = false,
) {
  // Insert data into the database
  try {
    await sql`
      INSERT INTO survey_responses (email_address, answer1, answer2, answer3, marketing_opt_in)
      VALUES (${email}, ${answer1}, ${answer2}, ${answer3}, ${marketing_opt_in})
      ON CONFLICT (email_address)
      DO UPDATE SET
          answer1 = EXCLUDED.answer1,
          answer2 = EXCLUDED.answer2,
          answer3 = EXCLUDED.answer3,
          marketing_opt_in = EXCLUDED.marketing_opt_in;
    `;
  } catch (error) {}
}
