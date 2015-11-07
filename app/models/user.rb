class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true }

  attr_reader :password

  after_initialize :ensure_session_token

  has_many(
    :comments,
    class_name: "Comment",
    foreign_key: :author_id
  )

  has_many(
    :follows,
    class_name: "Follow",
    foreign_key: :follower_id
  )

  has_many(
    :followed,
    class_name: "Follow",
    foreign_key: :followee_id
  )

  has_many(
    :liked_media,
    class_name: "Like",
    foreign_key: :user_id
  )

  has_many(
    :followees,
    through: :follows,
    source: :followee
  )

  has_many(
    :followers,
    through: :followed,
    source: :follower
  )

  has_many(
    :media,
    class_name: "Medium",
    foreign_key: :author_id
  )

  def self.guest
    user = User.find_by_username("Guest")
    user = User.create({username: "Guest", password: SecureRandom.urlsafe_base64(16).to_s, link: "http://res.cloudinary.com/catstagram/image/upload/v1445632575/Anonymous_denjpa.png"}) unless (user)
    return user
  end

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil unless user && user.valid_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
