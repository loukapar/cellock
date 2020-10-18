const DEFAULT_HEADER = {
  "Content-Type": "application/json",
};

export default async function fetchRequest(
  url,
  method,
  body = null,
  headers = DEFAULT_HEADER
) {
  try {
    if (!["GET", "POST", "DELETE", "PATCH", "PUT"].includes(method)) {
      console.error("Wrong method param");
      return;
    }
    const response = await fetch(url, {
      headers: headers,
      method: method,
      body: body ? JSON.stringify(body) : null,
    });
    const jsonResult = await response.json();
    return jsonResult;
  } catch (error) {
    return error.message;
  }
}
