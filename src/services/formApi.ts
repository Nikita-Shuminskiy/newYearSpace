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
    saved: "database" | "logs_only";
  };
}

export async function submitForm(
  data: FormSubmissionData
): Promise<SubmissionResponse> {
  try {
    const url = "https://functions.yandexcloud.net/d4emln1iqd1hqvulk8h3";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        phone: data.phone,
        telegram: data.telegram,
        planName: data.planName,
        planPrice: data.planPrice,
        billingType: data.billingType,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    return result;
  } catch (error) {
    console.error(" Ошибка отправки формы:", error);
    throw error;
  }
}
