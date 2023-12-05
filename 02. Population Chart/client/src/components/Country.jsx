import { useState } from "react"
import { tenHighestPopulation } from "../data/Population"

const Country = ({entry}) => {
  const handleWidth = (pop) => {
    const worldPop = tenHighestPopulation[1].population;
    const per = pop/worldPop * 100;
    const res = per + "%"
    return per+"%"
  }
  return (
    <div className="grid grid-cols-6">
        <p className="font-medium text-xl">{entry.country.toUpperCase()}</p>
        <div className="h-10 col-span-4" >
            <div className="bg-yellow-500 h-full rounded-md"
            style={{width: handleWidth(entry.population)}}>
                
            </div>
        </div>
        <p className="text-left ml-24 font-medium text-xl">{entry.population}</p>
    </div>
  )
}
export default Country