"use client";

import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import {Protocols} from '@waku/sdk'
import { LightNodeProvider } from "@waku/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <LightNodeProvider
      options={{defaultBootstrap: true}}
      protocols={[Protocols.Store, Protocols.Filter, Protocols.LightPush]}
    >
      
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
      
      </LightNodeProvider>
  );
}
