// cryptoUtils.js

// ArrayBuffer <-> Base64 변환 함수
function arrayBufferToBase64(buffer) {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  for (let b of bytes) {
    binary += String.fromCharCode(b);
  }
  return window.btoa(binary);
}

function base64ToArrayBuffer(base64) {
  const binary = window.atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}

// PBKDF2를 통해 passphrase로부터 AES-GCM 키 파생 (salt는 sessionStorage에 저장)
async function deriveKey(passphrase, saltBuffer) {
  const encoder = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    encoder.encode(passphrase),
    "PBKDF2",
    false,
    ["deriveKey"]
  );
  return crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: saltBuffer,
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
}

// 이미 저장된 salt가 있으면 사용하고, 없으면 생성 후 저장
async function getEncryptionKey() {
  const passphrase = "your-secret-passphrase"; // 데모용 passphrase
  let saltBase64 = sessionStorage.getItem("encryptionSalt");
  let saltBuffer;
  if (!saltBase64) {
    const salt = crypto.getRandomValues(new Uint8Array(16));
    saltBase64 = arrayBufferToBase64(salt);
    sessionStorage.setItem("encryptionSalt", saltBase64);
    saltBuffer = salt;
  } else {
    saltBuffer = new Uint8Array(base64ToArrayBuffer(saltBase64));
  }
  return deriveKey(passphrase, saltBuffer);
}

// 데이터를 AES-GCM으로 암호화 (iv 생성 포함)
async function encryptData(data, key) {
  const encoder = new TextEncoder();
  const encodedData = encoder.encode(data);
  const iv = crypto.getRandomValues(new Uint8Array(12)); // 96비트 iv 권장
  const encryptedBuffer = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    encodedData
  );
  return {
    iv: arrayBufferToBase64(iv),
    data: arrayBufferToBase64(encryptedBuffer),
  };
}

// 암호화된 데이터를 복호화
async function decryptData(encryptedData, ivBase64, key) {
  const iv = new Uint8Array(base64ToArrayBuffer(ivBase64));
  const encryptedBuffer = base64ToArrayBuffer(encryptedData);
  const decryptedBuffer = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv },
    key,
    encryptedBuffer
  );
  return new TextDecoder().decode(decryptedBuffer);
}

export { getEncryptionKey, encryptData, decryptData };
