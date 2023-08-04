"client only";

export type LoggedTokens = {
  token: string;
};

export type AnonymousTokens = {
  token: null;
};

export type Tokens = LoggedTokens | AnonymousTokens;

export const LOCALSTORAGE_KEY_TOKEN = "token";

export const anonymousTokens: AnonymousTokens = {
  token: null,
};

export function setTokens(tokens: Tokens) {
  localStorage.setItem(LOCALSTORAGE_KEY_TOKEN, JSON.stringify(tokens));
}

export function getTokens(): Tokens {
  const data = localStorage.getItem(LOCALSTORAGE_KEY_TOKEN);
  if (data === null) {
    setTokens(anonymousTokens);

    return anonymousTokens;
  }

  return JSON.parse(data) as Tokens;
}

export function clearTokens() {
  localStorage.removeItem(LOCALSTORAGE_KEY_TOKEN);
}
