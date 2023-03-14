//Filter posts

export function filterArticlePost(
  posts,
  { sortByDate = true, limit = undefined } = {}
) {
  /*
    const filteredPosts = posts.reduce((acc, post) => {
        acc.push(post);
        return acc;
    }, []);

    */

  //sort by date or randomize
  if (sortByDate) {
    posts.sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
  } else {
    posts.sort(() => Math.random() - 0.5);
  }

  //limit
  if (typeof limit === 'number') {
    return posts.slice(0, limit);
  }

  return posts;
}

//Date format
export function dateFormat(date) {
  return date.toString().split('T')[0];
}

//Create a url-friendly slug
export function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}
