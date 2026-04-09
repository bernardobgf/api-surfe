import axios from "axios";

export async function getSurfConditions(lat: number, lng: number) {
  const url = "https://marine-api.open-meteo.com/v1/marine";

  const { data } = await axios.get(url, {
    params: {
      latitude: lat,
      longitude: lng,
      hourly: [
        "wave_height",
        "wave_period",
        "wave_direction",
        "wind_wave_height",
      ].join(","),
      forecast_days: 7,
    },
  });

  return data;
}
