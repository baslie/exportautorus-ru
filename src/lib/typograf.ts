import Typograf from 'typograf'

const tp = new Typograf({ locale: ['ru', 'en-US'] })

export function typograf(text: string): string {
  return tp.execute(text)
}
