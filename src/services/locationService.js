// Location service for IP-based geolocation
const GHANA_COUNTRY_CODE = 'GH';

// List of African countries for regional pricing
const AFRICAN_COUNTRIES = [
  'DZ', 'AO', 'BJ', 'BW', 'BF', 'BI', 'CM', 'CV', 'CF', 'TD', 'KM', 'CG', 'CD', 'DJ', 'EG', 'GQ', 'ER', 'ET', 'GA', 'GM', 'GH', 'GN', 'GW', 'CI', 'KE', 'LS', 'LR', 'LY', 'MG', 'MW', 'ML', 'MR', 'MU', 'YT', 'MA', 'MZ', 'NA', 'NE', 'NG', 'RW', 'ST', 'SN', 'SC', 'SL', 'SO', 'ZA', 'SS', 'SD', 'SZ', 'TZ', 'TG', 'TN', 'UG', 'EH', 'ZM', 'ZW'
];

export const detectUserLocation = async () => {
  try {
    // Check for manual location override in localStorage first
    const manualLocation = localStorage.getItem('manualLocation');
    if (manualLocation) {
      const location = JSON.parse(manualLocation);
      console.log('Using manual location override:', location);
      return location;
    }

    // Default to Ghana if no manual override
    const ghanaLocation = {
      country: 'Ghana',
      countryCode: 'GH',
      region: 'ghana',
      pricing: 'ghana',
      method: 'default'
    };

    // Method 1: Domain-based detection (most reliable for target audience)
    const hostname = window.location.hostname.toLowerCase();
    const urlParams = new URLSearchParams(window.location.search);
    
    // Check for Ghana domain or URL parameter
    if (hostname.includes('.gh') || hostname.includes('ghana') || urlParams.get('region') === 'ghana') {
      console.log('Detected Ghana from domain/URL:', ghanaLocation);
      return ghanaLocation;
    }

    // Method 2: Server-side detection with headers
    try {
      const response = await fetch('/api/location');
      const data = await response.json();
      console.log('Location detected:', data);
      return data;
    } catch (error) {
      console.log('Location detection failed, using Ghana as default');
      return ghanaLocation;
    }
  } catch (error) {
    console.log('Location detection failed, using Ghana as default');
    // Return Ghana as default pricing if detection fails
    return {
      country: 'Ghana',
      countryCode: 'GH',
      region: 'ghana',
      pricing: 'ghana',
      method: 'error'
    };
  }
};

export const setManualLocation = (location) => {
  localStorage.setItem('manualLocation', JSON.stringify(location));
};

export const getPricingForRegion = (region) => {
  switch (region) {
    case 'ghana':
      return {
        currency: 'GHS',
        symbol: 'GHS',
        pricing: 'ghana'
      };
    case 'africa':
      return {
        currency: 'USD',
        symbol: '$',
        pricing: 'africa'
      };
    case 'international':
    default:
      return {
        currency: 'USD',
        symbol: '$',
        pricing: 'international'
      };
  }
}; 