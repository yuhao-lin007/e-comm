import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import { APP_DESCRRIPTION, APP_NAME, SERVER_URL } from '@/lib/constants';

const inter = Inter({
  subsets:['latin']
});
export const metadata: Metadata = {
  title:{
    template: `%s | ecomm project`,
    default : APP_NAME
  },
  description: APP_DESCRRIPTION,
  metadataBase: new URL(SERVER_URL)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
