class LikesController < ApplicationController

  def index
    @likes = Like.all
    @id = params[:media_id].to_i
    @likes = @likes.find_all {|like| like.media_id == @id}
    render json: @likes
  end

  def create
    @like = Like.new({media_id: params[:media_id]})
    @like.user_id = current_user.id
    @like.save!
    render json: @like
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy
    render json: @like
  end

end
