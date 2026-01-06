import React from 'react';
import TestimonialCarousel from './components/TestimonialCarousel';
import TestimonialMasonry from './components/TestimonialMasonry';
import TestimonialFeatured from './components/TestimonialFeatured';
import GoogleReviewsCard from './components/GoogleReviewsCard';
import { REVIEWS } from './constants';
import { ShieldCheck } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-24">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 py-6 mb-12 shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-brand-600 rounded-lg text-white">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 leading-tight">Flood Doctor</h1>
              <p className="text-xs text-slate-500">Restoration Services</p>
            </div>
          </div>
          <a href="#contact" className="hidden sm:block px-5 py-2 bg-brand-600 text-white font-medium rounded-full hover:bg-brand-700 transition-colors shadow-sm">
            Get Emergency Help
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 space-y-24">
        
        {/* Variant 1: Carousel */}
        <section>
          <div className="text-center mb-10">
             <span className="text-brand-600 font-bold tracking-wider text-sm uppercase">Variant 1</span>
             <h2 className="text-3xl font-bold text-slate-900 mt-2">Carousel Slider</h2>
             <p className="text-slate-500 mt-2">Classic, elegant, space-saving.</p>
          </div>
          <TestimonialCarousel reviews={REVIEWS} />
        </section>

        <hr className="border-slate-200" />

        {/* Variant 2: Masonry */}
        <section className="bg-slate-100 -mx-4 px-4 py-16 rounded-3xl">
          <div className="text-center mb-10">
             <span className="text-brand-600 font-bold tracking-wider text-sm uppercase">Variant 2</span>
             <h2 className="text-3xl font-bold text-slate-900 mt-2">Masonry Grid</h2>
             <p className="text-slate-500 mt-2">Great for social proof density and varying content length.</p>
          </div>
          <TestimonialMasonry reviews={REVIEWS} />
        </section>

        <hr className="border-slate-200" />

        {/* Variant 3: Featured */}
        <section>
          <div className="text-center mb-10">
             <span className="text-brand-600 font-bold tracking-wider text-sm uppercase">Variant 3</span>
             <h2 className="text-3xl font-bold text-slate-900 mt-2">Featured Review</h2>
             <p className="text-slate-500 mt-2">Highlight your best story with supporting evidence.</p>
          </div>
          <TestimonialFeatured reviews={REVIEWS} />
        </section>

        <hr className="border-slate-200" />

        {/* Variant 4: Google Style */}
        <section className="flex flex-col items-center">
          <div className="text-center mb-10">
             <span className="text-brand-600 font-bold tracking-wider text-sm uppercase">Variant 4</span>
             <h2 className="text-3xl font-bold text-slate-900 mt-2">Google Reviews Integration</h2>
             <p className="text-slate-500 mt-2">Familiar UI pattern that builds immediate trust.</p>
          </div>
          <div className="w-full bg-white p-12 rounded-3xl border border-slate-200 shadow-sm bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
             <GoogleReviewsCard reviews={REVIEWS} />
          </div>
        </section>

      </main>

      <footer className="mt-24 py-12 bg-slate-900 text-slate-400 text-center">
        <p>&copy; {new Date().getFullYear()} Flood Doctor. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;