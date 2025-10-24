// components/ui/app-providers.tsx
"use client";

import type { ReactNode } from "react";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { BookingProvider } from "./booking-provider";

export default function AppProviders({
  children,
  session,
}: {
  children: ReactNode;
  session?: Session | null;
}) {
  return (
    <SessionProvider session={session} refetchInterval={0} refetchOnWindowFocus={false}>
      <BookingProvider>{children}</BookingProvider>
    </SessionProvider>
  );
}
