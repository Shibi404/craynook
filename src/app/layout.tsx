import type { Metadata } from 'next';
import { Fredoka, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ToastProvider } from '@/context/ToastContext';
import { CartProvider } from '@/context/CartContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { ToastContainer } from '@/components/ui/Toast';

const fredoka = Fredoka({
  variable: '--font-fredoka',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | DoodleCub',
    default: "DoodleCub — Screen-Free Printable Children's Workbooks",
  },
  description:
    'Instant download printable PDF workbooks for little learners ages 3–5. Phonics, early math, scissor skills, dinosaur coloring, and complete activity bundles. Print unlimited times at home.',
  keywords: [
    'preschool printables',
    'children workbooks pdf',
    'screen-free learning',
    'alphabet tracing',
    'scissor skills',
    'montessori printables',
    'printable coloring book',
    'kindergarten prep',
  ],
  metadataBase: new URL('https://doodlecub.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://doodlecub.com',
    siteName: 'DoodleCub',
    title: "DoodleCub — Screen-Free Printable Children's Workbooks",
    description:
      'Instant download printable PDF workbooks for little learners ages 3–5. Both US Letter and A4 formats included.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${plusJakartaSans.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2D2A26] font-body selection:bg-coral-light selection:text-coral antialiased">
        <ToastProvider>
          <CartProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <CartDrawer />
            <ToastContainer />
          </CartProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
