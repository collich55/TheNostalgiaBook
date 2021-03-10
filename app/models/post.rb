class Post < ApplicationRecord
    validates :body, presence: true

    belongs_to :user,
    foreign_key: :author_id,
    class_name: "User"

    has_many :likes,  class_name: "Like"
    has_many :comments,  class_name: "Comment"




end
