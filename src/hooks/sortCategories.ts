
//Функция для сортировки событий по доте от самого раннего до самого позднего
//Если приходят события не отсортированные, то пользуемся
export default function sortCategories(array: IEvent[]) {
  array.sort((a: IEvent, b: IEvent) => {
    return a.date - b.date
  })
  return array
}
