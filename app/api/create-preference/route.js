import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const { title, price } = await req.json();

    const response = await fetch(
      "https://api.mercadopago.com/checkout/preferences",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          items: [
            {
              title: title,
              quantity: 1,
              currency_id: "ARS",
              unit_price: Number(price),
            },
          ],

          back_urls: {
            success: "http://localhost:3000/success",
            failure: "http://localhost:3000/failure",
            pending: "http://localhost:3000/pending",
          },

          auto_return: "approved",
        }),
      }
    );

    const data = await response.json();

    console.log("🔥 MP RESPONSE:", data);

    return NextResponse.json({
      init_point: data.init_point,
    });

  } catch (error) {
    console.error("🔥 MP ERROR:", error);

    return NextResponse.json(
      {
        error: "MercadoPago failed",
      },
      {
        status: 500,
      }
    );
  }
}