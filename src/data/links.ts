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
    videoUrl: "/new-wave.mp4",
  },
  {
    spotifyUrl: "https://open.spotify.com/album/00Pb3fwHW4wDnPl1YmZc4J",
    type: "Single",
    year: "2025",
    videoUrl: "/fresh-frozen.mp4",
  },
  {
    spotifyUrl: "https://open.spotify.com/album/5d1oZFaGNrKVJZEaEZvtMG",
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

import { Artist } from "@/types";

export const artists: Artist[] = [
  {
    id: "smithi",
    name: "SMITH-I",
    role: "MC / Rapper",
    type: "person",
    bio: "Unindo técnica e vivência em rimas que elevam a estética do Trap e R&B nacional através da Kushroom.",
    imageUrl: "/smithi.png",
    instagram: "oficialsmithi",
    spotifyArtistId: "3F6e656ceOWAX8FBj01jDM",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/oficialsmithi", icon: "instagram" },
      { label: "YouTube", url: "https://www.youtube.com/@SMITH-I", icon: "youtube" },
      { label: "TikTok", url: "https://www.tiktok.com/@oficialsmithi", icon: "tiktok" },
      { label: "Threads", url: "https://www.threads.net/@oficialsmithi", icon: "threads" },
    ],
    releases: [
      { spotifyUrl: "https://open.spotify.com/album/00Pb3fwHW4wDnPl1YmZc4J", type: "Single", videoUrl: "/fresh-frozen.mp4" },
      { spotifyUrl: "https://open.spotify.com/album/4nGRGyxfQPXsPpNco9dxRn", type: "EP" },
      { spotifyUrl: "https://open.spotify.com/album/6IcTG6rIDefjH0BGGLDSJG", type: "Single" },
      { spotifyUrl: "https://open.spotify.com/album/18zdnNVbNSnNJt0t5GdTnI", type: "Single" },
      { spotifyUrl: "https://open.spotify.com/album/6QRYxsbVYoxdb12Sgd1gwK", type: "Single" },
    ]
  },
  {
    id: "marqueta",
    name: "Marqueta",
    role: "Beatmaker / Produtor Musical",
    type: "person",
    bio: "Produções que transitam pelo trap with influências de Afrobeat, funk, dub e eletrônica. Melodias ricas e atmosferas imersivas marcam sua identidade na Kushroom.",
    imageUrl: "/marqueta.jpg",
    instagram: "marquetaksh",
    spotifyArtistId: "1Tz6A1pFJwm3zhsTncq7OY",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/marquetaksh", icon: "instagram" },
      { label: "Beatplace", url: "https://beatplace.co/marqueta", icon: "globe" },
    ],
    releases: [
        { 
            spotifyUrl: "https://open.spotify.com/album/5d1oZFaGNrKVJZEaEZvtMG", 
            type: "Album", 
            videoUrl: "/global-glitch.mp4" 
        }
    ],
    coAuthoredReleases: [
        { spotifyUrl: "https://open.spotify.com/album/00Pb3fwHW4wDnPl1YmZc4J", type: "Beats / Produção" },
        { spotifyUrl: "https://open.spotify.com/album/6IcTG6rIDefjH0BGGLDSJG", type: "Beats / Produção" },
        { spotifyUrl: "https://open.spotify.com/album/4nGRGyxfQPXsPpNco9dxRn", type: "Beats / Produção" },
    ]
  },
  {
    id: "mossato",
    name: "Mossato",
    role: "Produtor • 3D • Audiovisual",
    type: "person",
    bio: "Engenheiro de mix e master da Kushroom, moldando o punch e a identidade sonora de todos os projetos do SMITH-I. Especialista em 3D e audiovisual.",
    imageUrl: "/mossato.jpg",
    instagram: "mossato1400",
    spotifyArtistId: "2TWnRDDuauLetwhxZV2mEb",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/mossato1400", icon: "instagram" },
      { label: "YouTube", url: "https://www.youtube.com/@mossato1400", icon: "youtube" },
    ],
    releases: [
        { 
            spotifyUrl: "https://open.spotify.com/album/7rYD1stUnPl3qzFmqqGcT0", 
            type: "EP", 
            year: "2024" 
        },
        { 
            spotifyUrl: "https://open.spotify.com/album/5Um8UBdMxAm3M3nzeWo7fF", 
            type: "Single", 
            year: "2024" 
        },
        { 
            spotifyUrl: "https://open.spotify.com/album/2Sxj7pzH79Y0tc5iErk1F1", 
            type: "Single", 
            year: "2024" 
        }
    ],
    coAuthoredReleases: [
        { spotifyUrl: "https://open.spotify.com/album/00Pb3fwHW4wDnPl1YmZc4J", type: "Mix / Master" },
        { spotifyUrl: "https://open.spotify.com/album/4nGRGyxfQPXsPpNco9dxRn", type: "Produção / Mix / Master" },
        { spotifyUrl: "https://open.spotify.com/album/6IcTG6rIDefjH0BGGLDSJG", type: "Mix / Master" },
        { spotifyUrl: "https://open.spotify.com/album/18zdnNVbNSnNJt0t5GdTnI", type: "Mix / Master" },
        { spotifyUrl: "https://open.spotify.com/album/6QRYxsbVYoxdb12Sgd1gwK", type: "Mix / Master" },
    ]
  },
  {
    id: "chico",
    name: "Chico Dias",
    role: "Instrumentista / Produtor",
    type: "person",
    bio: "Guitarrista da cena independente de SP desde 2009. Com passagens por metal, rap e jazz, traz arranjos ricos e influências latinas para o som da Kushroom.",
    imageUrl: "/chico.jpg",
    instagram: "chicodisk",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/chicodisk", icon: "instagram" },
      { label: "TikTok", url: "https://www.tiktok.com/@chicodisk", icon: "tiktok" },
    ],
    coAuthoredReleases: [
        { spotifyUrl: "https://open.spotify.com/album/00Pb3fwHW4wDnPl1YmZc4J", type: "Captação / Mix / Master / Guitarra" },
        { spotifyUrl: "https://open.spotify.com/album/4nGRGyxfQPXsPpNco9dxRn", type: "Captação / Mix / Master" },
        { spotifyUrl: "https://open.spotify.com/album/6IcTG6rIDefjH0BGGLDSJG", type: "Captação / Mix / Master" },
        { spotifyUrl: "https://open.spotify.com/album/18zdnNVbNSnNJt0t5GdTnI", type: "Captação" },
        { spotifyUrl: "https://open.spotify.com/album/6QRYxsbVYoxdb12Sgd1gwK", type: "Captação" },
        { spotifyUrl: "https://open.spotify.com/album/5LUn94Sg6V5xmZ7SnUM0js", type: "Guitarra / Arranjo" },
        { spotifyUrl: "https://open.spotify.com/album/6zq2HK0rdTNUud8JWy3u4Q", type: "Participação / Guitarra" },
    ]
  },
  {
    id: "carva",
    name: "Lucas Carvalho",
    role: "Artista Visual / Tatuador",
    type: "person",
    bio: "Responsável pela estética visual da Kushroom. Fundador do Tattoo Carva e co-criador da Kushroom Clothing, unindo arte visual, moda e lifestyle.",
    imageUrl: "/carva.jpg",
    instagram: "lu_carva",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/tattoo_carva", icon: "instagram" },
      { label: "TikTok", url: "https://www.tiktok.com/@tattoo_carva", icon: "tiktok" },
      { label: "WhatsApp", url: "https://api.whatsapp.com/send?phone=5511967235177", icon: "globe" },
      { label: "Salvar na agenda", url: "https://meuairgo.com.br/vcard/d3029997", icon: "globe" },
    ]
  },
  {
    id: "clothing",
    name: "Kushroom Clothing",
    role: "Moda & Lifestyle",
    type: "entity",
    bio: "A vertente de moda da Kushroom, conectando a estética da música urbana com o lifestyle independente e a arte visual.",
    imageUrl: "/clothing.jpg",
    instagram: "kushroomco",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/kushroomco", icon: "instagram" },
      { label: "Website", url: "#", icon: "globe", locked: true },
    ]
  },
  {
    id: "kushroomog",
    name: "Kushroom OG",
    role: "Founders / Creative Directors",
    type: "entity",
    bio: "Os pilares criativos por trás da Kushroom, responsáveis pela visão, direção artística e curadoria de todo o ecossistema da label.",
    imageUrl: "/kushroomog.jpg",
    instagram: "kushroom.wav",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/kushroom.wav", icon: "instagram" },
      { label: "Site Oficial", url: "https://kushroom.site", icon: "globe" },
    ]
  }
];
