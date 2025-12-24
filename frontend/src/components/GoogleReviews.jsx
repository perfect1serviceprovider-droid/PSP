import { useEffect, useState } from "react";
import { LoadScript } from "@react-google-maps/api";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const PLACE_ID = "ChIJb-AOyQqEn2ER62dXTjASIrc";
const libraries = ["places"];

export default function GoogleReviews() {
  const [reviews, setReviews] = useState([]);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (!scriptLoaded || !window.google) return;

    try {
      const service = new window.google.maps.places.PlacesService(
        document.createElement("div")
      );

      service.getDetails(
        {
          placeId: PLACE_ID,
          fields: ["reviews", "rating", "user_ratings_total"],
        },
        (place, status) => {
          if (
            status === window.google.maps.places.PlacesServiceStatus.OK &&
            place?.reviews
          ) {
            setReviews(place.reviews.slice(0, 6)); // show max 6
          } else {
            console.error("Google Places API Error:", status);
          }
        }
      );
    } catch (error) {
      console.error("Error initializing Google Places Service:", error);
    }
  }, [scriptLoaded]);

  return (
    <LoadScript
      googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}
      libraries={libraries}
      onLoad={() => setScriptLoaded(true)}
      onError={(err) => console.error("Google Maps Script Error:", err)}
    >
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl lg:text-5xl font-black text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What Our Clients Say
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-600 mb-4 line-clamp-4">
                  {review.text}
                </p>

                {/* Author */}
                <div className="font-bold text-gray-900">
                  {review.author_name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </LoadScript>
  );
}
