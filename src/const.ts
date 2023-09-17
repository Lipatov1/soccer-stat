export enum Status {
  Scheduled = 'SCHEDULED',
  Live = 'LIVE',
  InPlay = 'IN_PLAY',
  Paused = 'PAUSED',
  Finished = 'FINISHED',
  Postponed = 'POSTPONED',
  Canceled = 'CANCELED',
}

export const statusDictionary = {
  [Status.Scheduled]: 'Запланирован',
  [Status.Live]: 'В прямом эфире',
  [Status.InPlay]: 'В игре',
  [Status.Paused]: 'Пауза',
  [Status.Finished]: 'Завершен',
  [Status.Postponed]: 'Приостановлен',
  [Status.Canceled]: 'Отменен',
}
