import { RegisterInterface } from "@/types/types";

export async function getToken(payload: RegisterInterface) {
  return await fetch("http://localhost:3001/api/v1/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}
