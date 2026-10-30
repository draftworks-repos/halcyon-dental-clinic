export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email?: string;
  service?: string;
  preferredDate?: string;
  notes?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateAppointmentForm(data: AppointmentFormData): ValidationResult {
  const errors: Record<string, string> = {};

  // Validate Name
  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 characters).';
  }

  // Validate Phone
  const cleanedPhone = (data.phone || '').replace(/\D/g, '');
  if (!cleanedPhone || cleanedPhone.length < 10) {
    errors.phone = 'Please provide a valid 10-digit phone number.';
  }

  // Validate Email (optional in quick CTA, but if provided must be valid)
  if (data.email && data.email.trim() !== '') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      errors.email = 'Please provide a valid email address.';
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function formatPhoneNumber(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export function estimateTreatmentDuration(serviceKey: string): { duration: string; consultationIncluded: boolean } {
  switch (serviceKey) {
    case 'invisalign':
      return { duration: '45 mins', consultationIncluded: true };
    case 'implants':
      return { duration: '60 mins', consultationIncluded: true };
    case 'veneers':
      return { duration: '50 mins', consultationIncluded: true };
    case 'cleaning':
    case 'preventive':
      return { duration: '40 mins', consultationIncluded: true };
    default:
      return { duration: '30 mins', consultationIncluded: true };
  }
}
