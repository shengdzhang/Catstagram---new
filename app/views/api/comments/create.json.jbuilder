json.extract!(
  @comment,
  :id, :body, :author_id, :commentable_id, :commentable_type
)

json.author do
  json.extract!(
    @comment.user,
    :id, :username, :link
  )
end
