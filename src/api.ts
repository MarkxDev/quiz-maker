export let getCategories = async () => {
    return fetch(`https://opentdb.com/api_category.php`);
}