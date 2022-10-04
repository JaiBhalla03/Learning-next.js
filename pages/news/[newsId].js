import {useRouter} from 'next/router';

function DetailPage(){
    const router = useRouter();
    router.query.newsId; 
    const newsId = router.query.newsId;
    //sent a request to the backend api
    //to fetch the news item with newsId
    
    return <h1>Details page</h1>
}


export default DetailPage; 