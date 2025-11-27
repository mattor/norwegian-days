import { expect, it } from 'vitest'
import { CelebrationDayId, getCelebrationDays } from '../../src'

it('should return the correct special days', () => {
  const specialDaysOf1977 = getCelebrationDays(1977)

  const valentinesDay = specialDaysOf1977.find(day => day.id === CelebrationDayId.ValentinesDay)
  expect(valentinesDay.date).toEqual('1977-02-14')

  const mothersDay = specialDaysOf1977.find(day => day.id === CelebrationDayId.MothersDay)
  expect(mothersDay.date).toEqual('1977-02-13')

  const fathersDay = specialDaysOf1977.find(day => day.id === CelebrationDayId.FathersDay)
  expect(fathersDay.date).toEqual('1977-11-13')

  const easterTuesday = specialDaysOf1977.find(day => day.id === CelebrationDayId.EasterTuesday)
  expect(easterTuesday.date).toEqual('1977-04-05')

  const pancakeDay = specialDaysOf1977.find(day => day.id === CelebrationDayId.PancakeDay)
  expect(pancakeDay.date).toEqual('1977-04-05')

  const firstGrillDay = specialDaysOf1977.find(day => day.id === CelebrationDayId.FirstGrillDay)
  expect(firstGrillDay.date).toEqual('1977-05-14')

  const seaFoodDay = specialDaysOf1977.find(day => day.id === CelebrationDayId.SeaFoodDay)
  expect(seaFoodDay.date).toEqual('1977-06-11')

  const norwegianAppleDay = specialDaysOf1977.find(day => day.id === CelebrationDayId.NorwegianAppleDay)
  expect(norwegianAppleDay.date).toEqual('1977-09-27')

  const worldSchoolMilkDay = specialDaysOf1977.find(day => day.id === CelebrationDayId.WorldSchoolMilkDay)
  expect(worldSchoolMilkDay.date).toEqual('1977-09-28')

  const feastOfTheSheepCabbage = specialDaysOf1977.find(day => day.id === CelebrationDayId.FeastOfTheSheepCabbage)
  expect(feastOfTheSheepCabbage.date).toEqual('1977-09-29')

  const startOfLuteFishSeason = specialDaysOf1977.find(day => day.id === CelebrationDayId.StartOfLuteFishSeason)
  expect(startOfLuteFishSeason.date).toEqual('1977-10-05')

  const worldEggDay = specialDaysOf1977.find(day => day.id === CelebrationDayId.WorldEggDay)
  expect(worldEggDay.date).toEqual('1977-10-14')

  const cheeseDay = specialDaysOf1977.find(day => day.id === CelebrationDayId.CheeseDay)
  expect(cheeseDay.date).toEqual('1977-10-28')

  const thanksgiving = specialDaysOf1977.find(day => day.id === CelebrationDayId.Thanksgiving)
  expect(thanksgiving.date).toEqual('1977-11-24')
})
