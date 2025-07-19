import { generateAccessToken } from "../lib/paypal";

test("generates a PayPal access token", async () => {
  const tokenResponse = await generateAccessToken();
  console.log(tokenResponse);
  // Should be a string that is not empty
  expect(typeof tokenResponse).toBe("string");
  expect(tokenResponse.length).toBeGreaterThan(0);
});
