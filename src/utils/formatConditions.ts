interface OpenMeteoResponse {
  hourly: {
    time: string[];
    wave_height: number[];
    wave_period: number[];
    wave_direction: number[];
    wind_wave_height: number[];
  };
}

interface HourCondition {
  time: string;
  wave_height: number;
  wave_period: number;
  wave_direction: number;
  wind_wave_height: number;
  score: number;
}

function calcScore(
  waveHeight: number,
  wavePeriod: number,
  windWaveHeight: number,
): number {
  let score = 0;

  // altura ideal entre 1m e 2.5m
  if (waveHeight >= 1 && waveHeight <= 2.5) score += 4;
  else if (waveHeight > 0.5 && waveHeight < 1) score += 2;
  else if (waveHeight > 2.5 && waveHeight <= 4) score += 2;

  // período alto = onda mais organizada
  if (wavePeriod >= 12) score += 3;
  else if (wavePeriod >= 8) score += 2;
  else if (wavePeriod >= 5) score += 1;

  // wind wave baixo = menos bagunça
  if (windWaveHeight <= 0.5) score += 3;
  else if (windWaveHeight <= 1) score += 1;

  return Math.min(score, 10);
}

export function formatConditions(data: OpenMeteoResponse): HourCondition[] {
  const { time, wave_height, wave_period, wave_direction, wind_wave_height } =
    data.hourly;

  return time.map((t, i) => ({
    time: t,
    wave_height: wave_height[i],
    wave_period: wave_period[i],
    wave_direction: wave_direction[i],
    wind_wave_height: wind_wave_height[i],
    score: calcScore(wave_height[i], wave_period[i], wind_wave_height[i]),
  }));
}
