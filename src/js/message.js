//
// message.js
// http://nicovideo.cdn.nimg.jp/uni/scripts/pages/my/nicorepo/message/ja-jp.js
//

'use strict';

const Author = {
    user: { value: 'user', label: 'ユーザー' },
    channel: { value: 'channel', label: 'チャンネル' },
    community: { value: 'community', label: 'コミュニティ' },
};

const Message = {
    messages: [
        {
            label: '動画の投稿',
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
            label: '生放送紹介',
            type: 'nicovideo.user.video.live.introduce',
            regexp: /.*? さんの動画が 生放送 .*? で紹介されました。/,
            author: Author.user,
        },
        {
            label: '再生数キリ番達成',
            type: 'nicovideo.user.video.kiriban.play',
            regexp: /.*? さんの動画が .*? 再生を達成しました。/,
            author: Author.user,
        },
        {
            label: 'ニコニ広告の宣伝(された)',
            type: 'nicovideo.user.video.advertised_announce',
            // also nicoad.user.advertised.video.announce
            // also nicoad.user.advertised.program.announce
            // also nicoad.user.advertised.program.cas.announce
            // also nicoad.user.advertised.game.announce
            regexp: /.*? さんの(?:動画|生放送(?:（実験放送）)?|ゲーム)が .*? さんにニコニ広告(?:で宣伝)?されました。 .*?/,
            author: Author.user,
        },
        {
            label: 'ニコニ広告の宣伝(した)',
            type: 'nicovideo.user.video.advertise',
            // also nicoad.user.advertise.video
            // also nicoad.user.advertise.program
            // also nicoad.user.advertise.program.cas
            // also nicoad.user.advertise.game
            regexp: /.*? さんが ?ニコニ広告(?:で宣伝)?しました。 .*?/,
            author: Author.user,
        },
        {
            label: 'とりあえずマイリスト登録[動画]',
            type: 'nicovideo.user.temporary_mylist.add.video',
            regexp: /.*? さんが とりあえずマイリスト に動画を登録しました。/,
            author: Author.user,
        },
        {
            label: 'とりあえずマイリスト登録[マンガ]',
            type: 'nicovideo.user.temporary_mylist.add.manga.episode',
            regexp: /.*? さんが とりあえずマイリスト にマンガ .*? を登録しました。/,
            author: Author.user,
        },
        {
            label: 'とりあえずマイリスト登録[書籍]',
            type: 'nicovideo.user.temporary_mylist.add.book',
            regexp: /.*? さんが とりあえずマイリスト に書籍を登録しました。/,
            author: Author.user,
        },
        {
            label: 'とりあえずマイリスト登録[ブロマガ]',
            type: 'nicovideo.user.temporary_mylist.add.blomaga.article',
            regexp: /.*? さんが とりあえずマイリスト にブロマガを登録しました。/,
            author: Author.user,
        },
        {
            label: 'マイリスト登録[動画]',
            type: 'nicovideo.user.mylist.add.video',
            regexp: /.*? さんが マイリスト .*? に動画を登録しました。/,
            author: Author.user,
        },
        {
            label: 'マイリスト登録[マンガ]',
            type: 'nicovideo.user.mylist.add.manga.episode',
            regexp: /.*? さんが マイリスト .*? にマンガ .*? を登録しました。/,
            author: Author.user,
        },
        {
            label: 'マイリスト登録[書籍]',
            type: 'nicovideo.user.mylist.add.book',
            regexp: /.*? さんが マイリスト .*? に書籍を登録しました。/,
            author: Author.user,
        },
        {
            label: 'マイリスト登録[ブロマガ]',
            type: 'nicovideo.user.mylist.add.blomaga.article',
            regexp: /.*? さんが マイリスト .*? にブロマガを登録しました。/,
            author: Author.user,
        },
        {
            label: 'スタンプ取得',
            type: 'nicovideo.user.stamp.obtain',
            regexp: /.*? さんがスタンプを取得しました。/,
            author: Author.user,
        },
        {
            label: '立体の投稿',
            type: 'nicovideo.user.solid.upload',
            regexp: /.*? さんが立体を投稿しました。/,
            author: Author.user,
        },
        {
            label: '立体の更新',
            type: 'nicovideo.user.solid.update',
            regexp: /.*? さんが立体の配布データを更新しました。/,
            author: Author.user,
        },
        {
            label: '立体のお気に入り登録',
            type: 'nicovideo.user.solid.favorite',
            regexp: /.*? さんが立体をお気に入り登録しました。/,
            author: Author.user,
        },
        {
            label: '立体の公開',
            type: 'nicovideo.user.solid.distribute',
            regexp: /.*? さんが立体の配布データを公開しました。/,
            author: Author.user,
        },
        {
            label: 'ゲームの投稿',
            type: 'nicovideo.user.nicogame.upload',
            // also nicogame.user.game.upload
            regexp: /.*? さんがゲームを投稿しました。/,
            author: Author.user,
        },
        {
            label: 'ゲームの更新',
            type: 'nicovideo.user.nicogame.update',
            // also nicogame.user.game.update
            regexp: /.*? さんがゲームを更新しました。/,
            author: Author.user,
        },
        {
            label: 'ナレッジの投稿',
            type: 'nicovideo.user.knowledge.upload',
            regexp: /.*? さんが ナレッジを投稿しました。/,
            author: Author.user,
        },
        {
            label: '記事の投稿',
            type: 'nicovideo.user.blomaga.upload',
            regexp: /.*? さんが記事を投稿しました。/,
            author: Author.user,
        },
        {
            label: 'アプリの開始',
            type: 'nicovideo.user.app.install',
            regexp: /.*? さんが アプリを遊びはじめました。/,
            author: Author.user,
        },
        {
            label: 'マンガのお気に入り',
            type: 'nicoseiga.user.manga.content.favorite',
            regexp: /.*? さんがマンガをお気に入りしました。/,
            author: Author.user,
        },
        {
            label: 'マンガの投稿',
            type: 'nicoseiga.user.manga.episode.upload',
            regexp: /.*? さんが +マンガ .*? を投稿しました。/,
            author: Author.user,
        },
        {
            label: 'イラストの投稿',
            type: 'nicoseiga.user.illust.upload',
            regexp: /.*? さんが イラストを投稿しました。/,
            author: Author.user,
        },
        {
            label: 'イラストのクリップ',
            type: 'nicoseiga.user.illust.clip',
            regexp: /.*? さんが イラストをクリップしました。/,
            author: Author.user,
        },
        {
            label: '生放送の開始',
            type: 'live.user.program.cas.onairs',
            regexp: /.*? さんが コミュニティ .*? で生放送(?:（実験放送）)?を開始しました。/,
            author: Author.user,
        },
        {
            label: '動画の追加',
            type: 'nicovideo.channel.video.upload',
            regexp: /チャンネル .*? に動画が追加されました。/,
            author: Author.channel,
        },
        {
            label: 'お知らせの追加',
            type: 'nicovideo.channel.info.add',
            regexp: /チャンネル .*? にお知らせが追加されました。/,
            author: Author.channel,
        },
        {
            label: '記事の追加',
            type: 'nicovideo.channel.blomaga.upload',
            regexp: /チャンネル .*? に記事が追加されました。/,
            author: Author.channel,
        },
        {
            label: '生放送の予約',
            type: 'live.channel.program.reserve',
            regexp: /チャンネル .*? で .*? に生放送が予約されました。/,
            author: Author.channel,
        },
        {
            label: '生放送の開始',
            type: 'live.channel.program.onairs',
            regexp: /チャンネル .*? で生放送が開始されました。/,
            author: Author.channel,
        },
        {
            label: '動画の投稿',
            type: 'nicovideo.user.community_member_only_video.upload',
            regexp: /.*? さんが コミュニティ専用動画を投稿しました。/,
            author: Author.community,
        },
        {
            label: '動画の登録',
            type: 'nicovideo.user.community.video.add',
            // also nicommunity.user.video.registered
            regexp: /.*? さんが コミュニティ .*? に動画を登録しました。/,
            author: Author.community,
        },
        {
            label: 'イラストの登録',
            type: 'nicommunity.user.illust.registered',
            regexp: /.*? さんが コミュニティ .*? にイラストを登録しました。/,
            author: Author.community,
        },
        {
            label: 'お知らせの登録',
            type: 'nicovideo.user.community.info.add',
            // also nicommunity.user.community_news.created
            regexp: /.*? さんが コミュニティ .*? にお知らせを追加しました。|お知らせ .*? を コミュニティ .*? に登録しました。/,
            author: Author.community,
        },
        {
            label: 'レベル上昇',
            type: 'nicovideo.community.level.raise',
            // also nicommunity.community.no_privileged.levelup
            // also nicommunity.community.privileged.levelup
            regexp: /.*? の コミュニティレベルが .*? になりました。/,
            author: Author.community,
        },
        {
            label: '生放送の予約',
            type: 'live.user.program.reserve',
            regexp: /.*? さんが コミュニティ .*? で .*? に生放送を予約しました。/,
            author: Author.community,
        },
        {
            label: '生放送の開始',
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
