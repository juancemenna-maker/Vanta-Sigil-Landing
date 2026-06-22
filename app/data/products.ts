// app/data/products.ts

export const PAYMENT_LINK = "https://mpago.la/XXXXXXX";

export type Categoria = "joyeria" | "indumentaria" | "objetos" | "prints";

export interface Producto {
  titulo: string;
  precio: string;
  imagen: string;
}

export const capsulas: Record<Categoria, Producto[]> = {
  joyeria: [],
  indumentaria: [],
  objetos: [],
  prints: [],
};

export const categoriaLabels: Record<Categoria, string> = {
  joyeria: "Joyería",
  indumentaria: "Indumentaria",
  objetos: "Artefactos Visuales",
  prints: "Prints",
};