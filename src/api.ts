export const getCategories = async () => {
    const res = await fetch(`https://opentdb.com/api_category.php`);
    const data = await res.json();
    return data;
}

export const getQuestions = async (category: number, difficulty: string) => {
    try {
        const res = await fetch(`https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`);
        if(!res.ok){
            if(res.status === 429) {throw Error('Too Many Requests');}
            throw (res.status);
        }
        const data = await res.json();
        return data;
    } catch (err) {
        alert(err);
    }
}