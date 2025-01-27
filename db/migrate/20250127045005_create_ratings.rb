class CreateRatings < ActiveRecord::Migration[8.0]
  def change
    create_table :ratings do |t|
      t.string :title
      t.string :description
      t.integer :score
      t.belongs_to :book, null: false, foreign_key: true

      t.timestamps
    end
  end
end
