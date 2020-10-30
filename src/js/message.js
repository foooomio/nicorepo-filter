//
// message.js
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
            regexp: /動画を投稿しました/,
            author: Author.user,
        },
        {
            label: '動画ランキング上昇',
            type: 'nicovideo.user.video.update_highest_rankings',
            regexp: null,
            author: Author.user,
        },
        {
            label: '生放送紹介',
            type: 'nicovideo.user.video.live.introduce',
            regexp: null,
            author: Author.user,
        },
        {
            label: '再生数キリ番達成',
            type: 'nicovideo.user.video.kiriban.play',
            regexp: /.*? 再生を達成しました/,
            author: Author.user,
        },
        {
            label: 'ニコニ広告の被宣伝',
            type: 'nicovideo.user.video.advertised_announce',
            // also nicoad.user.advertised.video.announce
            // also nicoad.user.advertised.program.announce
            // also nicoad.user.advertised.program.cas.announce
            // also nicoad.user.advertised.game.announce
            regexp: null,
            author: Author.user,
        },
        {
            label: 'ニコニ広告の宣伝',
            type: 'nicovideo.user.video.advertise',
            // also nicoad.user.advertise.video
            // also nicoad.user.advertise.program
            // also nicoad.user.advertise.program.cas
            // also nicoad.user.advertise.game
            regexp: /ニコニ広告しました/,
            author: Author.user,
        },
        {
            label: 'とりあえずマイリスト登録[動画]',
            type: 'nicovideo.user.temporary_mylist.add.video',
            regexp: /とりあえずマイリスト に動画を登録しました/,
            author: Author.user,
        },
        {
            label: 'とりあえずマイリスト登録[マンガ]',
            type: 'nicovideo.user.temporary_mylist.add.manga.episode',
            regexp: /とりあえずマイリスト にマンガを登録しました/,
            author: Author.user,
        },
        {
            label: 'とりあえずマイリスト登録[書籍]',
            type: 'nicovideo.user.temporary_mylist.add.book',
            regexp: /とりあえずマイリスト に書籍を登録しました/,
            author: Author.user,
        },
        {
            label: 'とりあえずマイリスト登録[ブロマガ]',
            type: 'nicovideo.user.temporary_mylist.add.blomaga.article',
            regexp: /とりあえずマイリスト にブロマガを登録しました/,
            author: Author.user,
        },
        {
            label: 'マイリスト登録[動画]',
            type: 'nicovideo.user.mylist.add.video',
            regexp: /マイリスト .*? に動画を登録しました/,
            author: Author.user,
        },
        {
            label: 'マイリスト登録[マンガ]',
            type: 'nicovideo.user.mylist.add.manga.episode',
            regexp: /マイリスト .*? にマンガを登録しました/,
            author: Author.user,
        },
        {
            label: 'マイリスト登録[書籍]',
            type: 'nicovideo.user.mylist.add.book',
            regexp: /マイリスト .*? に書籍を登録しました/,
            author: Author.user,
        },
        {
            label: 'マイリスト登録[ブロマガ]',
            type: 'nicovideo.user.mylist.add.blomaga.article',
            regexp: /マイリスト .*? にブロマガを登録しました/,
            author: Author.user,
        },
        {
            label: 'スタンプ取得',
            type: 'nicovideo.user.stamp.obtain',
            regexp: null,
            author: Author.user,
        },
        {
            label: 'ニコニ立体の投稿',
            type: 'nicovideo.user.solid.upload',
            regexp: /ニコニ立体に作品を投稿しました/,
            author: Author.user,
        },
        {
            label: 'ニコニ立体の更新',
            type: 'nicovideo.user.solid.update',
            regexp: /ニコニ立体の配布データを更新しました/,
            author: Author.user,
        },
        {
            label: 'ニコニ立体のお気に入り登録',
            type: 'nicovideo.user.solid.favorite',
            regexp: /ニコニ立体の作品をお気に入り登録しました/,
            author: Author.user,
        },
        {
            label: 'ニコニ立体の公開',
            type: 'nicovideo.user.solid.distribute',
            regexp: /ニコニ立体の配布データを公開しました/,
            author: Author.user,
        },
        {
            label: 'ゲームの投稿',
            type: 'nicovideo.user.nicogame.upload',
            // also nicogame.user.game.upload
            regexp: /ゲームを投稿しました/,
            author: Author.user,
        },
        {
            label: 'ゲームの更新',
            type: 'nicovideo.user.nicogame.update',
            // also nicogame.user.game.update
            regexp: /ゲームを更新しました/,
            author: Author.user,
        },
        {
            label: 'ナレッジの投稿',
            type: 'nicovideo.user.knowledge.upload',
            regexp: null,
            author: Author.user,
        },
        {
            label: 'ブロマガの投稿',
            type: 'nicovideo.user.blomaga.upload',
            regexp: /ブロマガを投稿しました/,
            author: Author.user,
        },
        {
            label: 'アプリの開始',
            type: 'nicovideo.user.app.install',
            regexp: null,
            author: Author.user,
        },
        {
            label: 'マンガのお気に入り登録',
            type: 'nicoseiga.user.manga.content.favorite',
            regexp: /マンガをお気に入り登録しました/,
            author: Author.user,
        },
        {
            label: 'マンガの投稿',
            type: 'nicoseiga.user.manga.episode.upload',
            regexp: /マンガ .*? を投稿しました/,
            author: Author.user,
        },
        {
            label: 'イラストの投稿',
            type: 'nicoseiga.user.illust.upload',
            regexp: /イラストを投稿しました/,
            author: Author.user,
        },
        {
            label: 'イラストのクリップ',
            type: 'nicoseiga.user.illust.clip',
            regexp: /イラストをクリップしました/,
            author: Author.user,
        },
        {
            label: '生放送の開始',
            type: 'live.user.program.cas.onairs',
            regexp: /^生放送を開始しました$/m,
            author: Author.user,
        },
        {
            label: '動画のいいね',
            type: 'video.nicovideo_video_first_liked_by_user',
            regexp: /動画を「いいね！」しました/,
            author: Author.user
        },
        {
            label: '動画の登録',
            type: 'nicovideo.channel.video.upload',
            regexp: /^動画を登録しました$/m,
            author: Author.channel,
        },
        {
            label: 'お知らせの追加',
            type: 'nicovideo.channel.info.add',
            regexp: null,
            author: Author.channel,
        },
        {
            label: 'ブロマガの投稿',
            type: 'nicovideo.channel.blomaga.upload',
            regexp: /ブロマガを投稿しました/,
            author: Author.channel,
        },
        {
            label: '生放送の予約',
            type: 'live.channel.program.reserve',
            regexp: /^.*? に生放送予定です$/m,
            author: Author.channel,
        },
        {
            label: '生放送の開始',
            type: 'live.channel.program.onairs',
            regexp: /^生放送を開始しました$/m,
            author: Author.channel,
        },
        {
            label: '専用動画の投稿',
            type: 'nicovideo.user.community_member_only_video.upload',
            regexp: null,
            author: Author.community,
        },
        {
            label: '動画の登録',
            type: 'nicovideo.user.community.video.add',
            // also nicommunity.user.video.registered
            regexp: /コミュニティ .*? に動画を登録しました/,
            author: Author.community,
        },
        {
            label: 'イラストの登録',
            type: 'nicommunity.user.illust.registered',
            regexp: /コミュニティ .*? にイラストを登録しました/,
            author: Author.community,
        },
        {
            label: 'お知らせの追加',
            type: 'nicovideo.user.community.info.add',
            // also nicommunity.user.community_news.created
            regexp: /お知らせ「 .*? 」をコミュニティ .*? に追加しました/,
            author: Author.community,
        },
        {
            label: 'レベル上昇',
            type: 'nicovideo.community.level.raise',
            // also nicommunity.community.no_privileged.levelup
            // also nicommunity.community.privileged.levelup
            regexp: null,
            author: Author.community,
        },
        {
            label: '生放送の予約',
            type: 'live.user.program.reserve',
            regexp: /.*? にコミュニティ .*? で生放送予定です/,
            author: Author.community,
        },
        {
            label: '生放送の開始',
            type: 'live.user.program.onairs',
            regexp: /コミュニティ .*? で生放送を開始しました/,
            author: Author.community,
        },
    ],
    unknown: { type: null, regexp: null, author: null, label: null },
    /**
     * @param {string} text
     * @return {Object} message
     */
    findByText(text) {
        return this.messages.find(message => message.regexp && message.regexp.test(text)) || this.unknown;
    },
    /**
     * @param {string} type
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
