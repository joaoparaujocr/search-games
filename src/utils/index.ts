export const formatValueBRL = (value:string) => {
  return Number(value).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL"
  })
}