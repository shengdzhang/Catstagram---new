class Medium < ActiveRecord::Base
  validates :title, :link, :author_id, presence: true

  belongs_to(
    :user,
    class_name: "User",
    foreign_key: :author_id
  )

  has_many(
    :likes,
    class_name: "Like",
    foreign_key: :media_id
  )

  has_many :comments, as: :commentable, dependent: :destroy
end
