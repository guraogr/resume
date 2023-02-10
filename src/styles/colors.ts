type ThemeColor = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
]

export const primary: ThemeColor = [
  '#E8F2F1',
  '#D5E8E6',
  '#AFD2CE',
  '#8ABDB7',
  '#64A79F',
  '#3E9288',
  '#32756D',
  '#255852',
  '#193A36',
  '#132C29',
]
export const grayAlpha: ThemeColor = [
  '#EEEEEE',
  '#DFDFDF',
  '#D0D0D0',
  '#B3B3B3',
  '#959595',
  '#787878',
  '#5A5A5A',
  '#484848',
  '#242424',
  '#121212',
]
export const blueGray: ThemeColor = [
  '#F3F5F6',
  '#D3D8DB',
  '#B3BBC0',
  '#939FA4',
  '#738289',
  '#53656E',
  '#425158',
  '#323D42',
  '#21282C',
  '#191E21',
]

export const semanticColors = {
  primary: primary[5],
  primaryPale: primary[0],
  gray: grayAlpha[2],
  icon: grayAlpha[7],
  border: grayAlpha[0],
  bg: blueGray[0],
  base_tirtiary: grayAlpha[5],
  base_secondary: grayAlpha[7],
  base_primary: grayAlpha[9],
  white: '#ffffff',
}
