export interface IWeather {
    description: string;
    icon: string;
    id: number;
    main: string;
}
export interface IData {
    base: string;
    clouds: {
        all: number;
    };
    cod: number;
    coord: {
        lon: number;
        lat: number;
    };
    dt: number;
    id: number;
    main: {
        temp: number;
        feels_like: number;
        grnd_level: number;
        pressure: number;
        sea_level: number;
        temp_max:number;
        temp_min: number;
    };
    name: string;
    sys: {
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    visibility: number;
    weather: IWeather[];
    wind: {
        deg: number;
        gust: number;
        speed: any;
    }
}
