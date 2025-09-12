import { Link } from "wouter";

export function Footer() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/gallery", label: "Gallery" },
    //{ href: "/pricing", label: "Pricing" },
  ];

  return (
    <footer className="bg-cedar-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-playfair font-bold mb-4">BosTubs</h3>
            <p className="text-cedar-200 mb-4">
              Bringing luxury wood-fired hot tub experiences directly to your doorstep in Pretoria and surrounding areas.
            </p>
            <p className="text-cedar-200 font-semibold">
              No installation. No commitment. Just pure relaxation.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cedar-200 hover:text-white transition-colors"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-cedar-200" data-testid="footer-phone">079 075 6571 / 072 270 6959</li>
              <li className="text-cedar-200" data-testid="footer-email">bostubs@gmail.com</li>
              <li className="text-cedar-200" data-testid="footer-location">Pretoria, South Africa</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-cedar-500 mt-8 pt-8 text-center">
          <p className="text-cedar-200" data-testid="footer-copyright">
            &copy; 2024 BosTubs. All rights reserved. | Luxury hot tub rentals in Pretoria
          </p>
          
          <p>
            Developed by{" "}
            <a
              href="https://buildyourbrand.web.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              BYB Digital
            </a>
          </p>

          
        </div>
      </div>
    </footer>
  );
}
