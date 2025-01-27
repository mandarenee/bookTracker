class Book < ApplicationRecord
    has_one :rating

    def rating_score
        return 0 unless !!rating.score
        rating.score
    end
end