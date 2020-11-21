export const Post = post => (
    $.ajax({
        method: 'POST',
        url: '/api/posts',
        data: { post }
    })
);

// export const delete_post = postId => {
//     return $.ajax({
//         method: 'DELETE',
//         url: `/api/posts/${postId}`
//     })
// };
