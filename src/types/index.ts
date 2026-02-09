export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}

export interface ReleaseConfig {
  spotifyUrl: string;
  hyperfollow?: string;
  type?: string; // Override auto-detected type
}

export interface Release {
  title: string;
  artists: string[];
  cover: string;
  spotifyUrl: string;
  hyperfollow: string;
  type: string;
}
