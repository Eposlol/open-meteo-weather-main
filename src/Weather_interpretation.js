export default function weatherInterpretation(code) {
    if (code === 1 || code ===  2 || code ===  3) return 'Mainly clear, partly cloudy, and overcast';
    if (code === 0) return 'Clear sky';
    if (code === 45 || code ===  48) return 'Fog and depositing rime fog';
    if (code === 51 || code ===  53 || code ===  55) return 'Drizzle: Light, moderate, and dense intensity';
    if (code === 56 || code ===  57) return 'Freezing Drizzle: Light and dense intensity';
    if (code === 61 || code === 63 || code === 65) return 'Rain: Slight, moderate and heavy intensity';
    if (code === 66 || code === 67) return 'Freezing Rain: Light and heavy intensity';
    if (code === 71 || code ===  73 || code ===  75) return 'Snow fall: Slight, moderate, and heavy intensity';
    if (code === 77) return 'Snow grains';
    if (code === 80 || code ===  81 || code ===  82) return 'Rain showers: Slight, moderate, and violent';
    if (code === 85 || code ===  86) return 'Snow showers slight and heavy';
    if (code === 95) return 'Thunderstorm: Slight or moderate';
    if (code === 96 || code ===  99) return 'Thunderstorm with slight and heavy hail';
}