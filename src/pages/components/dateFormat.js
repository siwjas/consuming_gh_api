export function dateFormat(date_in, style) {
  const date = new Date(date_in)
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: style,
  }).format(date)

}