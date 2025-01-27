class BookSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name

  has_one :rating
end
