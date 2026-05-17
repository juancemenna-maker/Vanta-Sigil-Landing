import { NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";

export const runtime = "nodejs";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
});

export async function POST(req) {
  try {
    const { title, price } = await req.json();

    const preference = new Preference(client);

    const result = await preference.create({
      body: {
        items: [
          {
            title,
            unit_price: Number(price),
            quantity: 1,
            currency_id: "ARS",
          },
        ],
        back_urls: {
          success: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
          failure: `${process.env.NEXT_PUBLIC_SITE_URL}/failure`,
          pending: `${process.env.NEXT_PUBLIC_SITE_URL}/pending`,
        },
        auto_return: "approved",
      },
    });

    return NextResponse.json({
      init_point: result.init_point, // 🔥 ESTE ES EL FIX CLAVE
    });

  } catch (error) {
    console.error("MP ERROR:", error);

    return NextResponse.json(
      { error: "Error creating preference" },
      { status: 500 }
    );
  }
}