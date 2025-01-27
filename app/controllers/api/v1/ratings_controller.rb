module Api
    module V1
        class RatingsController < ApplicationController
            
            def create
                rating = Rating.new(rating_params)
                
                if rating.save
                    render json: RatingSerializer.new(rating).serialized_json
                else
                    render json: {error: rating.errors.messages }, status: 422
                end
            end

            def destroy
                if rating.destroy
                    head :no_content
                else
                    render json: {error: rating.errors.messages }, status: 422
                end
            end

            private

            def rating_params
                params.require(:rating).permit(:title, :description, :score, :book_id)
            end
        end
    end
end