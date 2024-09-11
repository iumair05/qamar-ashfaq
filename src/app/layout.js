// import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './css/card.scss';
import './css/globals.scss';
import Navbar from '../components/navbar';
import Footer from '../components/footer';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: "Qamar Portfolio Site",
    template: "%s - Qamar Portfolio Site"
  },
  description: "This is the portfolio of Qamar Ashfaq. I am a full stack developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 container text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
      {/* <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} /> */}
    </html>
  )
};
