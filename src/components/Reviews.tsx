import { Star } from "lucide-react";

const reviews = [
  {
    name: "Maya R.",
    text: "Thijs geeft met humor les, zo leuk om hier te zijn en te ontspannen.",
  },
  {
    name: "James L.",
    text: "Ik had last van een burn-out... hier helemaal tot rust gekomen",
  },
  {
    name: "Priya K.",
    text: "Goeie lessen in pilates.",
  },
];

const ReviewsSection = () => (
  <section id="reviews" className="py-24 px-6">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Reviews</p>
        <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground">
          Hoe ervaren mensen de lessen?
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((t) => (
          <div key={t.name} className="p-8 rounded-2xl bg-card border border-border">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="font-body text-muted-foreground leading-relaxed italic mb-6">"{t.text}"</p>
            <p className="font-heading text-lg font-medium text-foreground">{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
