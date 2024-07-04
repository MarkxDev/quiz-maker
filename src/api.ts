export let getCategories =  () => {
    return fetch(`https://opentdb.com/api_category.php`);
}

export let getQuestions =  (category: number, difficulty: string) => {
    return fetch(`https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`);
}