export interface KakaoLatLng {
  getLat(): number
  getLng(): number
}

export interface KakaoMapOptions {
  center: KakaoLatLng
  level?: number
}

export interface KakaoMap {
  setCenter(position: KakaoLatLng): void
}

export interface KakaoMarker {
  setMap(map: KakaoMap | null): void
}

declare global {
  interface Window {
    kakao: {
      maps: {
        load: (callback: () => void) => void
        LatLng: {
          new (lat: number, lng: number): KakaoLatLng
        }
        Map: {
          new (container: HTMLElement, options: KakaoMapOptions): KakaoMap
        }
        Marker: {
          new (options: { position: KakaoLatLng }): KakaoMarker
        }
      }
    }
  }
}

export {}
