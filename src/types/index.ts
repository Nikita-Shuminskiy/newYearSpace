export interface FormSubmissionData {
  name?: string;
  phone: string;
  telegram: string;
  planName?: string;
  planPrice?: string;
  billingType?: "month" | "year";
}

export interface SubmissionResponse {
  success: boolean;
  message?: string;
  error?: string;
  data?: {
    id: string;
    formType: string;
    hasPhone: boolean;
    hasTelegram: boolean;
    planName?: string;
    saved: "database";
  };
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  image: string;
}
