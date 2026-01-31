import { NextResponse } from "next/server";

const N8N_WEBHOOK_URL = "https://n8n-n8n.sqnokr.easypanel.host/webhook/33722926-1608-460d-b41f-590b51939ecd";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { nombre, apellido, telefono, email, plan } = data;

    if (!nombre || !apellido || !telefono || !email) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios" },
        { status: 400 }
      );
    }

    const webhookData = {
      nombre,
      apellido,
      telefono,
      email,
      plan: plan || "No especificado",
      fecha: new Date().toISOString(),
    };

    const webhookResponse = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(webhookData),
    });

    if (!webhookResponse.ok) {
      console.error("Error enviando a n8n:", webhookResponse.status);
      return NextResponse.json(
        { error: "Error al procesar la solicitud" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Solicitud recibida correctamente"
    });
  } catch (error) {
    console.error("Error procesando solicitud:", error);
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}
