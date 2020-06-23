// 轮播图的数据类型
export type Banner =  {
    targetId: number,
    url: string,
    imageUrl: string
}
// 热门歌单分类
export type PlayListHot = {
    id: number,
    position: number,
    name: string
}
// 热门歌单
export type SongSheet = {
    id: number,
    name: string,
    picUrl: string,
    playCount: number
}
// 歌手
export type Singer = {
    id: number,
    name: string,
    picUrl: string,
    albumSize: number
}