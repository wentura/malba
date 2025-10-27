"use client";
import { useEffect } from "react";

export default function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== "undefined" && "PerformanceObserver" in window) {
      // LCP (Largest Contentful Paint)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log("LCP:", lastEntry.startTime);

        // Send to analytics if needed
        if (window.gtag) {
          window.gtag("event", "web_vitals", {
            event_category: "Web Vitals",
            event_label: "LCP",
            value: Math.round(lastEntry.startTime),
          });
        }
      });
      lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });

      // FID (First Input Delay)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.log("FID:", entry.processingStart - entry.startTime);

          if (window.gtag) {
            window.gtag("event", "web_vitals", {
              event_category: "Web Vitals",
              event_label: "FID",
              value: Math.round(entry.processingStart - entry.startTime),
            });
          }
        });
      });
      fidObserver.observe({ entryTypes: ["first-input"] });

      // CLS (Cumulative Layout Shift)
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        console.log("CLS:", clsValue);

        if (window.gtag) {
          window.gtag("event", "web_vitals", {
            event_category: "Web Vitals",
            event_label: "CLS",
            value: Math.round(clsValue * 1000) / 1000,
          });
        }
      });
      clsObserver.observe({ entryTypes: ["layout-shift"] });

      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  return null; // This component doesn't render anything
}
