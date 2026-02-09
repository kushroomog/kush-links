import { Release, ReleaseConfig } from "@/types";

interface SpotifyOEmbed {
  title: string;
  thumbnail_url: string;
  html: string;
}

export async function fetchRelease(config: ReleaseConfig): Promise<Release | null> {
  try {
    const oembedUrl = `https://open.spotify.com/oembed?url=${encodeURIComponent(config.spotifyUrl)}`;
    const response = await fetch(oembedUrl, { next: { revalidate: 86400 } });

    if (!response.ok) return null;

    const data: SpotifyOEmbed = await response.json();

    // Parse the iframe title attribute for full info (format: "Album by Artist")
    const titleMatch = data.html.match(/title="([^"]+)"/);
    const fullTitle = titleMatch ? titleMatch[1] : data.title;

    // Extract album/track name and artists
    const byMatch = fullTitle.match(/^(.+?)\s+by\s+(.+)$/i);

    let title = data.title;
    let artists: string[] = [];

    if (byMatch) {
      title = byMatch[1];
      artists = byMatch[2].split(/,\s*/).map(a => a.trim());
    }

    // Auto-detect type from URL, but allow override
    const autoType = config.spotifyUrl.includes('/album/') ? 'Album'
                   : config.spotifyUrl.includes('/track/') ? 'Single'
                   : config.spotifyUrl.includes('/playlist/') ? 'Playlist'
                   : 'Release';

    return {
      title,
      artists,
      cover: data.thumbnail_url,
      spotifyUrl: config.spotifyUrl,
      hyperfollow: config.hyperfollow || config.spotifyUrl,
      type: config.type || autoType,
    };
  } catch (error) {
    console.error('Failed to fetch Spotify oEmbed:', error);
    return null;
  }
}

export async function fetchAllReleases(configs: ReleaseConfig[]): Promise<Release[]> {
  const releases = await Promise.all(configs.map(fetchRelease));
  return releases.filter((r): r is Release => r !== null);
}
