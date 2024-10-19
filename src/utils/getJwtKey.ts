export function getJwtKey(): Uint8Array {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    throw new Error(`JWT_SECRET is not defined: ${jwtSecret}`);
  }

  return new TextEncoder().encode(jwtSecret);
}
