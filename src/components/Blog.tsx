import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Blog = () => {
  const posts = [
    {
      category: "Categoria",
      title: "Velit officia consequat duis enim velit mollit.",
      excerpt: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    },
    {
      category: "Categoria", 
      title: "Velit officia consequat duis enim velit mollit.",
      excerpt: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
    },
    {
      category: "Categoria",
      title: "Velit officia consequat duis enim velit mollit.", 
      excerpt: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Blog</h2>
          <a href="#" className="text-secondary hover:underline">
            Confira nosso blog
          </a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-3">
                <span className="text-sm text-secondary font-medium">
                  {post.category}
                </span>
              </CardHeader>
              <CardContent className="pt-0">
                <h3 className="font-bold text-primary mb-3 leading-tight">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {post.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;