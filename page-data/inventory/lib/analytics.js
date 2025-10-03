// Analytics utility functions
export const trackEvent = (eventName, properties = {}) => {
  // Integrate with your analytics provider (GA4, Mixpanel, etc.)
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, properties);
  }
  
  console.log(`Analytics Event: ${eventName}`, properties);
};

export const trackDemoRequest = (formData) => {
  trackEvent('demo_request', {
    source: 'landing_page',
    company: formData.company,
    use_case: formData.useCase
  });
};

export const trackCTAClick = (ctaLocation, ctaText) => {
  trackEvent('cta_click', {
    location: ctaLocation,
    text: ctaText
  });
};