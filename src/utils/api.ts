export interface LeadData {
  name: string;
  mobile: string;
  email?: string;
  preferred_date?: string;
  consultation_mode?: string;
  medical_system?: string;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_content?: string | null;
  utm_term?: string | null;
  source?: string;
}

export async function submitLead(data: LeadData): Promise<any> {
  const envApiUrl = import.meta.env.VITE_API_URL || import.meta.env.NEXT_PUBLIC_API_URL;
  let url = '';
  if (envApiUrl) {
    const baseUrl = envApiUrl.replace(/\/$/, '');
    url = `${baseUrl}/api/leads/create`;
  } else {
    url = 'https://ojassanjivani.rightbraininfotech.in//api/leads/create';
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorText = await response.text();
    let errorMessage = 'Failed to submit lead. Please try again.';
    try {
      const errorData = JSON.parse(errorText);
      errorMessage = errorData.message || errorMessage;
    } catch {
      // Fallback to parsed string if not json
      if (errorText) {
        errorMessage = errorText;
      }
    }
    throw new Error(errorMessage);
  }

  return response.json();
}
