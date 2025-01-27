class BookSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :author, :rating_score

  has_one :rating
end
