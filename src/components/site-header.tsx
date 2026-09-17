"use client";

import { Camera, Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [["Belén", "#belen"], ["Clases", "#servicios"], ["Beneficios", "#beneficios"], ["Galería", "#galeria"], ["Preguntas", "#preguntas"]];

export function SiteHeader({ whatsappUrl }: { whatsappUrl: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  return (
    <header className="site-header">
      <div className="section-shell nav-inner">
        <a className="brand" href="#inicio" aria-label="Ir al inicio"><span>BG</span><strong>Belén Goicochea</strong></a>
        <nav className="desktop-nav" aria-label="Navegación principal">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
        <div className="nav-actions">
          <a className="instagram-link" href="https://www.instagram.com/mbelugoico/" target="_blank" rel="noreferrer" aria-label="Instagram de Belén Goicochea"><Camera aria-hidden="true" size={20} /></a>
          <a className="nav-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" size={18} />WhatsApp</a>
          <button className="menu-button" type="button" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
        </div>
      </div>
      <div className={`mobile-panel ${open ? "mobile-panel-open" : ""}`}>
        <nav aria-label="Navegación móvil">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="mobile-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Consultá por WhatsApp</a></nav>
      </div>
    </header>
  );
}
