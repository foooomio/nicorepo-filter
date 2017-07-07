//
// message.js
// http://nicovideo.cdn.nimg.jp/uni/scripts/pages/my/nicorepo/message/ja-jp.js
//

'use strict';

const Author = {
    myself: { value: 'myself', label: '自分' },
    user: { value: 'user', label: 'ユーザー' },
    channel: { value: 'channel', label: 'チャンネル' },
    community: { value: 'community', label: 'コミュニティ' },
};

const Message = {
    messages: [
        {
            label: 'マイリストがフォローされた',
            type: 'nicovideo.user.mylist.followed_announce',
            regexp: /あなたの マイリスト .*? を .*? さんがフォローしました。/,
            author: Author.myself,
        },
        {
            label: 'フォローされた',
            type: 'nicovideo.user.followed_announce',
            regexp: /あなたを .*? さんがフォローしました。/,
            author: Author.myself,
        },
        {
            label: '動画を投稿',
            type: 'nicovideo.user.video.upload',
            regexp: /.*? さんが 動画を投稿しました。/,
            author: Author.user,
        },
        {
            label: '動画ランキング上昇',
            type: 'nicovideo.user.video.update_highest_rankings',
            regexp: /.*? さんの動画が .*? ランキングで .*? 位を達成しました。/,
            author: Author.user,
        },
        {
            label: '生放送で紹介された',
            type: 'nicovideo.user.video.live.introduce',
            regexp: /.*? さんの動画が 生放送 .*? で紹介されました。/,
            author: Author.user,
        },
        {
            label: '動画再生数キリ番達成',
            type: 'nicovideo.user.video.kiriban.play',
            regexp: /.*? さんの動画が .*? 再生を達成しました。/,
            author: Author.user,
        },
        {
            label: 'ニコニ広告で宣伝された',
            type: 'nicovideo.user.video.advertised_announce',
            regexp: /.*? さんの動画が .*? さんにニコニ広告で宣伝されました。 .*?/,
            author: Author.user,
        },
        {
            label: 'ニコニ広告で宣伝した',
            type: 'nicovideo.user.video.advertise',
            regexp: /.*? さんが ニコニ広告で宣伝しました。 .*?/,
            author: Author.user,
        },
        {
            label: '動画をとりあえずマイリストに登録',
            type: 'nicovideo.user.temporary_mylist.add.video',
            regexp: /.*? さんが とりあえずマイリスト に動画を登録しました。/,
            author: Author.user,
        },
        {
            label: 'マンガをとりあえずマイリストに登録',
            type: 'nicovideo.user.temporary_mylist.add.manga.episode',
            regexp: /.*? さんが とりあえずマイリスト にマンガ .*? を登録しました。/,
            author: Author.user,
        },
        {
            label: '書籍をとりあえずマイリストに登録',
            type: 'nicovideo.user.temporary_mylist.add.book',
            regexp: /.*? さんが とりあえずマイリスト に書籍を登録しました。/,
            author: Author.user,
        },
        {
            label: 'ブロマガをとりあえずマイリストに登録',
            type: 'nicovideo.user.temporary_mylist.add.blomaga.article',
            regexp: /.*? さんが とりあえずマイリスト にブロマガを登録しました。/,
            author: Author.user,
        },
        {
            label: '動画をマイリストに登録',
            type: 'nicovideo.user.mylist.add.video',
            regexp: /.*? さんが マイリスト .*? に動画を登録しました。/,
            author: Author.user,
        },
        {
            label: 'マンガをマイリストに登録',
            type: 'nicovideo.user.mylist.add.manga.episode',
            regexp: /.*? さんが マイリスト .*? にマンガ .*? を登録しました。/,
            author: Author.user,
        },
        {
            label: '書籍をマイリストに登録',
            type: 'nicovideo.user.mylist.add.book',
            regexp: /.*? さんが マイリスト .*? に書籍を登録しました。/,
            author: Author.user,
        },
        {
            label: 'ブロマガをマイリストに登録',
            type: 'nicovideo.user.mylist.add.blomaga.article',
            regexp: /.*? さんが マイリスト .*? にブロマガを登録しました。/,
            author: Author.user,
        },
        {
            label: 'スタンプを取得',
            type: 'nicovideo.user.stamp.obtain',
            regexp: /.*? さんがスタンプを取得しました。/,
            author: Author.user,
        },
        {
            label: '立体を投稿',
            type: 'nicovideo.user.solid.upload',
            regexp: /.*? さんが立体を投稿しました。/,
            author: Author.user,
        },
        {
            label: '立体を更新',
            type: 'nicovideo.user.solid.update',
            regexp: /.*? さんが立体の配布データを更新しました。/,
            author: Author.user,
        },
        {
            label: '立体をお気に入り登録',
            type: 'nicovideo.user.solid.favorite',
            regexp: /.*? さんが立体をお気に入り登録しました。/,
            author: Author.user,
        },
        {
            label: '立体を公開',
            type: 'nicovideo.user.solid.distribute',
            regexp: /.*? さんが立体の配布データを公開しました。/,
            author: Author.user,
        },
        {
            label: 'ゲームを投稿',
            type: 'nicovideo.user.nicogame.upload',
            regexp: /.*? さんがゲームを投稿しました。/,
            author: Author.user,
        },
        {
            label: 'ゲームを更新',
            type: 'nicovideo.user.nicogame.update',
            regexp: /.*? さんがゲームを更新しました。/,
            author: Author.user,
        },
        {
            label: 'ナレッジを投稿',
            type: 'nicovideo.user.knowledge.upload',
            regexp: /.*? さんが ナレッジを投稿しました。/,
            author: Author.user,
        },
        {
            label: '記事を投稿',
            type: 'nicovideo.user.blomaga.upload',
            regexp: /.*? さんが記事を投稿しました。/,
            author: Author.user,
        },
        {
            label: 'アプリを開始',
            type: 'nicovideo.user.app.install',
            regexp: /.*? さんが アプリを遊びはじめました。/,
            author: Author.user,
        },
        {
            label: 'マンガをお気に入り',
            type: 'nicoseiga.user.manga.content.favorite',
            regexp: /.*? さんがマンガをお気に入りしました。/,
            author: Author.user,
        },
        {
            label: 'マンガを投稿',
            type: 'nicoseiga.user.manga.episode.upload',
            regexp: /.*? さんが +マンガ .*? を投稿しました。/,
            author: Author.user,
        },
        {
            label: 'イラストを投稿',
            type: 'nicoseiga.user.illust.upload',
            regexp: /.*? さんが イラストを投稿しました。/,
            author: Author.user,
        },
        {
            label: 'イラストをクリップ',
            type: 'nicoseiga.user.illust.clip',
            regexp: /.*? さんが イラストをクリップしました。/,
            author: Author.user,
        },
        {
            label: '動画が追加',
            type: 'nicovideo.channel.video.upload',
            regexp: /チャンネル .*? に動画が追加されました。/,
            author: Author.channel,
        },
        {
            label: 'お知らせが追加',
            type: 'nicovideo.channel.info.add',
            regexp: /チャンネル .*? にお知らせが追加されました。/,
            author: Author.channel,
        },
        {
            label: '記事が追加',
            type: 'nicovideo.channel.blomaga.upload',
            regexp: /チャンネル .*? に記事が追加されました。/,
            author: Author.channel,
        },
        {
            label: '生放送を予約',
            type: 'live.channel.program.reserve',
            regexp: /チャンネル .*? で .*? に生放送が予約されました。/,
            author: Author.channel,
        },
        {
            label: '生放送を開始',
            type: 'live.channel.program.onairs',
            regexp: /チャンネル .*? で生放送が開始されました。/,
            author: Author.channel,
        },
        {
            label: '動画を投稿',
            type: 'nicovideo.user.community_member_only_video.upload',
            regexp: /.*? さんが コミュニティ専用動画を投稿しました。/,
            author: Author.community,
        },
        {
            label: '動画を追加',
            type: 'nicovideo.user.community.video.add',
            regexp: /.*? さんが コミュニティ .*? に動画を追加しました。/,
            author: Author.community,
        },
        {
            label: 'お知らせを追加',
            type: 'nicovideo.user.community.info.add',
            regexp: /.*? さんが コミュニティ .*? にお知らせを追加しました。/,
            author: Author.community,
        },
        {
            label: 'レベル上昇',
            type: 'nicovideo.community.level.raise',
            regexp: /.*? の コミュニティレベルが .*? になりました。 .*? が付与されました。/,
            author: Author.community,
        },
        {
            label: '生放送を予約',
            type: 'live.user.program.reserve',
            regexp: /.*? さんが コミュニティ .*? で .*? に生放送を予約しました。/,
            author: Author.community,
        },
        {
            label: '生放送を開始',
            type: 'live.user.program.onairs',
            regexp: /.*? さんが コミュニティ .*? で生放送を開始しました。/,
            author: Author.community,
        },
    ],
    unknown: { type: null, regexp: null, author: null, label: null },
    /**
     * @param {string} message regexp
     * @return {Object} message
     */
    findByText(text) {
        return this.messages.find(message => message.regexp.test(text)) || this.unknown;
    },
    /**
     * @param {string} message type
     * @return {Object} message
     */
    findByType(type) {
        return this.messages.find(message => message.type === type) || this.unknown;
    },
    /**
     * @param {Object} author
     * @return {Object[]} messages
     */
    findByAuthor(author) {
        return this.messages.filter(message => message.author.value === author.value);
    },
};
