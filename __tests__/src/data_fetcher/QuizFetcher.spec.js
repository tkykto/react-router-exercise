import QuizFetcher from '../../../src/data_fetcher/QuizFetcher'

describe('QuizFetcherのテスト',()=>{
    it('クラスチェック',()=>{
        expect(typeof QuizFetcher).toStrictEqual('function')
    })
})