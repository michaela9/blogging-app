import { useLocalStorage } from "usehooks-ts";

import type { Tokens } from "@/utils/tokenLocalStorage";
import {
  anonymousTokens,
  LOCALSTORAGE_KEY_TOKEN,
} from "@/utils/tokenLocalStorage";

export default function useToken() {
  return useLocalStorage<Tokens>(LOCALSTORAGE_KEY_TOKEN, anonymousTokens);
}
