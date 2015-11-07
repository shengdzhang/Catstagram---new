class Api::CommentsController < ApplicationController

  def index
    @media = Medium.find(params[:media_id])
    @comments = @media.comments
    render json: @comments
  end

  def create
    @comment = Comment.new({commentable_type: params[:type], commentable_id: params[:type_id], body: params[:body]})
    @comment.author_id = current_user.id
    @comment.save!
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def update
    @comment = Comment.find(params[:id])
    @comment.update({body: params[:body]});
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render json: @comment
  end

end
