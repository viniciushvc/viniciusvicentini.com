import { SEO } from '@/constants/seo'

export async function GET() {
	const allBlogs = await getBlogPosts()

	const itemsXml = allBlogs
		.sort((a, b) => {
			if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
				return -1
			}
			return 1
		})
		.map(
			(post) =>
				`<item>
          <title>${post.metadata.title}</title>
          <link>${SEO.url}/blog/${post.slug}</link>
          <description>${post.metadata.summary || ''}</description>
          <pubDate>${new Date(post.metadata.publishedAt).toUTCString()}</pubDate>
        </item>`,
		)
		.join('\n')

	const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>My Portfolio</title>
        <link>${SEO.url}</link>
        <description>This is my portfolio RSS feed</description>
        ${itemsXml}
    </channel>
  </rss>`

	return new Response(rssFeed, {
		headers: {
			'Content-Type': 'text/xml',
		},
	})
}
