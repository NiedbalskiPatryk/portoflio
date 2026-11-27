// Shared contract between EstimateSection (dispatcher) and ContactForm (listener).
export const CONTACT_PREFILL_EVENT = "itpapi:prefill";

export interface ContactPrefillDetail {
  subject?: string;
  message?: string;
}

export function dispatchContactPrefill(detail: ContactPrefillDetail) {
  window.dispatchEvent(
    new CustomEvent<ContactPrefillDetail>(CONTACT_PREFILL_EVENT, { detail })
  );
}
