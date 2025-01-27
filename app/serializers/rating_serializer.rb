class RatingSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :book_id
end
