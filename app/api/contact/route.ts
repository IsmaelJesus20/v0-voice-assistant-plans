import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { nombre, apellido, telefono, email, plan } = data;

    // Validar datos
    if (!nombre || !apellido || !telefono || !email) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios" },
        { status: 400 }
      );
    }

    // Log de la solicitud (en producción conectar con base de datos o servicio de email)
    console.log("Nueva solicitud de contratación:", {
      plan,
      nombre,
      apellido,
      telefono,
      email,
      fecha: new Date().toLocaleString("es-ES"),
    });

    // Aquí se podrían agregar integraciones futuras:
    // - Envío de emails con Resend
    // - Guardar en base de datos
    // - Notificación por webhook

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
