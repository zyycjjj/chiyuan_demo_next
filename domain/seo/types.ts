export interface SEOConfig {
  title: string
  description: string
  keywords: string
  ogImage: string
  url: string
  siteName: string
  locale: string
  type: 'website' | 'article' | 'book' | 'profile' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other'
}
