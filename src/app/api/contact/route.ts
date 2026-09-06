import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      company,
      role,
      category,
      scope,
      horizon,
      budget,
      message,
      formName,
    } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error: "Missing required fields",
        },
        {
          status: 400,
        }
      );
    }

    const scopes = Array.isArray(scope)
      ? scope.join(", ")
      : scope || "Not provided";

    const { data, error } = await resend.emails.send({
      from: "Pingital <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL!,
      replyTo: email,

      subject: `New Pingital inquiry — ${company || name}`,

      text: `
New project inquiry from Pingital

Form:
${formName || "Website Contact"}

Name:
${name}

Email:
${email}

Company:
${company || "Not provided"}

Role:
${role || "Not provided"}

Project category:
${category || "Not provided"}

Systems scope:
${scopes}

Production horizon:
${horizon || "Not provided"}

Estimated budget:
${budget || "Not provided"}

Project details:
${message}
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          error: "Unable to send email",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        error: "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}