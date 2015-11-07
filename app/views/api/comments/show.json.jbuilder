json.extract!(
  @comment,
  :id, :body, :author_id
)

json.comments do
  json.array!(@comment.comments) do |comment|
    json.extract!(
      comment,
      :id, :body, :author_id, :commentable_id, :commentable_type
    )

    json.author do
      json.extract!(
        comment.user,
        :username, :link
      )
    end
  end
end

json.author do
  json.extract!(
    @comment.user,
    :id, :username, :link
  )
end
