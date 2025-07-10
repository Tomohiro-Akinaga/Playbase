export async function fetchGames(): Promise<Game[]> {
  const response = await fetch(
    `${process.env.EXPO_PUBLIC_RAWG_BASE_URL}/games?platforms=187&key=${process.env.EXPO_PUBLIC_RAWG_API_KEY}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch games: ${response.statusText}`);
  }

  return await response.json();
}
