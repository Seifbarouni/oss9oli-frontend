import jwt_decode from "jwt-decode";

export const decode = (token) => {
  try {
    const decoded = jwt_decode(token);
    return decoded;
  } catch (err) {
    console.log(err);
    return "";
  }
};

// export const isExpired = (token) => {
//   const decoded = jwt_decode(token);
//   console.log(decoded);
// };
