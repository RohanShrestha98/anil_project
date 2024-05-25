import CryptoJS from "crypto-js";
const secretPass = import.meta.env.VITE_CRYPTO_SECRET_KEY;

export const encryptData = (plainText) => {
  const cipherText = CryptoJS.AES.encrypt(
    JSON.stringify(plainText),
    secretPass
  ).toString();
  return cipherText;
};

export const decryptedData = (ciphertext) => {
  const plainText =
    ciphertext &&
    JSON?.parse(
      CryptoJS.AES.decrypt(ciphertext.toString(), secretPass).toString(
        CryptoJS.enc.Utf8
      )
    );
  return plainText;
};
