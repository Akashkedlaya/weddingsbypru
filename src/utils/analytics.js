// Google Analytics Event Tracking

export const trackEvent = (eventName, eventParams = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Pre-defined events
export const trackContactForm = (method) => {
  trackEvent('contact_form_submit', {
    form_method: method,
  });
};

export const trackGalleryView = (galleryName) => {
  trackEvent('gallery_view', {
    gallery_name: galleryName,
  });
};

export const trackVideoPlay = (videoTitle) => {
  trackEvent('video_play', {
    video_title: videoTitle,
  });
};

export const trackWhatsAppClick = () => {
  trackEvent('whatsapp_click', {
    button_location: 'floating_button',
  });
};

export const trackPhoneClick = () => {
  trackEvent('phone_click');
};

export const trackEmailClick = () => {
  trackEvent('email_click');
};
