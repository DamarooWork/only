interface IEvent {
  id: number
  date: number
  description: string
}
interface ICategory {
  type: string
  events: IEvent[]
}

interface IData {
  header: string
  categories: ICategory[]
}

interface IDataApi {
  data: IData
}
