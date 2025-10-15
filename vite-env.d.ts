interface ImportMetaEnv {
  readonly VITE_SERVICE_ID: string;
  readonly VITE_TEMPLATE_ID: string;

  readonly VITE_USER_ID: string;
  readonly VITE_SERVER_URL: string;
  readonly VITE_CAPTCHA_S: string;
  readonly VITE_CAPTCHA_K: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
