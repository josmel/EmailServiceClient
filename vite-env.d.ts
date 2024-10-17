/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly API_URL_SEND_MESSAGE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
