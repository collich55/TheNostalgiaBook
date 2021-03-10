class Like < ApplicationRecord
    validates :liker_id, :post_id, presence: true

    belongs_to :post, class_name: "Post"
end
