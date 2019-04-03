export interface MainObj{
temp: number,
}

export interface WeatherSpecs{
  main:string,
  description:string,
  icon:string,
}


export interface SysObj{
  country:string,
}

export interface Weather{

main: MainObj,
name: string,
weather: WeatherSpecs[],
sys: SysObj,
}