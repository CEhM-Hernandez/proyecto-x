export function Header() {
  return (
    <>
      <header className="w-full h-5 bg-background text-center">
        Hola mundo
      </header>
      <nav className="w-full h-16 bg-primary text-primary-foreground border-b border-accent sticky top-0 z-50">
        <div className="container mx-auto h-full flex items-center justify-between px-4">
          <div className="text-lg font-bold">EPS Urivista</div>
          <div className="space-x-4">
            <a href="#features" className="text-sm hover:underline">
              Características
            </a>
            <a href="#pricing" className="text-sm hover:underline">
              Precios
            </a>
            <a href="#contact" className="text-sm hover:underline">
              Contacto
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
