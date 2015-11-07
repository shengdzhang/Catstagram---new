class UsersController < ApplicationController

  skip_before_action :require_log_in!, only: [:new, :create]

  def index
    @users = User.all.select {|user| user.username.downcase != "Guest".downcase}
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    @user.link = "http://res.cloudinary.com/catstagram/image/upload/v1445632575/Anonymous_denjpa.png"
    if @user.save
      log_in(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      redirect_to new_user_url
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if (@user.valid_password?(params[:password]))
      @user.update!(username: params[:new_name], password: params[:new_password], link: params[:link])
    else
      @user.update!(username: params[:new_name], link: params[:link])
    end
  end

  private

  def user_params
    params.require(:user).permit(:password, :username, :link)
  end

end
