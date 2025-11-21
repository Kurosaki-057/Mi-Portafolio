"use client";

import { useEffect, useState } from "react";
import Navbar from "./navbar";
import ScrollToTop from "./scroll-to-top";
import SocialLinks from "./social-links";

export function ClientLayout() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <SocialLinks />
    </>
  );
}
