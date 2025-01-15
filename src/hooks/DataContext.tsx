import React, { createContext, useEffect, useState } from 'react'
import dataJson from '../assets/api/data.json'
//Контекст для получения всех данных, активной категории и для изменений активной категории
interface IDataContext {
  data: IData //данные
  activeCategoryId: number // активная категория
  changeActiveCategoryId: (e: number) => void // изменение активной категории
}

export const DataContext = createContext<IDataContext>({
  data: {
    header: '',
    categories: [] as ICategory[],
  },
  activeCategoryId: 0,
  changeActiveCategoryId: function (): void {
    throw new Error('Function not implemented.')
  },
})

export const DataState = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<IData>({
    header: '',
    categories: [] as ICategory[],
  })
  const [stateActiveCategoryId, setStateActiveCategoryId] = useState<number>(0)
  const activeCategoryId = stateActiveCategoryId
  const changeActiveCategoryId = (e: number) => setStateActiveCategoryId(e)
  useEffect(() => {
    const res: IDataApi = dataJson
    const dataFromRes: IData = res.data
    setData(dataFromRes)
  }, [dataJson])
  return (
    <DataContext.Provider
      value={{ data, activeCategoryId, changeActiveCategoryId }}
    >
      {children}
    </DataContext.Provider>
  )
}
