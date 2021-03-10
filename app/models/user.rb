class User < ApplicationRecord

  attr_reader :password

  validates :email, :password_digest, :session_token, :full_name, :birth_date, :gender, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token

  # has_many :posts,
  # foreign_key: :author_id,
  # class_name: "Post"

  has_many :friend_requests_as_requester, 
    foreign_key: :requester_id, 
    class_name: "Friendship"
          
  has_many :friend_requests_as_requestee, 
    foreign_key: :requestee_id, 
    class_name: "Friendship"

  has_many :posts,  class_name: "Posts"

  def friend_requests
    self.friend_requests_as_requestee + self.friend_requests_as_requester
  end



  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

end
