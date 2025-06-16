
const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "A Mother's Prayer for Her Children",
      excerpt: "Heartfelt prayers for protection, guidance, and blessing over our precious children...",
      date: "December 15, 2024",
      readTime: "3 min read",
      category: "Prayers",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Advent Reflections: Preparing Our Hearts",
      excerpt: "As we journey through this holy season, let us prepare our hearts for the coming of Christ...",
      date: "December 12, 2024",
      readTime: "5 min read",
      category: "Devotions",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Finding Peace in the Rosary",
      excerpt: "Discover how the daily rosary can transform your prayer life and bring deep peace...",
      date: "December 10, 2024",
      readTime: "4 min read",
      category: "Prayer Life",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-playfair font-bold text-deep-brown mb-4">
            Prayers & Devotions
          </h3>
          <p className="text-lg text-deep-brown/70 max-w-2xl mx-auto">
            Join me in daily prayers, reflections, and devotions to deepen our faith journey together
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-cream rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-sage text-white px-3 py-1 rounded-full text-sm">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-deep-brown/60 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h4 className="font-playfair font-bold text-deep-brown text-xl mb-3 group-hover:text-sage transition-colors">
                  {post.title}
                </h4>
                
                <p className="text-deep-brown/70 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <button className="text-sage font-medium hover:text-sage/80 transition-colors">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-sage text-sage rounded-lg hover:bg-sage hover:text-white transition-colors font-medium">
            View All Devotions
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
