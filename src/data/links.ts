import { SocialLink, EditorialSection, ReleaseConfig } from "@/types";

export const editorial: EditorialSection = {
  title: "Editorial",
  url: "https://kushroom.site/blog",
  imageUrl: "/editorial.jpg",
};

export const socials: SocialLink[] = [
  {
    name: "Visite o Site Oficial",
    url: "https://kushroom.site",
    icon: "globe",
    color: "#10b981",
  },
  {
    name: "Siga no Instagram",
    url: "https://www.instagram.com/kushroom.wav",
    icon: "instagram",
    color: "#E4405F",
  },
  {
    name: "Acompanhe no TikTok",
    url: "https://www.tiktok.com/@kushroom.wav",
    icon: "tiktok",
    color: "#ff0050",
  },
  {
    name: "Assista no YouTube",
    url: "https://youtube.com/@kushroom-wav",
    icon: "youtube",
    color: "#FF0000",
  },
  {
    name: "Siga no Kwai",
    url: "https://k.kwai.com/u/@kushroom.wav/r6cZwHCx",
    icon: "kwai",
    color: "#FF6B00",
  },
];

// Just add Spotify URLs here - info will be fetched automatically
// First release is featured, rest are displayed in reverse chronological order
export const releases: ReleaseConfig[] = [
  {
    spotifyUrl: "https://open.spotify.com/album/4nGRGyxfQPXsPpNco9dxRn",
    hyperfollow: "https://distrokid.com/hyperfollow/smithi/new-wave-the-surf",
    type: "EP",
    year: "2025",
  },
  {
    spotifyUrl: "https://open.spotify.com/album/5d1oZFaGNrKVJZEaEZvtMG",
    type: "Mixtape",
    year: "2025",
  },
  {
    spotifyUrl: "https://open.spotify.com/album/00Pb3fwHW4wDnPl1YmZc4J",
    type: "Album",
    year: "2025",
  },
  {
    spotifyUrl: "https://open.spotify.com/album/6IcTG6rIDefjH0BGGLDSJG",
    hyperfollow: "https://distrokid.com/hyperfollow/smithi/sem-mim",
    type: "Single",
    year: "2025",
  },
  {
    spotifyUrl: "https://open.spotify.com/album/18zdnNVbNSnNJt0t5GdTnI",
    hyperfollow: "https://distrokid.com/hyperfollow/smithi/malibu",
    type: "Single",
    year: "2025",
  },
  {
    spotifyUrl: "https://open.spotify.com/album/6QRYxsbVYoxdb12Sgd1gwK",
    hyperfollow: "https://distrokid.com/hyperfollow/smithi/mgoas-2",
    type: "Single",
    year: "2025",
  },
];

