class Api::MediaController < ApplicationController

  def index
    @user = User.find(params[:user_id])
    @media = @user.media
    render json: @media
  end

  def create
    @medium = Medium.new({title: params[:title], link: params[:url], description: params[:description]})
    @medium.author_id = current_user.id
    @medium.save!
    render json: @medium
  end

  def show
    @medium = Medium.find(params[:id])
  end

  def update
    @medium = Medium.find(params[:id])
    @medium.update!({title: params[:title], link: params[:url], description: params[:description]})
    render json: @medium
  end

  def destroy
    @medium = Medium.find(params[:id])
    @medium.destroy
    render json: @medium
  end

end
