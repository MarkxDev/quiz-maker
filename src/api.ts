export const getCategories = async () => {
    const res = await fetch(`https://opentdb.com/api_category.php`)
    return res.json();
}

export const getQuestions = async (category: number, difficulty: string) => {
    const res = await fetch(`https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`);
    return res.json();
}