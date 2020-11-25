class Friendship < ApplicationRecord
    validates :requester_id, :requestee_id, presence: true
    validates :accepted, inclusion: {in: [true, false]}

    belongs_to :requester, class_name: "User"
    belongs_to :requestee, class_name: "User"

    
end

