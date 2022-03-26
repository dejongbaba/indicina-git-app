export const getToken = () => sessionStorage.getItem("access_token");

export function formatNumber(num: string | number) {
  if (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  return 0;
}
