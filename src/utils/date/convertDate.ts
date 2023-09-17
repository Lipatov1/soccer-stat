import { Dayjs } from 'dayjs'

declare type EventValue<DateType> = DateType | null
declare type RangeValue<DateType> = [EventValue<DateType>, EventValue<DateType>] | null

export const extractDateFromDateTime = (date: string) => {
  return new Date(date).toLocaleDateString('ru')
}

export const extractTimeFromDateTime = (date: string) => {
  return new Date(date).toLocaleTimeString('ru', { hour: '2-digit', minute: '2-digit' })
}

export const getDatesFromDataPicker = (value: RangeValue<Dayjs> | undefined) => {
  const from = value?.[0]?.format('YYYY-MM-DD') ?? ''
  const to = value?.[1]?.format('YYYY-MM-DD') ?? ''
  return [from, to]
}
