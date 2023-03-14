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
  '#F8F9FA',
  '#B1BCD7',
  '#9FACCB',
  '#8E9CBE',
  '#6C7DA6',
  '#495D8D',
  '#273E74',
  '#1F325D',
  '#172546',
  '#10192E',
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
  primary: primary[6],
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
