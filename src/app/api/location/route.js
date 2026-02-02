import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    // Method 1: Check Cloudflare country header (most reliable)
    const country = request.headers.get('cf-ipcountry') || request.headers.get('x-country-code');
    if (country) {
      const countryCode = country.toUpperCase();
      
      // Check if user is in Ghana
      if (countryCode === 'GH') {
        return NextResponse.json({
          country: 'Ghana',
          countryCode: countryCode,
          region: 'ghana',
          pricing: 'ghana',
          method: 'cloudflare'
        });
      }
      
      // List of African countries
      const AFRICAN_COUNTRIES = [
        'DZ', 'AO', 'BJ', 'BW', 'BF', 'BI', 'CM', 'CV', 'CF', 'TD', 'KM', 'CG', 'CD', 
        'DJ', 'EG', 'GQ', 'ER', 'ET', 'GA', 'GM', 'GH', 'GN', 'GW', 'CI', 'KE', 'LS', 
        'LR', 'LY', 'MG', 'MW', 'ML', 'MR', 'MU', 'YT', 'MA', 'MZ', 'NA', 'NE', 'NG', 
        'RW', 'ST', 'SN', 'SC', 'SL', 'SO', 'ZA', 'SS', 'SD', 'SZ', 'TZ', 'TG', 'TN', 
        'UG', 'EH', 'ZM', 'ZW'
      ];
      
      // Check if user is in Africa
      if (AFRICAN_COUNTRIES.includes(countryCode)) {
        return NextResponse.json({
          country: 'Unknown',
          countryCode: countryCode,
          region: 'africa',
          pricing: 'africa',
          method: 'cloudflare'
        });
      }
      
      // Default to international
      return NextResponse.json({
        country: 'Unknown',
        countryCode: countryCode,
        region: 'international',
        pricing: 'international',
        method: 'cloudflare'
      });
    }

    // Method 2: Fallback to IP-based detection
    const response = await fetch('http://ip-api.com/json/?fields=country,countryCode');
    const data = await response.json();
    
    if (data && data.countryCode) {
      const countryCode = data.countryCode.toUpperCase();
      
      // Check if user is in Ghana
      if (countryCode === 'GH') {
        return NextResponse.json({
          country: 'Ghana',
          countryCode: countryCode,
          region: 'ghana',
          pricing: 'ghana',
          method: 'ip-api'
        });
      }
      
      // List of African countries
      const AFRICAN_COUNTRIES = [
        'DZ', 'AO', 'BJ', 'BW', 'BF', 'BI', 'CM', 'CV', 'CF', 'TD', 'KM', 'CG', 'CD', 
        'DJ', 'EG', 'GQ', 'ER', 'ET', 'GA', 'GM', 'GH', 'GN', 'GW', 'CI', 'KE', 'LS', 
        'LR', 'LY', 'MG', 'MW', 'ML', 'MR', 'MU', 'YT', 'MA', 'MZ', 'NA', 'NE', 'NG', 
        'RW', 'ST', 'SN', 'SC', 'SL', 'SO', 'ZA', 'SS', 'SD', 'SZ', 'TZ', 'TG', 'TN', 
        'UG', 'EH', 'ZM', 'ZW'
      ];
      
      // Check if user is in Africa
      if (AFRICAN_COUNTRIES.includes(countryCode)) {
        return NextResponse.json({
          country: data.country || 'Africa',
          countryCode: countryCode,
          region: 'africa',
          pricing: 'africa',
          method: 'ip-api'
        });
      }
      
      // Default to international
      return NextResponse.json({
        country: data.country || 'International',
        countryCode: countryCode,
        region: 'international',
        pricing: 'international',
        method: 'ip-api'
      });
    }
    
    // Method 3: Default fallback
    return NextResponse.json({
      country: 'International',
      countryCode: null,
      region: 'international',
      pricing: 'international',
      method: 'default'
    });
    
  } catch (error) {
    console.error('Location detection error:', error);
    return NextResponse.json({
      country: 'International',
      countryCode: null,
      region: 'international',
      pricing: 'international',
      method: 'error'
    });
  }
}
