declare global {
  interface Window {
    ym: (counterId: number, method: string, ...args: any[]) => void;
  }
}

const YANDEX_METRIKA_ID = parseInt(
  import.meta.env.VITE_YANDEX_METRIKA_ID || "0"
);

/**
 * Утилиты для работы с Яндекс.Метрикой
 */
export const yandexMetrika = {
  /**
   * Отследить цель
   * @param goalName - название цели
   * @param goalParams - дополнительные параметры
   */
  reachGoal: (goalName: string, goalParams?: any) => {
    if (typeof window !== "undefined" && window.ym && YANDEX_METRIKA_ID) {
      try {
        window.ym(YANDEX_METRIKA_ID, "reachGoal", goalName, goalParams);
      } catch (error) {
        console.error("Ошибка отправки цели в Яндекс.Метрику:", error);
      }
    }
  },

  /**
   * Отследить хит (просмотр страницы)
   * @param url - URL страницы
   * @param options - дополнительные опции
   */
  hit: (url: string, options?: any) => {
    if (typeof window !== "undefined" && window.ym && YANDEX_METRIKA_ID) {
      try {
        window.ym(YANDEX_METRIKA_ID, "hit", url, options);
      } catch (error) {
        console.error("Ошибка отправки хита в Яндекс.Метрику:", error);
      }
    }
  },

  /**
   * Отследить параметры пользователя
   * @param params - параметры пользователя
   */
  userParams: (params: Record<string, any>) => {
    if (typeof window !== "undefined" && window.ym && YANDEX_METRIKA_ID) {
      try {
        window.ym(YANDEX_METRIKA_ID, "userParams", params);
      } catch (error) {
        console.error(
          "Ошибка отправки параметров пользователя в Яндекс.Метрику:",
          error
        );
      }
    }
  },

  /**
   * Проверить, доступна ли Яндекс.Метрика
   */
  isAvailable: (): boolean => {
    return (
      typeof window !== "undefined" &&
      typeof window.ym === "function" &&
      YANDEX_METRIKA_ID > 0
    );
  },
};

export const METRIKA_GOALS = {
  // Формы
  FORM_SUBMIT: "form_submit",
  FORM_PHONE_SUBMIT: "form_phone_submit",
  FORM_TELEGRAM_SUBMIT: "form_telegram_submit",

  // Навигация
  ARTICLE_VIEW: "article_view",
  PRICING_VIEW: "pricing_view",

  // Взаимодействия
  TELEGRAM_CLICK: "telegram_click",
  PHONE_CLICK: "phone_click",

  // Кнопки
  CTA_CLICK: "cta_click",
  HERO_BUTTON_CLICK: "hero_button_click",

  // Куки
  COOKIE_CONSENT_ACCEPTED: "cookie_consent_accepted",
  COOKIE_CONSENT_REJECTED: "cookie_consent_rejected",
  PRIVACY_POLICY_CLICK: "privacy_policy_click",
  OFFER_AGREEMENT_CLICK: "offer_agreement_click",
} as const;
