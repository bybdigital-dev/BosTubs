import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { GalleryGrid } from "@/components/ui/gallery-grid";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import bigyardimage from "@assets/Hottub_Yard_Far.jpg";
import shinytub from "@assets/Hottub_Shine_Nature.jpg";
import bluetub from "@assets/Blue_water_hottub.jpg";
import bigtub from "@assets/Hottub_Yard_Big.jpg";
import cementtub from "@assets/Hottub_Patio_Cement_Dark.jpg";
import grasstub from "@assets/Hottub_Grass_Yard.jpg";

const galleryImages = [
  {
    src:bigyardimage,
    alt: "Modern backyard hot tub setup with landscaping"
  },
  {
    src:shinytub,
    alt: "Romantic evening hot tub with ambient lighting"
  },
  {
    src:bigtub,
    alt: "Family enjoying garden hot tub experience"
  },
  {
    src:bluetub,
    alt: "Party celebration hot tub setup"
  },
  {
    src:cementtub,
    alt: "Natural outdoor hot tub among trees"
  },
  {
    src:grasstub,
    alt: "Wood-fired hot tub with flames and steam"
  },
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-cream-100">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-cedar-600 mb-6">
            Experience Gallery
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover how our luxury wood-fired hot tubs transform any space into a private retreat. 
            From intimate backyard settings to celebration setups, see the magic for yourself.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-cedar-600 mb-6">
              Perfect for Every Occasion
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our wood-fired hot tubs create memorable experiences for all types of celebrations and gatherings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center" data-testid="occasion-romantic">
              <div className="bg-fire-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💕</span>
              </div>
              <h3 className="text-xl font-semibold text-cedar-600 mb-2">Romantic Evenings</h3>
              <p className="text-gray-600">
                Create unforgettable moments with your partner under the stars
              </p>
            </div>
            
            <div className="text-center" data-testid="occasion-family">
              <div className="bg-water-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="text-xl font-semibold text-cedar-600 mb-2">Family Fun</h3>
              <p className="text-gray-600">
                Bond with loved ones in a relaxing, natural environment
              </p>
            </div>
            
            <div className="text-center" data-testid="occasion-celebration">
              <div className="bg-cedar-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎉</span>
              </div>
              <h3 className="text-xl font-semibold text-cedar-600 mb-2">Celebrations</h3>
              <p className="text-gray-600">
                Make birthdays, anniversaries, and special events extraordinary
              </p>
            </div>
            
            <div className="text-center" data-testid="occasion-wellness">
              <div className="bg-fire-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧘‍♀️</span>
              </div>
              <h3 className="text-xl font-semibold text-cedar-600 mb-2">Wellness Retreat</h3>
              <p className="text-gray-600">
                Unwind and recharge with therapeutic hot water relaxation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-cedar-600 mb-6">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm" data-testid="testimonial-1">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-fire-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Rented the Hot Tub for a Bachelorette Party and it was a HIT!
                The entire experience was easy and effortless. The Team delivers and sets up the Hot tub, take you through a quick "how to" process and collects again.

                Great service and a great product. Also very affordable for the period given. The wood provided was also dry and perfect to get the tub VERY hot.

                Thanks team- will definitely use you in the future again"
              </p>
              <div className="font-semibold text-cedar-600">- Sylvia Stadler, Mooikloof</div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm" data-testid="testimonial-2">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-fire-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Great service and great idea. We loved having a hot tub for the weekend without the hassles of having to own and maintain it long term.
                The team was friendly and efficient, and delivered and collected the tub with no issues."
              </p>
              <div className="font-semibold text-cedar-600">- Andrea Cronje, Lynnwood</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-fire-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Ready to Create Your Own Memories?
          </h2>
          <p className="text-xl mb-8 text-fire-100">
            Book your luxury hot tub experience and see why our customers keep coming back
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-white text-fire-500 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors duration-200"
                data-testid="button-book-now-gallery"
              >
                Book Now
              </Button>
            </Link>
            {/*
            <Link href="/pricing">
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-colors duration-200"
                data-testid="button-view-pricing-gallery"
              >
                View Pricing
              </Button>
            </Link>
            */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
