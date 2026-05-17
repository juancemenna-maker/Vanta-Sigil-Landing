import { NextResponse } from "next/server";
import mercadopago from "mercadopago";

export const runtime = "nodejs";

mercadopago.configure({
  access_token: process.env.MP_ACCESS_TOKEN,
});

export async function POST(req) {
  try {
    const { title, price } = await req.json();

    const preference = {
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
    };

    const response = await mercadopago.preferences.create(preference);

    return NextResponse.json({
      init_point: response.body.init_point,
    });

  } catch (error) {
    console.error("MP error:", error);

    return NextResponse.json(
      { error: "Error creating preference" },
      { status: 500 }
    );
  }
}