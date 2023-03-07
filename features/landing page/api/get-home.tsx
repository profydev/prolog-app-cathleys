import axios from "axios";

export async function getHome() {
  const { data } = await axios.get(
    "https://prolog-api.profy.dev/content-page/home"
  );
  return data;
}
