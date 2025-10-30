  import { useRef, useState } from "react";
  import { Navbar } from "@/components/layout/navbar";
  import { Footer } from "@/components/layout/footer";
  import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
  import { Button } from "@/components/ui/button";

  const WORKER_URL = "https://forms-worker.buildyourbranddigital.workers.dev/submit";
  const FORM_ID = "bostubs-contact"; // <-- make sure this exists in KV....

  export default function Contact() {
    const [submitting, setSubmitting] = useState(false);
    const t0Ref = useRef(Date.now()); // anti-bot timer (set on first render)

    const handleSubmit = async (e) => {
      e.preventDefault();
      const form = e.currentTarget;
      const fd = new FormData(form);
      const data = Object.fromEntries(fd.entries());

      // compose "name" from first + last for the Worker
      const firstName = (data.firstName || "").toString().trim();
      const lastName  = (data.lastName  || "").toString().trim();
      data.name = [firstName, lastName].filter(Boolean).join(" ");

      // worker routing + anti-bot (set BEFORE fetch)
      data.formId = FORM_ID;
      data._t0 = t0Ref.current; // or: window.__t0 || (window.__t0 = Date.now());

      try {
        setSubmitting(true);

        const res = await fetch(WORKER_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        // If the Worker ever 302s by mistake, still show success + reset
        if (res.type === "opaqueredirect" || res.redirected) {
          alert("We will be with you shortly!");
          form.reset();
          return;
        }

        const json = await res.json().catch(() => ({}));

        if (res.ok && json.ok) {
          alert("We will be with you shortly!");
          form.reset();
        } else {
          alert(`Something went wrong. ${json?.error ? `Error: ${json.error}` : ""}`);
        }
      } catch (err) {
        alert("Network error. Please try again.");
      } finally {
        setSubmitting(false);
      }
    };


    return (
      <div className="min-h-screen bg-cream-100">
        <Navbar />

        {/* Header */}
        <section className="pt-24 pb-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-cedar-600 mb-6">
              Book Your Experience
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready for the ultimate relaxation? Get in touch to book your luxury wood-fired hot tub experience. 
              We'll respond within 24 hours with availability and next steps.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-white p-8 rounded-xl shadow-md"
              >
                {/* Honeypot (hidden) */}
                <input
                  type="text"
                  name="hp"
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ display: "none" }}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+27 12 345 6789"
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Date *</label>
                    <input
                      type="date"
                      name="startDate"
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">End Date *</label>
                    <input
                      type="date"
                      name="endDate"
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                    placeholder="Tell us about your booking needs..."
                  ></textarea>
                </div>

                {/* Removed FormSubmit-specific fields (_cc, _captcha, _template) */}

                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-fire-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-fire-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : "Send Booking Request"}
                </button>

                <p className="text-sm text-gray-500 text-center mt-2">
                  We'll respond within 24 hours. For faster service, use WhatsApp.
                </p>
              </form>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-playfair font-bold text-cedar-600 mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4" data-testid="contact-phone">
                    <div className="w-12 h-12 bg-fire-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-cedar-600">Phone</h4>
                      <p className="text-gray-600">079 075 6571 / 072 270 6959</p>
                      <p className="text-sm text-gray-500">Available 8AM - 8PM daily</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4" data-testid="contact-email">
                    <div className="w-12 h-12 bg-water-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-cedar-600">Email</h4>
                      <p className="text-gray-600">bostubs@gmail.com</p>
                      <p className="text-sm text-gray-500">Response within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4" data-testid="contact-location">
                    <div className="w-12 h-12 bg-cedar-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-cedar-600">Service Area</h4>
                      <p className="text-gray-600">Pretoria & surrounding areas</p>
                      <p className="text-sm text-gray-500">50km delivery radius</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-green-500 rounded-2xl p-6 text-white" data-testid="whatsapp-cta">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-3xl">💬</div>
                  <div>
                    <h4 className="font-bold text-lg">Quick Booking via WhatsApp</h4>
                    <p className="text-green-100">Get instant responses and book faster</p>
                  </div>
                </div>
                <a 
                  href="https://wa.me/27790756571?text=Hi%20BosTubs!%20I'm%20interested%20in%20booking%20a%20hot%20tub%20rental."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="bg-white text-green-500 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors duration-200"
                    data-testid="button-whatsapp"
                  >
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>

              {/* Social Media */}
              <div data-testid="social-media">
                <h4 className="font-semibold text-cedar-600 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.instagram.com/bostubs" 
                    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-fire-500 hover:text-white transition-colors duration-200"
                    data-testid="social-instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61579356937652" 
                    className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-fire-500 hover:text-white transition-colors duration-200"
                    data-testid="social-facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours & Info */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-playfair font-bold text-cedar-600 mb-6">
              Business Information
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm" data-testid="business-hours">
              <div className="w-16 h-16 bg-fire-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🕐</span>
              </div>
              <h3 className="text-xl font-semibold text-cedar-600 mb-4">Business Hours</h3>
              <div className="text-gray-600 space-y-1">
                <p>Monday - Friday: 8AM - 8PM</p>
                <p>Saturday: 7AM - 9PM</p>
                <p>Sunday: 8AM - 7PM</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm" data-testid="response-time">
              <div className="w-16 h-16 bg-water-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-cedar-600 mb-4">Quick Response</h3>
              <div className="text-gray-600 space-y-1">
                <p>WhatsApp: Instant - 1 hour</p>
                <p>Phone: Available during hours</p>
                <p>Email: Within 24 hours</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm" data-testid="booking-advance">
              <div className="w-16 h-16 bg-cedar-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📅</span>
              </div>
              <h3 className="text-xl font-semibold text-cedar-600 mb-4">Booking Lead Time</h3>
              <div className="text-gray-600 space-y-1">
                <p>Weekends: 1 week advance</p>
                <p>Weekdays: 3-5 days advance</p>
                <p>Rush bookings may be available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
