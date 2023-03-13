//Add more parameters to make add more filters.
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
    posts.sort(
      (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
    );
  } else {
    posts.sort(() => Math.random() - 0.5);
  }

  //limit
  if (typeof limit === 'number') {
    return posts.slice(0, limit);
  }

  return posts;
}

export function dateFormat(date) {
  return date.toString().split('T')[0];
}
