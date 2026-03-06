export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}

export interface ReleaseConfig {
  spotifyUrl?: string;
  youtubeUrl?: string; // Support for YouTube releases
  spotifyArtistId?: string; // Support for Spotify Artist link in Release
  hyperfollow?: string;
  type?: string; // Override auto-detected type
  year?: string; // Override year
  videoUrl?: string; // Optional background video
}

export interface Release {
  title: string;
  artists: string[];
  cover: string;
  spotifyUrl: string;
  youtubeUrl?: string;
  spotifyArtistId?: string;
  hyperfollow: string;
  type: string;
  year?: string;
  videoUrl?: string;
}

export interface EditorialSection {
  title: string;
  url: string;
  imageUrl: string;
  description?: string;
}

export interface ArtistLink {
  label: string;
  url: string;
  icon: string;
  color?: string;
  locked?: boolean; // For "Coming Soon" links
}

export interface Artist {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  instagram: string;
  type?: 'person' | 'entity'; // New: to distinguish between people and entities
  spotifyArtistId?: string; // New: for Spotify Artist Embed
  links: ArtistLink[];
  releases?: ReleaseConfig[];
  coAuthoredReleases?: ReleaseConfig[]; // New: for Production/Co-authorship
}
