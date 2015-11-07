class Like < ActiveRecord::Base
  validates :user_id, :media_id, presence: true

  belongs_to(
    :media,
    class_name: "Medium",
    foreign_key: :media_id
  )

  belongs_to(
    :user,
    class_name: "User",
    foreign_key: :user_id
  )

end
