import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
    url: 'http://localhost:2369',
    key: '7e8ebcac70089a7dcd2fb2f206',
    version: 'v3'
})

export async function getPosts() {
    return await api.posts
        .browse({
            limit: 'all',
            include: 'authors, tags'
        })
        .catch((err) => {
            console.error(err)
        })
}

export async function getSinglePost(postSlug) {
    return await api.posts
        .read({
            slug: postSlug
        })
        .catch((err) => {
            console.error(err)
        })
}