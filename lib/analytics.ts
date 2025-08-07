// Analytics and performance monitoring utilities
export const analytics = {
  // Track page views
  pageview: (url: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID!, {
        page_path: url,
      });
    }
  },

  // Track events
  event: (action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  },

  // Track devotional reading
  trackDevotionalRead: (title: string) => {
    analytics.event('read_devotional', 'engagement', title);
  },

  // Track theme toggle
  trackThemeToggle: (theme: string) => {
    analytics.event('toggle_theme', 'ui', theme);
  },
};

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}
