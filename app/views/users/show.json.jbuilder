json.partial! 'users/user', user: @user

json.followers do
  json.array!(@user.followers) do |follower|
    json.extract!(
      follower,
      :id, :username
    )
  end
end
