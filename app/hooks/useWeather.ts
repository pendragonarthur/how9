import { useEffect, useState } from "react"

const WMO_CODES: Record<number, string> = {
    0: "☀️", 1: "🌤️", 2: "⛅", 3: "☁️",
    45: "🌫️", 48: "🌫️",
    51: "🌦️", 61: "🌧️", 71: "🌨️", 80: "🌦️",
    95: "⛈️",
}

interface Weather {
    temp: number
    icon: string
}

export function useWeather() {
    const [weather, setWeather] = useState<Weather | null>(null)

    useEffect(() => {
        fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=-26.99&longitude=-48.63&current=temperature_2m,weather_code&timezone=America/Sao_Paulo"
        )
            .then((res) => res.json())
            .then((data) => {
                const temp = Math.round(data.current.temperature_2m)
                const code = data.current.weather_code
                const icon = WMO_CODES[code] ?? "🌡️"
                setWeather({ temp, icon })
            })
            .catch(console.error)
    }, [])

    return weather
}