import Quiz from '../../../src/models/Quiz'

describe('クイズクラスのテスト', ()=>{
    it('チェック',()=>{
        expect(typeof Quiz ).toStrictEqual('function')
    })
})