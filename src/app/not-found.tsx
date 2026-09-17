import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <span>BG</span>
      <p className="eyebrow">Error 404</p>
      <h1>Esta página salió a moverse.</h1>
      <p>No encontramos la dirección que buscabas.</p>
      <Link className="button button-primary" href="/">
        Volver al inicio
      </Link>
    </main>
  );
}
