import axios from 'axios'
const API_URL = 'https://opentdb.com/api.php?amount=10&type=multiple'

class QuizFetcher {
    static async fetch(){
        const responce = await axios.get(API_URL);
        return responce.data;
    }

}

export default QuizFetcher;