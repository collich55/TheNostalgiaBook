class Comment < ApplicationRecord
    validates :commenter_id, :post_id, :body, presence: true

    belongs_to :post, class_name: "Post"
end
