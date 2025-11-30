/**
 * Kết hợp nhiều className thành một chuỗi.
 * Bỏ qua các giá trị null, undefined hoặc false.
 */
export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}
