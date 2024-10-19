export function getJwtKey(): Uint8Array {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    throw new Error("Secret is not defined on enviroment varibles.");
  }

  return new TextEncoder().encode(jwtSecret);
}
