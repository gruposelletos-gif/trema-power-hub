import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import tremaLogo from "@/assets/trema-logo.png.asset.json";

const navLinks = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/cursos", label: "Cursos" },
  { to: "/produtos", label: "Produtos" },
  { to: "/contato", label: "Contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !isHome || open;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-soft"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-24 md:h-28">
        <Link
          to="/"
          className="flex items-center"
          aria-label="TREMA"
        >
          <img
            src={tremaLogo.url}
            alt="TREMA - Treinamento e Manutenção em Equipamentos Móveis"
            className={`h-20 md:h-24 lg:h-28 w-auto object-contain transition-all duration-300 ${
              solid ? "" : "[filter:invert(1)_brightness(2)]"
            }`}
          />
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.to;
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`relative px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors duration-200 ${
                    solid
                      ? active
                        ? "text-foreground"
                        : "text-foreground/60 hover:text-foreground"
                      : active
                      ? "text-primary"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-primary" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <a
          href="https://wa.me/5531993091735"
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
            solid
              ? "bg-foreground text-background hover:bg-primary hover:text-primary-foreground"
              : "bg-primary text-primary-foreground hover:brightness-110"
          }`}
        >
          Fale conosco
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden active:scale-95 transition-all ${
            solid ? "text-foreground" : "text-white"
          }`}
          aria-label="Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`block px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] transition-colors ${
                    pathname === link.to
                      ? "text-primary bg-primary/5"
                      : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="px-6 pt-2">
              <a
                href="https://wa.me/5531993091735"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-[0.2em] bg-primary text-primary-foreground"
              >
                Fale conosco
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
