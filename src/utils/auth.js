const jws = require('jws');
const crypto = require('crypto');
const config = require('../config/AppConfigs');

const IV_LENGTH = 16; // For AES, this is always 16
const ALGORITHM = 'aes-256-cbc';

function encrypt(text) {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(ALGORITHM, Buffer.from(config.secretEncrypt), iv);
  const encrypted = cipher.update(text);

  return `${iv.toString('hex')}:${Buffer.concat([encrypted, cipher.final()]).toString('hex')}`;
}

function decrypt(text) {
  const textParts = text.split(':');
  const iv = Buffer.from(textParts.shift(), 'hex');

  const encryptedText = Buffer.from(textParts.join(':'), 'hex');
  const decipher = crypto.createDecipheriv(ALGORITHM, Buffer.from(config.secretEncrypt), iv);
  const decrypted = decipher.update(encryptedText);

  return Buffer.concat([decrypted, decipher.final()]).toString();
}

exports.sign = payload => (
  jws.sign({
    header: { alg: 'HS256' },
    payload: encrypt(JSON.stringify(payload)),
    secret: config.secret,
  }));


exports.login = (req, res, next) => {
  try {
    const token = req.headers.authorization || req.headers.Authorization;
    const payload = JSON.parse(decrypt(jws.decode(token).payload));

    if (payload.identifier) {
      next();
    } else {
      res.status(401);
    }
  } catch (e) {
    res.status(401);
  }
};
