//
// message.js
// http://nicovideo.cdn.nimg.jp/uni/scripts/pages/my/nicorepo/message/ja-jp.js
//

'use strict';

const Message = {
    myself: [
        {
            label: 'マイリストがフォローされた',
            type: 'nicovideo.user.mylist.followed_announce',
            regexp: /あなたの マイリスト .*? を .*? さんがフォローしました。/,
        },
        {
            label: 'フォローされた',
            type: 'nicovideo.user.followed_announce',
            regexp: /あなたを .*? さんがフォローしました。/,
        },
    ],
    user: [
        {
            label: '動画を投稿',
            type: 'nicovideo.user.video.upload',
            regexp: /.*? さんが 動画を投稿しました。/,
        },
        {
            label: '動画ランキング上昇',
            type: 'nicovideo.user.video.update_highest_rankings',
            regexp: /.*? さんの動画が .*? ランキングで .*? 位を達成しました。/,
        },
        {
            label: '生放送で紹介された',
            type: 'nicovideo.user.video.live.introduce',
            regexp: /.*? さんの動画が 生放送 .*? で紹介されました。/,
        },
        {
            label: '動画再生数キリ番達成',
            type: 'nicovideo.user.video.kiriban.play',
            regexp: /.*? さんの動画が .*? 再生を達成しました。/,
        },
        {
            label: 'ニコニ広告で宣伝された',
            type: 'nicovideo.user.video.advertised_announce',
            regexp: /.*? さんの動画が .*? さんにニコニ広告で宣伝されました。 .*?/,
        },
        {
            label: 'ニコニ広告で宣伝した',
            type: 'nicovideo.user.video.advertise',
            regexp: /.*? さんが ニコニ広告で宣伝しました。 .*?/,
        },
        {
            label: '動画をとりあえずマイリストに登録',
            type: 'nicovideo.user.temporary_mylist.add.video',
            regexp: /.*? さんが とりあえずマイリスト に動画を登録しました。/,
        },
        {
            label: 'マンガをとりあえずマイリストに登録',
            type: 'nicovideo.user.temporary_mylist.add.manga.episode',
            regexp: /.*? さんが とりあえずマイリスト にマンガ .*? を登録しました。/,
        },
        {
            label: '書籍をとりあえずマイリストに登録',
            type: 'nicovideo.user.temporary_mylist.add.book',
            regexp: /.*? さんが とりあえずマイリスト に書籍を登録しました。/,
        },
        {
            label: 'ブロマガをとりあえずマイリストに登録',
            type: 'nicovideo.user.temporary_mylist.add.blomaga.article',
            regexp: /.*? さんが とりあえずマイリスト にブロマガを登録しました。/,
        },
        {
            label: '動画をマイリストに登録',
            type: 'nicovideo.user.mylist.add.video',
            regexp: /.*? さんが マイリスト .*? に動画を登録しました。/,
        },
        {
            label: 'マンガをマイリストに登録',
            type: 'nicovideo.user.mylist.add.manga.episode',
            regexp: /.*? さんが マイリスト .*? にマンガ .*? を登録しました。/,
        },
        {
            label: '書籍をマイリストに登録',
            type: 'nicovideo.user.mylist.add.book',
            regexp: /.*? さんが マイリスト .*? に書籍を登録しました。/,
        },
        {
            label: 'ブロマガをマイリストに登録',
            type: 'nicovideo.user.mylist.add.blomaga.article',
            regexp: /.*? さんが マイリスト .*? にブロマガを登録しました。/,
        },
        {
            label: 'スタンプを取得',
            type: 'nicovideo.user.stamp.obtain',
            regexp: /.*? さんがスタンプを取得しました。/,
        },
        {
            label: '立体を投稿',
            type: 'nicovideo.user.solid.upload',
            regexp: /.*? さんが立体を投稿しました。/,
        },
        {
            label: '立体を更新',
            type: 'nicovideo.user.solid.update',
            regexp: /.*? さんが立体の配布データを更新しました。/,
        },
        {
            label: '立体をお気に入り登録',
            type: 'nicovideo.user.solid.favorite',
            regexp: /.*? さんが立体をお気に入り登録しました。/,
        },
        {
            label: '立体を公開',
            type: 'nicovideo.user.solid.distribute',
            regexp: /.*? さんが立体の配布データを公開しました。/,
        },
        {
            label: 'ゲームを投稿',
            type: 'nicovideo.user.nicogame.upload',
            regexp: /.*? さんがゲームを投稿しました。/,
        },
        {
            label: 'ゲームを更新',
            type: 'nicovideo.user.nicogame.update',
            regexp: /.*? さんがゲームを更新しました。/,
        },
        {
            label: 'ナレッジを投稿',
            type: 'nicovideo.user.knowledge.upload',
            regexp: /.*? さんが ナレッジを投稿しました。/,
        },
        {
            label: '記事を投稿',
            type: 'nicovideo.user.blomaga.upload',
            regexp: /.*? さんが記事を投稿しました。/,
        },
        {
            label: 'アプリを開始',
            type: 'nicovideo.user.app.install',
            regexp: /.*? さんが アプリを遊びはじめました。/,
        },
        {
            label: 'マンガをお気に入り',
            type: 'nicoseiga.user.manga.content.favorite',
            regexp: /.*? さんがマンガをお気に入りしました。/,
        },
        {
            label: 'マンガを投稿',
            type: 'nicoseiga.user.manga.episode.upload',
            regexp: /.*? さんが +マンガ .*? を投稿しました。/,
        },
        {
            label: 'イラストを投稿',
            type: 'nicoseiga.user.illust.upload',
            regexp: /.*? さんが イラストを投稿しました。/,
        },
        {
            label: 'イラストをクリップ',
            type: 'nicoseiga.user.illust.clip',
            regexp: /.*? さんが イラストをクリップしました。/,
        },
    ],
    channel: [
        {
            label: '動画が追加',
            type: 'nicovideo.channel.video.upload',
            regexp: /チャンネル .*? に動画が追加されました。/,
        },
        {
            label: 'お知らせが追加',
            type: 'nicovideo.channel.info.add',
            regexp: /チャンネル .*? にお知らせが追加されました。/,
        },
        {
            label: '記事が追加',
            type: 'nicovideo.channel.blomaga.upload',
            regexp: /チャンネル .*? に記事が追加されました。/,
        },
        {
            label: '生放送を予約',
            type: 'live.channel.program.reserve',
            regexp: /チャンネル .*? で .*? に生放送が予約されました。/,
        },
        {
            label: '生放送を開始',
            type: 'live.channel.program.onairs',
            regexp: /チャンネル .*? で生放送が開始されました。/,
        },
    ],
    community: [
        {
            label: '動画を投稿',
            type: 'nicovideo.user.community_member_only_video.upload',
            regexp: /.*? さんが コミュニティ専用動画を投稿しました。/,
        },
        {
            label: '動画を追加',
            type: 'nicovideo.user.community.video.add',
            regexp: /.*? さんが コミュニティ .*? に動画を追加しました。/,
        },
        {
            label: 'お知らせを追加',
            type: 'nicovideo.user.community.info.add',
            regexp: /.*? さんが コミュニティ .*? にお知らせを追加しました。/,
        },
        {
            label: 'レベル上昇',
            type: 'nicovideo.community.level.raise',
            regexp: /.*? の コミュニティレベルが .*? になりました。 .*? が付与されました。/,
        },
        {
            label: '生放送を予約',
            type: 'live.user.program.reserve',
            regexp: /.*? さんが コミュニティ .*? で .*? に生放送を予約しました。/,
        },
        {
            label: '生放送を開始',
            type: 'live.user.program.onairs',
            regexp: /.*? さんが コミュニティ .*? で生放送を開始しました。/,
        },
    ],
    unknown: { type: null, regexp: null, author: null, label: null },
    /**
     * @param {function}
     * @return {Object} message
     */
    find(fn) {
        return [].concat(
            this.myself, this.user, this.channel, this.community
        ).find(fn) || this.unknown;
    },
    /**
     * @param {string} message regexp
     * @return {Object} message
     */
    findByText(text) {
        return this.find(message => message.regexp.test(text));
    },
    /**
     * @param {string} message type
     * @return {Object} message
     */
    findByType(type) {
        return this.find(message => message.type === type);
    }
};
