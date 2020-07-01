/**
 * JWT Token's full payload: {
 *   sampleAccessToken:
 *   'Tj9FE8zn493x31233adf5e7a07c993dc803d8ad198e55b83acb9f8699780d466',
 *   userId: 1216766,
 *   username: 'pawel.drozanski',
 *   admin: false,
 *   iat: 1579644889,
 *   exp: 1579648489,
 *   aud: 'https://animedigitalnetwork.fr',
 *   iss: 'sample'
 * }
 */
export default (): string => {
  return 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG5BY2Nlc3NUb2tlbiI6IlRqOUZFOHpuNDkzeDMxMjMzYWRmNWU3YTA3Yzk5M2RjODAzZDhhZDE5OGU1NWI4M2FjYjlmODY5OTc4MGQ0NjYiLCJ1c2VySWQiOjEyMTY3NjYsInVzZXJuYW1lIjoicGF3ZWwuZHJvemFuc2tpIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE1Nzk2NDQ4ODksImV4cCI6MTU3OTY0ODQ4OSwiYXVkIjoiaHR0cHM6Ly9hbmltZWRpZ2l0YWxuZXR3b3JrLmZyIiwiaXNzIjoiQUROIn0.Xn4aBETH2eGpEQZLYe6IWeH3n1uiL_ifJPmkpbWpowxCHc1a7nE_G3lviwQZ1HCwITKrqN4KVGQAHR_rMph2_g';
};
