import { useEffect, useState } from "react";
import { LoadScript } from "@react-google-maps/api";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const PLACE_ID = "ChIJb-AOyQqEn2ER62dXTjASIrc";
const libraries = ["places"];

export default function GoogleReviews() {
  const [reviews, setReviews] = useState([]);
  const [overallRating, setOverallRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

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
          setLoading(false);
          if (
            status === window.google.maps.places.PlacesServiceStatus.OK &&
            place?.reviews
          ) {
            setReviews(place.reviews.slice(0, 6));
            setOverallRating(place.rating || 0);
            setTotalReviews(place.user_ratings_total || 0);
          } else {
            console.error("Google Places API Error:", status);
          }
        }
      );
    } catch (error) {
      setLoading(false);
      console.error("Error initializing Google Places Service:", error);
    }
  }, [scriptLoaded]);

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <LoadScript
      googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}
      libraries={libraries}
      onLoad={() => setScriptLoaded(true)}
      onError={(err) => console.error("Google Maps Script Error:", err)}
    >
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real reviews from real clients on Google
            </p>

            {/* Overall Rating */}
            {overallRating > 0 && (
              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <span className="text-4xl font-bold text-gray-900">
                    {overallRating.toFixed(1)}
                  </span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < Math.round(overallRating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-gray-300 text-gray-300"
                          }`}
                      />
                    ))}
                  </div>
                </div>
                <span className="text-gray-500">|</span>
                <span className="text-gray-600">{totalReviews} reviews</span>
              </div>
            )}
          </motion.div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
            </div>
          )}

          {/* Reviews Grid */}
          {!loading && reviews.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-blue-500 mb-4" />

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < review.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-gray-300 text-gray-300"
                          }`}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
                    {review.text}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {getInitials(review.author_name)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {review.author_name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {review.relative_time_description}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* No Reviews State */}
          {!loading && reviews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No reviews available at the moment.</p>
            </div>
          )}

          {/* View More Button */}
          {reviews.length > 0 && (
            <motion.div
              className="text-center mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <a
                href="https://share.google/2rQ1BwtiClwNR7kWL"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
              >
                View All Reviews on Google
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </motion.div>
          )}
        </div>
      </section>
    </LoadScript>
  );
}
