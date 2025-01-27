# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

books = Book.create([
    {
        name: 'Tools of Titans',
        author: 'Tim Ferriss'
    },
    {
        name: 'Project Hail Mary',
        author: 'Anyd Weir'
    }
])

ratings = Rating.create([
    {
        title: 'Super helpful',
        description: "It's a book I can come back to again and again.",
        score: 5,
        book: books.first
    },
    {
        title: "One of the best fiction boook I've read",
        description: "I'm just disappointed I can't read it for the first time ever again!",
        score: 5,
        book: books.last
    }
])